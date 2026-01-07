import React from 'react';
import { motion } from 'framer-motion';
import { ProjectItem } from '../types';

interface ProjectsProps {
    projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <motion.section className="mb-16" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 } } }} >
            <motion.h2 className="text-base font-mono text-terminal-green mb-8 tracking-wider" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} >
                <span className="text-terminal-highlight">var</span> <span className="text-terminal-pink">projects</span>
            </motion.h2>
            <div className="grid grid-cols-1 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="group"
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                        whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
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
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};
