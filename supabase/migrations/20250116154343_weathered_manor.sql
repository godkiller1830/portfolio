/*
  # Seed Initial Data

  1. Changes
    - Add initial user profile data
    - Add sample skills data
    - Add sample projects
    - Add sample experience entries

  2. Notes
    - Using static UUIDs for predictable references
    - All dates are in ISO format
*/

-- Insert initial user
INSERT INTO users (id, name, bio, photo_url) 
VALUES (
  'default',
  'John Doe',
  'Full-stack developer with a passion for creating beautiful and functional web applications. Experienced in React, Node.js, and cloud technologies.',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
) ON CONFLICT (id) DO NOTHING;