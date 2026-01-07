import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from '../types';

interface FooterProps {
  links: NavLink[];
  copyrightName: string;
}

export const Footer: React.FC<FooterProps> = ({ links, copyrightName }) => {
  return (
    <motion.footer className="mt-20 pt-12 pb-12 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} >
      <motion.div className="flex flex-wrap justify-center gap-6 mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }} >
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            className="text-gray-600 hover:text-terminal-pink transition-colors text-xs"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>
      <motion.p className="text-gray-700 text-xs font-mono" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} >
        <span className="text-terminal-highlight">console</span><span className="text-terminal-pink">.</span><span className="text-terminal-green">log</span><span className="text-gray-600">(</span><span className="text-terminal-pink">'© {new Date().getFullYear()} {copyrightName}'</span><span className="text-gray-600">)</span>
      </motion.p>
    </motion.footer>
  );
};