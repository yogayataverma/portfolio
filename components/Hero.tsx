import React from 'react';

interface HeroProps {
  name: string;
  title: string;
  summary: string;
}

export const Hero: React.FC<HeroProps> = ({ name, title, summary }) => {
  return (
    <section className="mb-16 text-left">
      <h1 className="text-2xl md:text-3xl font-medium text-terminal-green mb-2">{name}</h1>
      <p className="text-base text-terminal-highlight mb-6">{title}</p>
      <p className="text-gray-400 leading-relaxed text-sm max-w-2xl">
        {summary}
      </p>
    </section>
  );
};