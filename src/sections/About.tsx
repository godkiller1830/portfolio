import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { SkillsBanner } from './SkillsBanner';

export function About() {
  const cvUrl = 'https://example.com/your-cv.pdf';

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 relative"
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl transform -translate-x-1 translate-y-1"></div>
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFbC7gbXCcNHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695665360349?e=1743638400&v=beta&t=wdifmKtb7XXRwUj-GOO9X5YEL7rIyoKHMG36KMNErQA"
            alt="Profile"
            className="w-full h-full rounded-full object-cover relative z-10 ring-4 ring-blue-500/20"
          />
        </motion.div>

        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 text-white"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg mb-8"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies.
              My journey in software development started with a curiosity for creating
              interactive web experiences, which has now evolved into a deep understanding
              of both frontend and backend development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently, I specialize in React.js, Node.js, and cloud technologies,
              focusing on building scalable and performant web applications. I'm particularly
              interested in user experience and modern design patterns.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            <FileDown size={20} className="mr-2" />
            Download Resume
          </motion.a>
        </div>
      </div>

      <SkillsBanner />
    </div>
  );
}