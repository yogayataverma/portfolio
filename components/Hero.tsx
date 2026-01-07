import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  name: string;
  title: string;
  summary: string;
}

export const Hero: React.FC<HeroProps> = ({ name, title, summary }) => {
  const [displayedName, setDisplayedName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(prev => prev + name[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, name]);

  return (
    <motion.section className="mb-16 text-left" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } }, }} >
      <motion.h1 className="text-2xl md:text-3xl font-bold text-terminal-green mb-2" variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }} >
        {displayedName}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block ml-1 text-gray-500"
        >
          |
        </motion.span>
      </motion.h1>
      <motion.p 
        className="text-gray-400 leading-relaxed text-sm max-w-2xl mt-7" 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        {summary}
      </motion.p>
    </motion.section>
  );
};