import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center sm:items-start sm:flex-row justify-between">
          {/* Left Side - Name and Title */}
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-xl font-bold mb-1.5">Rishu Raj</h3>
            <p className="text-gray-400 text-sm">Software Engineering Student</p>
          </div>

          {/* Right Side - Social Links and Scroll to Top */}
          <div className="flex flex-col items-center sm:items-end space-y-4 sm:space-y-3">
            <div className="flex items-center space-x-6 sm:space-x-4">
              <a
                href="https://github.com/RishuPvt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors transform hover:scale-110 duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rishu-raj-75a136261/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors transform hover:scale-110 duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Rishu Raj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;