import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./ui/SectionHeading";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
    <section
      id="about"
      className="py-20 bg-secondary-50 dark:bg-secondary-800/30"
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="My Introduction" />

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center mt-12"
        >
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative rounded-lg overflow-hidden shadow-xl"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/My-Portfolio/mypic.jpeg"
                alt="Krish Jain"
                className="w-full h-90 object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-radial from-primary-600/90 to-primary-900/90 text-white px-6 py-4">
              <h3 className="font-heading font-semibold text-xl mb-1">
                Krish Jain
              </h3>
              <p className="opacity-90 text-sm">Software Developer</p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-secondary-700 dark:text-secondary-300 mb-6"
            >
              I'm a passionate software developer with a strong foundation in
              modern web technologies and a keen eye for design. I specialize in
              building exceptional digital experiences that are not only
              visually appealing but also intuitive and accessible.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="/My-Portfolio/Krish-CV.pdf"
                download
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
