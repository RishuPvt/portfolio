import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, Database, Server, Blocks, Cpu, Globe, Layers,
  Box, Cloud, GitBranch, Webhook, Container, Binary,
  Laptop, Monitor, Network, Settings, Terminal, X,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const skills = [
  {
    name: 'HTML',
    icon: <Terminal className="w-8 h-8 md:w-12 md:h-12" />,
    color: 'text-orange-500',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    description: 'Server administration and command line expertise',
    proficiency: 90,
    experience: 'Advanced',
    yearsOfPractice: 3
  },
  {
    name: 'Tailwind',
    icon: <Webhook className="w-8 h-8 md:w-12 md:h-12" />,
    color: 'text-pink-500',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
    description: 'Efficient API queries and data management',
    proficiency: 82,
    experience: 'Intermediate',
    yearsOfPractice: 2
  },
  {
    name: 'React',
    icon: <Blocks className="w-8 h-8 md:w-12 md:h-12" />,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    description: 'Building modern web applications with React and its ecosystem',
    proficiency: 95,
    experience: 'Advanced',
    yearsOfPractice: 3
  },
  {
    name: 'TypeScript',
    icon: <Code2 className="w-8 h-8 md:w-12 md:h-12" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    description: 'Type-safe JavaScript development for better code quality',
    proficiency: 70,
    experience: 'Intermediate',
    yearsOfPractice: 2
  },
  {
    name: 'Express.js',
    icon: <Server className="w-8 h-8 md:w-12 md:h-12" />,
    color: 'text-green-500',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    description: 'Server-side JavaScript runtime for scalable applications',
    proficiency:90,
    experience: 'Advanced',
    yearsOfExperience: 2
  },
  {
    name: 'PostgreSQL',
    icon: <Database className="w-8 h-8 md:w-12 md:h-12" />,
    color: 'text-blue-700',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    description: 'Robust relational database for complex data relationships',
    proficiency: 82,
    experience: 'Intermediate',
    yearsOfExperience: 1
  },
  {
    name: 'Prisma',
    icon: <Database className="w-8 h-8 md:w-12 md:h-12" />,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    description: 'Containerization for consistent development and deployment',
    proficiency: 80,
    experience: 'Intermediate',
    yearsOfExperience: 2
  },
  {
    name: 'MongoDB',
    icon: <Database className="w-8 h-8 md:w-12 md:h-12" />,
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    description: 'NoSQL database for flexible data storage',
    proficiency: 78,
    experience: 'Intermediate',
    yearsOfExperience: 2
  },
  {
    name: 'JavaScript',
    icon: <Code2 className="w-8 h-8 md:w-12 md:h-12" />,
    color: 'text-orange-500',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    description: 'Type-safe JavaScript development for better code quality',
    proficiency: 85,
    experience: 'Advanced',
    yearsOfExperience: 3
  },
  {
    name: 'Git',
    icon: <GitBranch className="w-8 h-8 md:w-12 md:h-12" />,
    color: 'text-orange-500',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    description: 'Version control and collaboration',
    proficiency: 95,
    experience: 'Expert',
    yearsOfExperience: 3
  },
  {
    name: 'C++',
    icon: <Binary className="w-8 h-8 md:w-12 md:h-12" />,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    description: 'Versatile programming for automation and data science',
    proficiency: 78,
    experience: 'Intermediate',
    yearsOfExperience: 2
  },
  {
    name: 'Vs Code',
    icon: <Settings className="w-8 h-8 md:w-12 md:h-12" />,
    color: 'text-purple-500',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    description: 'Streamlined development and deployment processes',
    proficiency: 95,
    experience: 'Expert',
    yearsOfExperience: 4
  },

];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const skillsPerPage = 4;
  const totalPages = Math.ceil(skills.length / skillsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentSkills = () => {
    const start = currentPage * skillsPerPage;
    return skills.slice(start, start + skillsPerPage);
  };

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 90) return 'bg-green-500';
    if (proficiency >= 80) return 'bg-blue-500';
    if (proficiency >= 70) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Mobile Swipeable Layout */}
        <div className="relative md:hidden">
          <div className="overflow-hidden">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-3"
            >
              {getCurrentSkills().map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSkill(skill)}
                  className="cursor-pointer"
                >
                  <div className={`h-[120px] ${skill.bgColor} rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-lg`}>
                    <div className={skill.color}>
                      {skill.icon}
                    </div>
                    <span className="font-medium text-xs text-center text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    currentPage === index
                      ? 'bg-blue-500'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Swipe Instructions */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3"
          >
            Swipe or use arrows to see more skills
          </motion.p>
        </div>

        {/* Desktop Horizontal Scroll */}
        <div className="relative hidden md:block">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10" />
          
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex gap-6 py-8 px-4 min-w-max">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedSkill(skill)}
                  className="flex-none cursor-pointer"
                >
                  <div className={`w-40 h-40 ${skill.bgColor} rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className={skill.color}>
                      {skill.icon}
                    </div>
                    <span className="font-medium text-base text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-sm w-full relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 ${selectedSkill.bgColor} rounded-xl ${selectedSkill.color}`}>
                    {selectedSkill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {selectedSkill.name}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedSkill.experience} • {selectedSkill.yearsOfExperience} years
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedSkill.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className="font-medium">{selectedSkill.proficiency}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.proficiency}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`h-full ${getProficiencyColor(selectedSkill.proficiency)}`}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;