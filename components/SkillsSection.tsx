import React from 'react';
import { SkillCategory } from '../types';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="mb-16">
      <h2 className="text-base font-mono text-terminal-green mb-8 tracking-wider">
        <span className="text-terminal-highlight">let</span> <span className="text-terminal-pink">skills</span>
      </h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="text-sm leading-relaxed">
            <span className="font-medium text-gray-300 text-xs">{skill.category}</span>
            <div className="text-gray-500 text-sm mt-1">{skill.items}</div>
          </div>
        ))}
      </div>
    </section>
  );
};