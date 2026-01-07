import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const container = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] } },
  };

  return (
    <motion.section className="mb-16" initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -80px 0px' }} >
      <motion.h2 className="text-base font-mono text-terminal-green mb-8 tracking-wider" variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} >
        <span className="text-terminal-highlight">let</span> <span className="text-terminal-pink">skills</span>
      </motion.h2>
      <motion.div className="space-y-4" variants={container}>
        {skills.map((skill, index) => (
          <motion.div key={index} className="text-sm leading-relaxed" variants={item}>
            <span className="font-medium text-gray-300 text-xs">{skill.category}</span>
            <div className="text-gray-500 text-sm mt-1">{skill.items}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};