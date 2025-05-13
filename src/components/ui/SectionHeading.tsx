import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="text-center mb-12">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="inline-block text-primary-600 dark:text-primary-400 font-medium mb-2"
      >
        {subtitle}
      </motion.span>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 dark:text-white mb-4"
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={inView ? { opacity: 1, width: '80px' } : { opacity: 0, width: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-1 bg-primary-600 dark:bg-primary-400 rounded-full mx-auto"
      ></motion.div>
    </div>
  );
};

export default SectionHeading;