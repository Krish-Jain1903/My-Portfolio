import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineItems = [
    {
      type: "work",
      title: "Software Engineer",
      organization: "Fyntune Solution Limited, Thurbhe",
      duration: "May 2024 - Present",
      description:
        "Working as a Software Engineer, contributing to various projects and applying full-stack development skills.",
    },
    {
      type: "education",
      title: "Bachelor of Science in Information Technology",
      organization: "SIES College of Commerce and Economics, Sion",
      duration: "2021 - 2024",
      description:
        "Completed BSc IT with an outstanding CGPA of 9.53, demonstrating strong academic performance and technical aptitude.",
    },
    {
      type: "education",
      title: "Higher Secondary Certificate (HSC)",
      organization: "Swami Vivekananda Junior College, Chembur",
      duration: "2019 - 2021",
      description:
        "Completed HSC in Commerce with an excellent score of 90.33%, laying a strong foundation for further studies.",
    },
    {
      type: "certification",
      title: "Fullstack Web Development Bootcamp",
      organization: "Udemy",
      duration: "Completed Apr 2024",
      description:
        "Comprehensive training in full-stack web development, covering modern technologies and best practices.",
    },
    {
      type: "certification",
      title: "Web Development Fundamentals",
      organization: "IBM",
      duration: "Completed May 2023",
      description:
        "Mastered core web development concepts and practices through IBM's professional certification program.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap size={20} />;
      case "work":
        return <Briefcase size={20} />;
      case "certification":
        return <Award size={20} />;
      default:
        return <GraduationCap size={20} />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case "education":
        return "border-primary-500 dark:border-primary-600";
      case "work":
        return "border-secondary-500 dark:border-secondary-600";
      case "certification":
        return "border-amber-500 dark:border-amber-600";
      default:
        return "border-primary-500 dark:border-primary-600";
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "education":
        return "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400";
      case "work":
        return "bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400";
      case "certification":
        return "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400";
      default:
        return "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400";
    }
  };

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Education & Experience" subtitle="My Journey" />

        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex rounded-full bg-secondary-100 dark:bg-secondary-800 p-1">
            <button className="px-4 py-2 rounded-full bg-primary-600 text-white font-medium">
              Timeline
            </button>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative mt-12"
        >
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-900/50"></div>

          {/* Timeline items */}
          <div className="relative">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`mb-12 flex items-center ${
                  index % 2 === 0
                    ? "justify-start md:justify-end"
                    : "justify-start"
                } relative ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
              >
                {/* Timeline content */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 ${getColor(
                    item.type
                  )}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 p-3 rounded-full ${getIconColor(
                        item.type
                      )}`}
                    >
                      {getIcon(item.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-secondary-700 dark:text-secondary-300 font-medium mb-2">
                        {item.organization}
                      </p>
                      <span className="inline-block text-sm bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 px-3 py-1 rounded-full mb-3">
                        {item.duration}
                      </span>
                      <p className="text-secondary-600 dark:text-secondary-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div
                  className={`absolute z-10 w-5 h-5 rounded-full bg-white dark:bg-secondary-800 border-4 ${getColor(
                    item.type
                  )} left-1/2 transform -translate-x-1/2`}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
