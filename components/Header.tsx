import React from 'react';
import { NavLink as RouterNavLink } from 'react-router';
import { motion } from 'framer-motion';
import { NavLink } from '../types';

interface HeaderProps {
  links: NavLink[];
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <motion.nav className="flex justify-center gap-6 py-12 text-base" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} >
      {links.map((link, index) => {
        const isExternal = link.url.startsWith('http') || link.url.startsWith('mailto');

        if (isExternal) {
          return (
            <motion.a
              key={index}
              href={link.url}
              className="text-gray-500 hover:text-terminal-pink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              {link.label}
            </motion.a>
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
            <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05, duration: 0.3 }} whileHover={{ y: -2, transition: { duration: 0.2 } }} style={{ display: 'inline-block' }} >
            {link.label}
            </motion.span>
          </RouterNavLink>
        );
      })}
    </motion.nav>
  );
};