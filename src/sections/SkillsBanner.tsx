import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../utils/supabase';
import type { Database } from '../types/supabase';

type Skill = Database['public']['Tables']['skills']['Row'];

export function SkillsBanner() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const { data, error } = await supabase
          .from('skills')
          .select('*')
          .order('category', { ascending: true });

        if (error) throw error;
        setSkills(data || []);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ocean-400"></div>
      </div>
    );
  }

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
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className="flex flex-col items-center space-y-2"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl shadow-lg p-3 border border-white/10 hover:border-blue-500/30 transition-colors duration-300">
                <img
                  src={skill.icon || ''}
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
