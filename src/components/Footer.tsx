import React from "react";
import { Github as GitHub, Linkedin, Twitter, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-heading font-bold text-2xl text-primary-400 mb-2">
              Krish Jain
            </h2>
            <p className="text-secondary-300 max-w-md">
              A passionate software developer focused on creating interactive,
              accessible, and responsive web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-80">
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Krish-Jain1903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary-800 hover:bg-primary-600 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/krish-jain-470a73238/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary-800 hover:bg-primary-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              &copy; {currentYear} Krish Jain. All rights reserved.
            </p>
            <p className="text-secondary-400 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart size={16} className="mx-1 text-red-500" /> by
              Krish Jain
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
