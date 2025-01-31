import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../utils/supabase';
import type { Database } from '../types/supabase';
import { Building2, Calendar } from 'lucide-react';

type Experience = Database['public']['Tables']['experience']['Row'];

export function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const { data, error } = await supabase
          .from('experience')
          .select('*')
          .order('start_date', { ascending: false });

        if (error) throw error;
        setExperiences(data || []);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ocean-400"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-ocean-300 to-midnight-300"
      >
        Work Experience
      </motion.h2>
      
      <div className="grid gap-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-ocean-500/30 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-ocean-400/20 to-midnight-400/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Building2 size={32} className="text-ocean-300" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {experience.role}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-ocean-300 font-medium">
                    {experience.company}
                  </span>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {new Date(experience.start_date).toLocaleDateString('en-US', { 
                      month: 'long',
                      year: 'numeric'
                    })} - {
                      experience.end_date 
                        ? new Date(experience.end_date).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric'
                          })
                        : 'Present'
                    }
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {experience.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}