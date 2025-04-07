import React, { useState, useEffect } from "react";
import Mypic from "../../Public/mypic.jpg";
import {
  Github,
  Linkedin,
  ArrowDown,
  Code2,
  Rocket,
  Sparkles,
  Terminal,
  Database,
  Cpu,
  Network,
  Code,
  Binary,
  Brackets,
  Server,
  FileDown,
} from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);
  const icons = [
    <Code2 key="code" />,
    <Rocket key="rocket" />,
    <Sparkles key="sparkles" />,
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 dark:opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${10 + i * 2}s infinite`,
              animationDelay: `${i * 2}s`,
            }}
          >
            {icons[i]}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight text-center md:text-left">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Rishu Raj
              </span>
            </h1>

            <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start">
              {icons[activeIcon]}
              <span className="ml-2">Full Stack Developer</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl text-center md:text-left">
              Crafting digital experiences with code and creativity. Specialized
              in building modern web applications that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center md:justify-start">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              {/* Download Resume Button */}
              <a
                href="/Rishu_Raj_Resume.pdf" // File path
                download="Rishu_Raj_Resume.pdf" // Force download with correct filename
                className="px-5 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mt-4 sm:mt-0"
              >
                <FileDown className="w-5 h-5" />
                <span>Download Resume</span>
              </a>

              <div className="flex space-x-3 mt-4 sm:mt-0">
                <a
                  href="https://github.com/RishuPvt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transform hover:scale-110 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rishu-raj-75a136261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transform hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Tech Vector Illustration */}
          <div
            className={`relative transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="relative w-full h-[120px]">

             {/* Central Profile Picture */}
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-blue-600 shadow-lg shadow-gray-500/50">
        <img
      src={Mypic}
      alt="Profile Picture"
      className="w-full h-full object-cover"
    />
  </div>
</div> */}


              {/* Orbiting Elements */}
              {/* <div className="absolute inset-0 animate-spin-slow">
                {[
                  Terminal,
                  Database,
                  Cpu,
                  Network,
                  Code,
                  Binary,
                  Brackets,
                  Server,
                ].map((Icon, index) => {
                  const angle = (index * 360) / 8;
                  const radius = 150;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          index % 2 === 0 ? "text-blue-500" : "text-purple-500"
                        }`}
                      />
                    </div>
                  );
                })}
              </div> */}

              {/* Connecting Lines */}
              {/* <div className="absolute inset-0">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 origin-left"
                    style={{
                      width: "150px",
                      transform: `rotate(${(index * 360) / 8}deg)`,
                    }}
                  />
                ))}
              </div> */}

              {/* Floating Binary Numbers */}
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="absolute text-xs text-gray-400 dark:text-gray-600 animate-float"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  {Math.random() > 0.5 ? "1" : "0"}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() =>
            document
              .getElementById("about")
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

export default Hero;
