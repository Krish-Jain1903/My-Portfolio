import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Database, PenTool as Tool } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tabs = [
    { id: 'frontend', label: 'Frontend', icon: <Code2 size={18} /> },
    { id: 'backend', label: 'Backend', icon: <Database size={18} /> },
    { id: 'tools', label: 'Tools', icon: <Tool size={18} /> },
  ];

  const skillsByCategory = {
    frontend: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 88 },
    ],
    backend: [
      { name: 'Laravel', level: 85 },
      { name: 'PHP', level: 80 },
      { name: 'MySQL', level: 85 },
    ],
    tools: [
      { name: 'Visual Studio Code', level: 90 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Microsoft Office', level: 80 },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-secondary-50 dark:bg-secondary-800/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="What I Can Do"
        />
        
        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex rounded-full bg-secondary-100 dark:bg-secondary-800 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white font-medium'
                    : 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mt-8"
        >
          {skillsByCategory[activeTab as keyof typeof skillsByCategory].map((skill, index) => (
            <motion.div 
              key={skill.name} 
              variants={itemVariants}
              className="bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-secondary-900 dark:text-white">{skill.name}</h3>
                <span className="text-primary-600 dark:text-primary-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;