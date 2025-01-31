/*
  # Update Portfolio Details

  1. Updates
    - Update user profile with new name and bio
    - Add new work experience entries
    - Add new projects
    - Update skills table to include icon URLs
    
  2. Schema Changes
    - Add icon column to skills table
*/

-- Add icon column to skills table if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'skills' AND column_name = 'icon'
  ) THEN
    ALTER TABLE skills ADD COLUMN icon text;
  END IF;
END $$;

-- Update user profile
UPDATE users
SET 
  name = 'SATYA NAVEEN MIDATALA',
  bio = 'Computer Science Master''s candidate with a specialization in software engineering. Implemented a CRM system, improving customer retention by 25% and satisfaction by 15%. Demonstrated success in enhancing customer relations and operational efficiency, with experience in both technical and customer service roles. Eager to apply technical expertise in a part-time role to drive organizational success and process efficiency.'
WHERE id = (SELECT id FROM users LIMIT 1);

-- Clear existing skills and insert updated ones
DELETE FROM skills;
INSERT INTO skills (name, level, category, icon) VALUES
  ('React.js', 90, 'Frontend', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'),
  ('Node.js', 85, 'Backend', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'),
  ('TypeScript', 80, 'Programming', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'),
  ('Supabase', 75, 'Backend', 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg'),
  ('TailwindCSS', 85, 'Frontend', 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg'),
  ('Java', 90, 'Programming', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'),
  ('Spring Boot', 85, 'Backend', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg'),
  ('SQL', 80, 'Database', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg');

-- Clear existing experience and insert new entries
DELETE FROM experience;
INSERT INTO experience (company, role, start_date, end_date, description) VALUES
  (
    'Accenture Private Limited',
    'Application Development Analyst',
    '2022-01-01',
    '2023-09-30',
    '• Improved project delivery times by 25% using Agile methodology.\n• Worked with Java, Spring Boot, SQL migrations, and enhanced data retrieval by 15%.\n• Reduced bug occurrences by 30% and improved user satisfaction by 20%.\n• Participated in code reviews, quality assurance, and team meetings.'
  ),
  (
    'Jaldi Technologies Pvt Ltd',
    'Web Development Trainee',
    '2021-08-01',
    '2021-11-30',
    '• Developed dynamic web applications and documented processes.\n• Identified bugs and improved project quality.\n• Gained hands-on experience in the software development lifecycle.'
  ),
  (
    'Flameingoes',
    'Floor Manager/Server',
    '2021-08-01',
    '2021-11-30',
    '• Managed tables and coordinated staff for over 30 tables daily.\n• Processed 100+ weekly orders and improved communication between departments.'
  );

-- Clear existing projects and insert new ones
DELETE FROM projects;
INSERT INTO projects (title, description, image_url, live_url, source_url) VALUES
  (
    'BASF Monterey Carveout',
    'Led the migration and transformation of applications for a new organizational structure. Designed migration solutions, managed data loads, and performed post-go-live support. Project duration: June 2022 – July 2023.',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    null,
    null
  ),
  (
    'Smart Street Lights System',
    'Developed an IoT-based system to optimize power usage and monitor traffic. Achieved 30% energy savings and provided real-time data on 100+ streetlights. Project duration: January 2021 – June 2021.',
    'https://images.unsplash.com/photo-1617859047452-8510bcf207fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    null,
    'https://github.com/yourusername/smart-street-lights'
  );