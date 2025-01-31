/*
  # Seed Initial Data

  1. Content
    - Add user profile
    - Add sample skills
    - Add sample projects
    - Add work experience
*/

-- Insert user data
INSERT INTO users (id, name, bio, photo_url) 
VALUES (
  gen_random_uuid(),
  'John Doe',
  'Full Stack Developer passionate about building scalable web applications.',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
) ON CONFLICT DO NOTHING;

-- Insert skills data
INSERT INTO skills (id, name, level, category) VALUES
  (gen_random_uuid(), 'React.js', 90, 'Frontend'),
  (gen_random_uuid(), 'JavaScript', 85, 'Programming'),
  (gen_random_uuid(), 'Supabase', 75, 'Backend'),
  (gen_random_uuid(), 'TailwindCSS', 95, 'Frontend'),
  (gen_random_uuid(), 'Node.js', 70, 'Backend')
ON CONFLICT DO NOTHING;

-- Insert projects data
INSERT INTO projects (id, title, description, image_url, live_url, source_url) VALUES
  (
    gen_random_uuid(),
    'Portfolio Website',
    'A fully dynamic portfolio showcasing my skills.',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80',
    'https://portfolio.com',
    'https://github.com/portfolio'
  ),
  (
    gen_random_uuid(),
    'Task Manager App',
    'A task management app with drag-and-drop features.',
    'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2424&q=80',
    'https://taskmanager.com',
    'https://github.com/taskapp'
  ),
  (
    gen_random_uuid(),
    'Chat Application',
    'A real-time chat app built with Supabase and React.',
    'https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    'https://chatapp.com',
    'https://github.com/chatapp'
  )
ON CONFLICT DO NOTHING;

-- Insert experience data
INSERT INTO experience (id, company, role, start_date, end_date, description) VALUES
  (
    gen_random_uuid(),
    'Tech Innovators',
    'Frontend Developer',
    '2022-01-01',
    NULL,
    'Developed dynamic UIs using React.js and optimized the app for performance.'
  ),
  (
    gen_random_uuid(),
    'Web Solutions Inc.',
    'Junior Developer',
    '2020-06-01',
    '2021-12-31',
    'Assisted in building RESTful APIs and created interactive user interfaces.'
  ),
  (
    gen_random_uuid(),
    'Freelance',
    'Full Stack Developer',
    '2019-01-01',
    '2020-05-31',
    'Worked on multiple client projects, including e-commerce and portfolio apps.'
  )
ON CONFLICT DO NOTHING;