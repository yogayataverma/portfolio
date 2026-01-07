import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <motion.section className="mb-16" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } } }} >
      <motion.h2 className="text-base font-mono text-terminal-green mb-8 tracking-wider" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } } }} >
        <span className="text-terminal-highlight">const</span> <span className="text-terminal-pink">experience</span>
      </motion.h2>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.1 } } }} >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
              <h3 className="text-sm font-medium text-gray-200">{exp.role}</h3>
              <span className="text-xs text-gray-600 font-mono">{exp.period}</span>
            </div>

            <div className="mb-4">
              <span className="text-xs text-gray-400">{exp.company}</span>
            </div>

            <ul className="space-y-2 text-gray-400 text-sm leading-relaxed mb-4">
              {exp.responsibilities.map((resp, idx) => (
                <motion.li key={idx} className="pl-3 border-l border-gray-800" variants={{ hidden: { opacity: 0, x: -6 }, visible: { opacity: 1, x: 0, transition: { duration: 0.25, delay: idx * 0.03 } } }}>
                  {resp}
                </motion.li>
              ))}
            </ul>

            <div className="text-xs text-gray-600">
              {exp.skills}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};