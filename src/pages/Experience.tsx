import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import type { Database } from '../types/supabase';

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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Work Experience
      </h1>
      
      <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="mb-8 ml-6"
          >
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] border-2 border-white dark:border-gray-900"></div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {experience.role}
                </h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">
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
                </span>
              </div>
              <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                {experience.company}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}