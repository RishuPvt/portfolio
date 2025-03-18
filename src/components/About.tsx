import React, { useState } from "react";
import {
  BookOpen,
  Briefcase,
  Award,
  Trophy,
  ChevronRight,
  ArrowDown,
} from "lucide-react";

const About = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const experiences = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Education",
      organization: "Abdul Kalam Technical University",
      period: "2022-2026",
      description: "B.Tech in Computer Science",
      details:
        "Specialized in Computer Science and Information Technology Engineering .",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Current Role",
      organization: "I am looking for an opportunity.",
      description: " Full Stack Developer",
      details:
        " where I can contribute my skills and abilities to the growth of the organization while building and advancing my professional career.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Hackathons & Coding Challenges",
      organization: "LeetCode, GeeksforGeek, Devfolio ",
      period: "2024-Present",
      description: "Competitive Programmer",
      details: "Solved over 200+ DSA problems and participated in coding hackathons to build innovative projects.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-20 sm:h-40 w-20 sm:w-40 border border-white/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `scale(${Math.random() * 2 + 0.5})`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Computer Science Engineering Student , I specialize in
            building scalable applications using modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left side - Bio */}
          <div className="glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 transform hover:scale-[1.01] transition-all duration-500 order-2 md:order-1">
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              My journey in tech started with a deep curiosity about how things
              work on the web, which led me to pursue a career in software
              development. I'm passionate about creating intuitive user
              experiences and writing clean, maintainable code.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              My goal is to contribute to projects that make a positive impact
              while continuously learning and growing as a developer. I believe
              in the power of technology to transform and improve people's
              lives.
            </p>
          </div>

          {/* Right side - Experience Cards */}
          <div className="space-y-3 sm:space-y-4 order-1 md:order-2">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 cursor-pointer transform transition-all duration-300 active:scale-[0.99] ${
                  activeCard === index
                    ? "scale-[1.02] sm:scale-105"
                    : "hover:scale-[1.01] sm:hover:scale-[1.02]"
                }`}
                onClick={() =>
                  setActiveCard(activeCard === index ? null : index)
                }
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div
                    className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${exp.color}`}
                  >
                    {exp.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-0.5 sm:mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">
                      {exp.organization} • {exp.period}
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {exp.description}
                    </p>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeCard === index ? "max-h-24 mt-2" : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {exp.details}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transform transition-transform duration-300 flex-shrink-0 ${
                      activeCard === index ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default About;
