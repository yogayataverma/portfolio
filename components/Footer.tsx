import React from 'react';
import { NavLink } from '../types';

interface FooterProps {
  links: NavLink[];
  copyrightName: string;
}

export const Footer: React.FC<FooterProps> = ({ links, copyrightName }) => {
  return (
    <footer className="mt-20 pt-12 pb-12 text-center">
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-gray-600 hover:text-terminal-pink transition-colors text-xs"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="text-gray-700 text-xs font-mono">
        <span className="text-terminal-highlight">console</span><span className="text-terminal-pink">.</span><span className="text-terminal-green">log</span><span className="text-gray-600">(</span><span className="text-terminal-pink">'© {new Date().getFullYear()} {copyrightName}'</span><span className="text-gray-600">)</span>
      </p>
    </footer>
  );
};