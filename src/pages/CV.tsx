import React from 'react';
import { FileDown } from 'lucide-react';

export function CV() {
  // Replace with your actual CV URL
  const cvUrl = 'https://example.com/your-cv.pdf';

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Curriculum Vitae
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Download my CV to learn more about my experience and qualifications.
        </p>
        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <FileDown size={20} className="mr-2" />
          Download CV
        </a>
      </div>

      {/* Preview section - you can add a preview of your CV here */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
        <p className="text-gray-600 dark:text-gray-400 text-center">
          CV preview will be displayed here.
        </p>
      </div>
    </div>
  );
}