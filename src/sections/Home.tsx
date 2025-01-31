import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../utils/supabase';
import type { Database } from '../types/supabase';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ocean-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center relative px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center backdrop-blur-lg bg-gradient-to-b from-midnight-900/30 to-ocean-900/30 p-12 rounded-3xl shadow-2xl border border-ocean-800/20"
      >
        {user?.photo_url && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-ocean-400/20 rounded-full blur-2xl transform -translate-x-1 translate-y-1"></div>
            <img
              src={user.photo_url}
              alt={user?.name}
              className="w-40 h-40 rounded-full mx-auto object-cover relative z-10 ring-4 ring-ocean-500/20"
            />
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ocean-300 to-midnight-300 mb-6"
        >
          {user?.name || 'Welcome to My Portfolio'}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl text-ocean-100/80 max-w-2xl mx-auto mb-12"
        >
          {user?.bio || 'Full-stack developer passionate about creating beautiful and functional web applications.'}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center space-x-8 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean-300 hover:text-ocean-200 transition-colors duration-200"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean-300 hover:text-ocean-200 transition-colors duration-200"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:your.email@example.com"
            className="text-ocean-300 hover:text-ocean-200 transition-colors duration-200"
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 animate-bounce"
      >
        <ChevronDown size={36} className="text-ocean-300" />
      </motion.div>
    </div>
  );
}