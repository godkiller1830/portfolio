import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../utils/supabase';
import type { Database } from '../types/supabase';
import { Github, Linkedin, Mail, ChevronDown, Code, Briefcase, User } from 'lucide-react';

type User = Database['public']['Tables']['users']['Row'];

export function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .limit(1);

        if (error) throw error;
        setUser(data?.[0] || null);
      } catch (error) {
        console.error('Error fetching user:', error);
        setError('Failed to load profile data');
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="h-screen flex flex-col justify-center items-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-8 rounded-2xl shadow-xl"
        >
          {user?.photo_url && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl transform -translate-x-1 translate-y-1"></div>
              <img
                src={user.photo_url}
                alt={user?.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover ring-4 ring-blue-500/20 relative z-10"
              />
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-4"
          >
            {user?.name || 'Welcome to My Portfolio'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          >
            {user?.bio || 'Full-stack developer passionate about creating beautiful and functional web & mobile applications.'}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/godkiller1830"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="www.linkedin.com/in/satya-naveen-midatala-45a034166"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:satyanaveenmidatalams@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={scrollToContent}
          className="absolute bottom-8 animate-bounce"
        >
          <ChevronDown size={32} className="text-gray-600 dark:text-gray-400" />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Development
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Passionate about clean code and modern development practices. Specialized in React and Node.js ecosystems.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Experience
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Building scalable applications and delivering high-quality solutions for diverse client needs.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <User className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Collaboration
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Strong team player with excellent communication skills and a focus on delivering value.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
