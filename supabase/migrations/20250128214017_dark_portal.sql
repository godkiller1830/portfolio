/*
  # Complete Portfolio Schema

  1. New Tables
    - users
    - skills (with icon)
    - education
    - standardized_tests
    - experience
    - projects
    
  2. Security
    - Enable RLS on all tables
    - Add public read access policies
    
  3. Data
    - Add initial user profile
    - Add education records
    - Add test scores
    - Add skills with icons
    - Add experience records
    - Add project records
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  bio text,
  photo_url text,
  created_at timestamptz DEFAULT now()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  level integer NOT NULL CHECK (level >= 0 AND level <= 100),
  category text NOT NULL,
  icon text,
  created_at timestamptz DEFAULT now()
);

-- Create education table
CREATE TABLE IF NOT EXISTS education (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  degree text NOT NULL,
  institution text NOT NULL,
  location text NOT NULL,
  start_date date NOT NULL,
  end_date date,
  score text,
  type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create standardized_tests table
CREATE TABLE IF NOT EXISTS standardized_tests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  score text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create experience table
CREATE TABLE IF NOT EXISTS experience (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company text NOT NULL,
  role text NOT NULL,
  start_date date NOT NULL,
  end_date date,
  description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  live_url text,
  source_url text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE standardized_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to users"
  ON users FOR SELECT TO public
  USING (true);

CREATE POLICY "Allow public read access to skills"
  ON skills FOR SELECT TO public
  USING (true);

CREATE POLICY "Allow public read access to education"
  ON education FOR SELECT TO public
  USING (true);

CREATE POLICY "Allow public read access to standardized_tests"
  ON standardized_tests FOR SELECT TO public
  USING (true);

CREATE POLICY "Allow public read access to experience"
  ON experience FOR SELECT TO public
  USING (true);

CREATE POLICY "Allow public read access to projects"
  ON projects FOR SELECT TO public
  USING (true);

-- Insert initial user
INSERT INTO users (name, bio, photo_url) VALUES (
  'SATYA NAVEEN MIDATALA',
  'Computer Science Master''s candidate with a specialization in software engineering. Implemented a CRM system, improving customer retention by 25% and satisfaction by 15%. Demonstrated success in enhancing customer relations and operational efficiency, with experience in both technical and customer service roles. Eager to apply technical expertise in a part-time role to drive organizational success and process efficiency.',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
);

-- Insert education data
INSERT INTO education (degree, institution, location, start_date, end_date, score, type) VALUES
  (
    'MSc (Advanced Computer Science)',
    'Teesside University',
    'Middlesbrough',
    '2023-09-01',
    NULL,
    NULL,
    'university'
  ),
  (
    'Bachelor of Technology (Computer Science and Engineering)',
    'JNTU Kakinada',
    'India',
    '2017-07-01',
    '2021-09-30',
    '7.1/10',
    'university'
  ),
  (
    'Intermediate (Maths, Physics, Chemistry)',
    'Sri Gowthami Junior College',
    'India',
    '2015-07-01',
    '2017-05-31',
    '895/1000',
    'college'
  );

-- Insert standardized test scores
INSERT INTO standardized_tests (name, score) VALUES
  ('Graduate Record Examinations (GRE)', '313'),
  ('Duolingo English Test (DET)', '115');

-- Insert skills with icons
INSERT INTO skills (name, level, category, icon) VALUES
  ('React.js', 90, 'Frontend', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'),
  ('Node.js', 85, 'Backend', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'),
  ('TypeScript', 80, 'Programming', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'),
  ('Supabase', 75, 'Backend', 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg'),
  ('TailwindCSS', 85, 'Frontend', 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg'),
  ('Java', 90, 'Programming', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'),
  ('Spring Boot', 85, 'Backend', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg'),
  ('SQL', 80, 'Database', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg');

-- Insert experience data
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

-- Insert projects data
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