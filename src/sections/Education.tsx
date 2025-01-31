import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../utils/supabase';
import type { Database } from '../types/supabase';
import { GraduationCap, Calendar, Award, School } from 'lucide-react';

type Education = Database['public']['Tables']['education']['Row'];
type StandardizedTest = Database['public']['Tables']['standardized_tests']['Row'];

export function Education() {
  const [education, setEducation] = useState<Education[]>([]);
  const [tests, setTests] = useState<StandardizedTest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEducation() {
      try {
        const [educationData, testsData] = await Promise.all([
          supabase
            .from('education')
            .select('*')
            .order('start_date', { ascending: false }),
          supabase
            .from('standardized_tests')
            .select('*')
            .order('created_at', { ascending: false }),
        ]);

        if (educationData.error) throw educationData.error;
        if (testsData.error) throw testsData.error;

        setEducation(educationData.data || []);
        setTests(testsData.data || []);
      } catch (error) {
        console.error('Error fetching education data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchEducation();
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
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-ocean-300 to-midnight-300"
      >
        Education
      </motion.h2>

      <div className="grid gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-ocean-500/30 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-ocean-400/20 to-midnight-400/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  {edu.type === 'university' ? (
                    <GraduationCap size={32} className="text-ocean-300" />
                  ) : (
                    <School size={32} className="text-ocean-300" />
                  )}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {edu.degree}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                  <span className="text-ocean-300 font-medium">
                    {edu.institution}
                  </span>
                  <span className="hidden md:inline text-gray-400">•</span>
                  <span className="text-gray-400">{edu.location}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {new Date(edu.start_date).toLocaleDateString('en-US', { 
                      month: 'long',
                      year: 'numeric'
                    })} - {
                      edu.end_date 
                        ? new Date(edu.end_date).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric'
                          })
                        : 'Present'
                    }
                  </div>
                  {edu.score && (
                    <div className="flex items-center text-ocean-300">
                      <Award size={14} className="mr-1" />
                      Score: {edu.score}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {tests.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Standardized Tests
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {tests.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-ocean-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocean-400/20 to-midnight-400/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <Award size={24} className="text-ocean-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">
                      {test.name}
                    </h4>
                    <p className="text-ocean-300">Score: {test.score}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}