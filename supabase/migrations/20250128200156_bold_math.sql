/*
  # Add Education and Standardized Tests Tables

  1. New Tables
    - `education`
      - `id` (uuid, primary key)
      - `degree` (text)
      - `institution` (text)
      - `location` (text)
      - `start_date` (date)
      - `end_date` (date, nullable)
      - `score` (text, nullable)
      - `type` (text)
      - `created_at` (timestamptz)
    
    - `standardized_tests`
      - `id` (uuid, primary key)
      - `name` (text)
      - `score` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add public read access policies
*/

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

-- Enable RLS
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE standardized_tests ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to education"
  ON education
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to standardized_tests"
  ON standardized_tests
  FOR SELECT
  TO public
  USING (true);

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