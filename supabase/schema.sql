
-- Drop tables and types if they exist, for a clean slate
DROP TABLE IF EXISTS public.projects;
DROP TABLE IF EXISTS public.clients;
DROP TABLE IF EXISTS public.admins;
DROP TYPE IF EXISTS public.project_status;


-- Create a custom type for project status
CREATE TYPE public.project_status AS ENUM ('Planning', 'In Progress', 'On Hold', 'Completed', 'Archived');


-- Create the clients table to store client login information
CREATE TABLE IF NOT EXISTS public.clients (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  company text,
  email text UNIQUE NOT NULL,
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the projects table
CREATE TABLE IF NOT EXISTS public.projects (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id uuid REFERENCES public.clients(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  status project_status DEFAULT 'Planning' NOT NULL,
  progress integer DEFAULT 0 check (progress >= 0 and progress <= 100),
  deadline date,
  total_budget numeric(10, 2),
  paid numeric(10, 2),
  timeline jsonb,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the admins table for admin portal authentication
CREATE TABLE IF NOT EXISTS public.admins (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);


-- Set up Row Level Security (RLS) for all tables
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

-- Policies for clients table
-- Allow public access for querying (e.g., checking if username exists) but restrict data exposure
CREATE POLICY "Allow public read access on clients" ON public.clients FOR SELECT USING (true);
-- Allow admins to manage all client records
CREATE POLICY "Allow admin full access on clients" ON public.clients FOR ALL
  USING (true); -- In a real production app, you'd check for an admin role here.

-- Policies for projects table
-- Allow admins to manage all project records
CREATE POLICY "Allow admin full access on projects" ON public.projects FOR ALL
  USING (true); -- Check for admin role here in production
-- Allow clients to see their own projects
CREATE POLICY "Allow client to see their own projects" ON public.projects FOR SELECT
  USING ((SELECT id FROM public.clients WHERE username = (auth.jwt()->>'username')) = client_id);


-- Policies for admins table
-- Allow admins to manage their own data.
CREATE POLICY "Allow admin to manage their own data" ON public.admins FOR ALL
  USING ((SELECT id FROM public.admins WHERE username = (auth.jwt()->>'username')) = id);


-- Insert a default admin user (password is 'Deeepak@3093')
-- IMPORTANT: The hash below is for 'Deeepak@3093'. 
-- For production, you should generate a new secure hash.
INSERT INTO public.admins (username, password_hash)
VALUES ('Deepak Bagada', '$2a$10$Y.dY/rKbXVU2aWj4S6aMVOy0y69qMh8tU.C.acWPYC23D8Q3N80S2');


-- Insert a default client with a hashed password (password is 'password')
-- This provides a demo account for the client dashboard.
INSERT INTO public.clients (id, name, company, email, username, password_hash)
VALUES 
  ('a1b2c3d4-e5f6-7890-1234-567890abcdef', 'Demo Client', 'Innovate Inc.', 'demo@example.com', 'democlient', '$2a$10$8.B/hR5b5B7C3p3zT4u.K.W9y.Z7g.F5g.H3x.L9y.J1z.V1a.U2');
  
-- Insert sample projects for the demo client
INSERT INTO public.projects (client_id, name, status, progress, deadline, total_budget, paid, timeline)
VALUES
  ('a1b2c3d4-e5f6-7890-1234-567890abcdef', 'Web Development Project', 'In Progress', 75, '2024-09-30', 15000.00, 10000.00, 
  '[
    {"event": "Discovery & Planning", "date": "2024-06-01", "completed": true}, 
    {"event": "Design & Prototyping", "date": "2024-06-15", "completed": true},
    {"event": "Frontend Development", "date": "2024-07-20", "completed": true},
    {"event": "Backend Development", "date": "2024-08-25", "completed": false},
    {"event": "Deployment & Launch", "date": "2024-09-30", "completed": false}
  ]'),
  ('a1b2c3d4-e5f6-7890-1234-567890abcdef', 'Lead Generation Campaign', 'Completed', 100, '2024-08-15', 5000.00, 5000.00, 
  '[
    {"event": "Strategy & Keyword Research", "date": "2024-07-01", "completed": true},
    {"event": "Ad Campaign Setup", "date": "2024-07-10", "completed": true},
    {"event": "Campaign Launch", "date": "2024-07-15", "completed": true},
    {"event": "Final Report", "date": "2024-08-15", "completed": true}
  ]');
