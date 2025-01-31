import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    name: 'React',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Supabase',
    icon: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg',
  },
  {
    name: 'TailwindCSS',
    icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg',
  },
];

export function SkillsBanner() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-blue-900/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h3 className="text-2xl font-bold text-center mb-8 text-white">
        Skills & Technologies
      </h3>

      <div className="relative">
        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
          className="flex space-x-16 whitespace-nowrap"
        >
          {[...skillsData, ...skillsData].map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className="flex flex-col items-center space-y-2"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl shadow-lg p-3 border border-white/10 hover:border-blue-500/30 transition-colors duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
      </div>
    </div>
  );
}