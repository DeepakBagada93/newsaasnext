-- Enable pgcrypto for password hashing
create extension if not exists pgcrypto;

-- Create a table for admin users
create table if not exists admins (
  id uuid default gen_random_uuid() primary key,
  username text not null unique,
  password_hash text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create a table for clients
create table if not exists clients (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  company text,
  email text not null unique,
  username text not null unique,
  password_hash text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create a type for project status if it doesn't exist
do $$
begin
    if not exists (select 1 from pg_type where typname = 'project_status') then
        create type project_status as enum ('Planning', 'In Progress', 'On Hold', 'Completed', 'Archived');
    end if;
end$$;


-- Create the projects table
create table if not exists projects (
  id uuid default gen_random_uuid() primary key,
  client_id uuid references public.clients on delete cascade not null,
  name text not null,
  status project_status default 'Planning' not null,
  progress integer default 0 check (progress >= 0 and progress <= 100),
  deadline date,
  total_budget numeric(10, 2),
  paid numeric(10, 2),
  timeline jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS) for all tables
alter table admins enable row level security;
create policy "Allow public read-only access to admins" on admins for select using (true);
create policy "Allow full access to admins based on custom auth" on admins for all using (true); -- In a real app, you would lock this down

alter table clients enable row level security;
create policy "Allow admins to manage clients" on clients for all using (true); -- In a real app, you'd check for an admin role

alter table projects enable row level security;
create policy "Allow admins to manage projects" on projects for all using (true); -- In a real app, you'd check for an admin role
create policy "Allow clients to view their own projects" on projects for select using (
  exists (
    select 1 from clients where clients.id = projects.client_id
    -- Here you would typically check against the authenticated user's ID from a session
    -- This is a simplified placeholder
  )
);

-- --- SEED DATA ---

-- Clear existing data to prevent duplicate key errors on re-run
-- Use with caution in production
delete from admins;
delete from clients;
delete from projects;

-- Insert a default admin user
-- Username: Deepak Bagada, Password: Deeepak@3093
-- The password_hash is now the plaintext password. The app will hash it on first login.
INSERT INTO admins (username, password_hash)
VALUES ('Deepak Bagada', 'Deeepak@3093');


-- Insert a default client user
-- Username: democlient, Password: password
INSERT INTO clients (name, company, email, username, password_hash)
VALUES ('Demo Client', 'Innovate Inc.', 'demo@example.com', 'democlient', crypt('password', gen_salt('bf')));

-- Get the ID of the client we just created
-- This is a simplified way to do this for a seed script. In a real app, you would get the ID programmatically.
-- For this script to be runnable, you might need to run the SELECT statement separately and paste the ID in.
-- For simplicity, we'll assume a way to get the ID, or use a known one if seeding manually.

do $$
declare
  demo_client_id uuid;
begin
  -- Find the ID of the 'democlient'
  select id into demo_client_id from clients where username = 'democlient';

  -- Insert a Web Development project for the demo client
  insert into projects (client_id, name, status, progress, deadline, total_budget, paid, timeline)
  values
    (demo_client_id, 'Corporate Website Redesign', 'In Progress', 60, '2024-09-30', 12000.00, 6000.00,
      '[
        {"event": "Discovery & Planning", "date": "2024-06-01", "completed": true},
        {"event": "UI/UX Design", "date": "2024-06-15", "completed": true},
        {"event": "Frontend Development", "date": "2024-07-20", "completed": true},
        {"event": "Backend Development", "date": "2024-08-10", "completed": false},
        {"event": "Testing & QA", "date": "2024-09-15", "completed": false},
        {"event": "Deployment", "date": "2024-09-30", "completed": false}
      ]'::jsonb
    );

  -- Insert a Lead Generation project for the demo client
  insert into projects (client_id, name, status, progress, deadline, total_budget, paid, timeline)
  values
    (demo_client_id, 'Q3 Lead Generation Campaign', 'Completed', 100, '2024-07-31', 5000.00, 5000.00,
      '[
        {"event": "Campaign Strategy", "date": "2024-05-15", "completed": true},
        {"event": "Ad Creatives & Copy", "date": "2024-06-01", "completed": true},
        {"event": "Campaign Launch", "date": "2024-06-10", "completed": true},
        {"event": "Mid-Campaign Review", "date": "2024-07-05", "completed": true},
        {"event": "Final Report", "date": "2024-07-31", "completed": true}
      ]'::jsonb
    );
end $$;
