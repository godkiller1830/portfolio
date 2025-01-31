import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, FolderGit, Mail, GraduationCap } from 'lucide-react';

export function SideNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('main > div[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: FolderGit, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-[200px] backdrop-blur-sm border-r border-white/10 flex flex-col items-center py-8 z-50">
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={() => scrollToSection('home')}
        className="mb-12 relative group"
      >
        <motion.div
          className="absolute inset-0 bg-blue-500/20 filter blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <img
          src="/src/images/Logo.webp"
          alt="Portfolio"
          className="w-20 relative z-10"
          style={{
            filter: "drop-shadow(0 0 10px rgba(96, 165, 250, 0.3))"
          }}
        />
      </motion.div>

      <div className="flex flex-col space-y-8">
        {navItems.map(({ id, icon: Icon, label }) => (
          <motion.button
            key={id}
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection(id)}
            className={`group flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
              activeSection === id
                ? 'bg-white/10 text-ocean-300'
                : 'text-gray-300 hover:text-ocean-300'
            }`}
          >
            <Icon 
              size={20} 
              className={`transition-transform duration-300 group-hover:rotate-12 ${
                activeSection === id ? 'text-ocean-300' : ''
              }`}
            />
            <span className="relative">
              {label}
              {activeSection === id && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ocean-300"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </span>
          </motion.button>
        ))}
      </div>

      <motion.div
        className="absolute bottom-8 left-4 right-4 p-4 rounded-lg backdrop-blur-md bg-white/5 border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm text-gray-400 text-center">
          Let's create something amazing together
        </p>
      </motion.div>
    </nav>
  );
}