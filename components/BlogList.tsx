import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { MDXPost } from '../types';

export const BlogList: React.FC = () => {
    const [posts, setPosts] = useState<MDXPost[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const modules = import.meta.glob('../content/blog/*.mdx');
            const postPromises = Object.entries(modules).map(async ([path, loader]) => {
                const mod = await loader() as any;
                const slug = path.split('/').pop()?.replace('.mdx', '') || '';
                return {
                    slug,
                    ...mod.frontmatter,
                } as MDXPost;
            });

            const loadedPosts = await Promise.all(postPromises);
            loadedPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
            setPosts(loadedPosts);
        };

        fetchPosts();
    }, []);

    return (
        <div className="animate-fade-in">
            <h2 className="text-base font-mono text-terminal-green mb-8 tracking-wider">
                <span className="text-terminal-pink">async</span> <span className="text-terminal-highlight">blog</span>
            </h2>
            <div className="space-y-8">
                {posts.map((post) => (
                    <article key={post.slug} className="group">
                        <Link to={`/blog/${post.slug}`} className="block">
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                                <h3 className="text-sm font-medium group-hover:text-gray-300 transition-colors">
                                    {post.title}
                                </h3>
                                <span className="text-xs text-gray-600 font-mono whitespace-nowrap md:ml-4">
                                    {post.publishedAt}
                                </span>
                            </div>
                            <p className="text-gray-500 text-sm line-clamp-2">
                                {post.summary}
                            </p>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
};
