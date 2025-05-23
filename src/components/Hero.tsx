import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github as GitHub, Linkedin, Twitter } from "lucide-react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white dark:from-primary-950/30 dark:to-secondary-900 -z-10"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <span className="inline-block text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/30 px-4 py-2 rounded-full mb-4">
            Software Developer
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-primary-600 dark:text-primary-400">
              Krish Jain
            </span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-700 dark:text-secondary-300 mb-8 max-w-lg">
            A passionate Software Developer specializing in full-stack
            development with expertise in React.js and Laravel.
            <span className="inline-block ml-1 text-primary-600 dark:text-primary-400 font-semibold">
              #OPENTOWORK
            </span>
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white hover:bg-secondary-50 dark:bg-secondary-800 dark:hover:bg-secondary-700 text-secondary-900 dark:text-white border border-secondary-200 dark:border-secondary-700 font-medium rounded-full transition-colors shadow-sm hover:shadow-md"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Krish-Jain1903"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-secondary-700 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/krish-jain-470a73238/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-secondary-700 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-secondary-800 shadow-xl">
              <img
                src="https://avatars.githubusercontent.com/u/114939319?s=400&u=f4019d5c53c738683a1089505cd5b98dd9669ccc&v=4"
                alt="Krish Jain"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-4 py-2 rounded-full font-medium transform rotate-6 shadow-lg">
              #OPENTOWORK
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white dark:bg-secondary-800 shadow-md hover:shadow-lg transition-all animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown
          className="text-primary-600 dark:text-primary-400"
          size={24}
        />
      </a>
    </section>
  );
};

export default Hero;
