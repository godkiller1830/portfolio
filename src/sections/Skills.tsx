import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../utils/supabase';
import type { Database } from '../types/supabase';

type Skill = Database['public']['Tables']['skills']['Row'];

export function Skills() {
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

  const categories = [...new Set(skills.map(skill => skill.category))];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-white mb-8 text-center"
      >
        Skills & Technologies
      </motion.h3>
      
      {categories.map((category, categoryIndex) => (
        <div key={category} className="mb-12 last:mb-0">
          <h4 className="text-xl font-semibold text-gray-200 mb-6 capitalize">
            {category}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills
              .filter(skill => skill.category === category)
              .map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-white/10 hover:border-ocean-500/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-white">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-medium text-ocean-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-ocean-400 to-ocean-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}