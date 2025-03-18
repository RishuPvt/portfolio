import React from "react";
import { motion } from "framer-motion";
import dotslash from "../../Public/dostslash.jpg";
import javascript from "../../Public/JavaScript.png";
import postman from "../../Public/Screenshot 2024-09-01 231505.png";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Certificate of Participation",
    organization: "NIT, Surat",
    date: "February 2025",
    verificationUrl: "https://aws.amazon.com/verification",
    image: dotslash,
    skills: ["hackathon", "DotSlash 8.0", "National institute of technology"],
  },
  {
    name: "Postman API fundamentals",
    organization: "Postman",
    date: "October 2024",
    image: postman,
    skills: ["Backend Development", "API", "Student Expert"],
  },
  {
    name: "JavaScript Essentials 1",
    organization: "Cisco",
    date: "September 2024",
    image: javascript,
    skills: ["Cisco", "Modern JavaScript", "Web Performance"],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Professional certifications and Participation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-fit"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-gray-200 text-sm mt-1">
                    {cert.organization}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {cert.date}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
