import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section className="mb-16">
      <h2 className="text-base font-mono text-terminal-green mb-8 tracking-wider">
        <span className="text-terminal-highlight">const</span> <span className="text-terminal-pink">experience</span>
      </h2>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
              <h3 className="text-sm font-medium text-gray-200">{exp.role}</h3>
              <span className="text-xs text-gray-600 font-mono">{exp.period}</span>
            </div>

            <div className="mb-4">
              <span className="text-xs text-gray-400">{exp.company}</span>
            </div>

            <ul className="space-y-2 text-gray-400 text-sm leading-relaxed mb-4">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="pl-3 border-l border-gray-800">{resp}</li>
              ))}
            </ul>

            <div className="text-xs text-gray-600">
              {exp.skills}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};