import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  isDarkMode,
  setIsDarkMode,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 md:py-5 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-primary-600 dark:text-primary-400 font-heading font-bold text-xl md:text-2xl">
            KJ
          </span>
          <span className="font-heading font-semibold text-lg md:text-xl hidden sm:block">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-2 px-1 font-medium text-sm transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                    activeSection === link.href.substring(1)
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-secondary-800 dark:text-secondary-200"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-primary-600 dark:text-primary-400" />
            ) : (
              <Menu
                size={24}
                className="text-primary-600 dark:text-primary-400"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-secondary-900 z-40 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "60px" }}
      >
        <nav className="container mx-auto px-4 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`block py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                      : "hover:bg-secondary-50 dark:hover:bg-secondary-800"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
