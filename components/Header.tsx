import React from 'react';
import { NavLink as RouterNavLink } from 'react-router';
import { NavLink } from '../types';

interface HeaderProps {
  links: NavLink[];
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <nav className="flex justify-center gap-6 py-12 text-base">
      {links.map((link, index) => {
        const isExternal = link.url.startsWith('http') || link.url.startsWith('mailto');

        if (isExternal) {
          return (
            <a
              key={index}
              href={link.url}
              className="text-gray-500 hover:text-terminal-pink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          );
        }

        return (
          <RouterNavLink
            key={index}
            to={link.url}
            className={({ isActive }) =>
              `text-gray-500 hover:text-terminal-pink transition-colors ${isActive ? 'text-terminal-pink' : ''}`
            }
          >
            {link.label}
          </RouterNavLink>
        );
      })}
    </nav>
  );
};