import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github as GitHub } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filters = [
    { id: "all", label: "All" },
    { id: "react", label: "React" },
    { id: "php", label: "PHP" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "ArtNet",
      description:
        "An online art marketplace where artists can sell their work and buyers can purchase art. Features include user accounts, art uploads, artist profiles, and secure payments via Razorpay API with email notifications.",
      image:
        "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      liveUrl: "https://example.com/artnet",
      githubUrl: "https://github.com/Krish-Jain1903/ArtNet",
      category: "php",
    },
    {
      id: 2,
      title: "React Quiz",
      description:
        "An interactive quiz application focused on React fundamentals. Features include multiple-choice questions, score tracking, and a countdown timer for each question.",
      image:
        "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "JavaScript", "HTML", "CSS"],
      liveUrl: "https://example.com/react-quiz",
      githubUrl: "https://github.com/Krish-Jain1903/React-Quiz",
      category: "react",
    },
    {
      id: 3,
      title: "WorldWise",
      description:
        "A React-based travel management application with interactive maps. Users can mark visited places, add travel details, and manage their travel history with full CRUD functionality.",
      image:
        "https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "React Router", "CSS", "JSX"],
      liveUrl: "https://example.com/worldwise",
      githubUrl: "https://github.com/Krish-Jain1903/World-Wise",
      category: "react",
    },
    {
      id: 4,
      title: "UsePopcorn",
      description:
        "A movie management application where users can search, rate, and track their watched movies. Features include watchlist management and personal movie ratings.",
      image:
        "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "JavaScript", "HTML", "CSS"],
      liveUrl: "https://example.com/usepopcorn",
      githubUrl: "https://github.com/Krish-Jain1903/Movie-Management",
      category: "react",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="My Projects" subtitle="Recent Work" />

        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex rounded-full bg-secondary-100 dark:bg-secondary-800 p-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeFilter === filter.id
                    ? "bg-primary-600 text-white font-medium"
                    : "text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-secondary-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-secondary-700 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-white font-medium transition-colors"
                  >
                    <GitHub size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
