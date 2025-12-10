import React from 'react';
import { ProjectItem } from '../types';

interface ProjectsProps {
    projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <section className="mb-16 animate-fade-in">
            <h2 className="text-base font-mono text-terminal-green mb-8 tracking-wider">
                <span className="text-terminal-highlight">var</span> <span className="text-terminal-pink">projects</span>
            </h2>
            <div className="grid grid-cols-1 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group"
                    >
                        <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-sm font-medium text-gray-200">
                                {project.title}
                            </h3>
                            <a
                                href={project.link}
                                className="text-xs text-gray-600 hover:text-terminal-pink transition-colors font-mono"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-terminal-pink">→</span>
                            </a>
                        </div>

                        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {project.techStack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs text-gray-600"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
