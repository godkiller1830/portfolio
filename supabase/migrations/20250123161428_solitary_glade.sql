/*
  # Insert initial user

  1. Data Changes
    - Insert a single user record with:
      - Random UUID as primary key
      - Name: John Doe
      - Bio: Developer description
      - Photo URL: Profile image from Unsplash
*/

INSERT INTO users (id, name, bio, photo_url) 
VALUES (
  gen_random_uuid(),
  'John Doe',
  'Full-stack developer with a passion for creating beautiful and functional web applications. Experienced in React, Node.js, and cloud technologies.',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
) ON CONFLICT DO NOTHING;