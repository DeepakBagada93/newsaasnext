-- Create a table for public profiles
create table profiles (
  id uuid references auth.users not null primary key,
  name text,
  company text
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security
alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- This trigger automatically creates a profile entry when a new user signs up
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, company)
  values (new.id, new.raw_user_meta_data->>'name', new.raw_user_meta_data->>'company');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Create a type for project status
create type project_status as enum ('Planning', 'In Progress', 'On Hold', 'Completed', 'Archived');

-- Create the projects table
create table projects (
  id uuid default gen_random_uuid() primary key,
  client_id uuid references public.profiles on delete cascade not null,
  name text not null,
  status project_status default 'Planning' not null,
  progress integer default 0 check (progress >= 0 and progress <= 100),
  deadline date,
  total_budget numeric(10, 2),
  paid numeric(10, 2),
  timeline jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add RLS policies for projects
alter table projects
  enable row level security;

create policy "Admins can manage all projects." on projects
  for all using (true); -- In a real app, you'd check for an admin role.

create policy "Clients can view their own projects." on projects
  for select using (auth.uid() = client_id);

--- DEMO DATA ---
-- NOTE: Before running the INSERT statements, you must create a user in your Supabase
-- Authentication system. Then, replace 'PASTE_YOUR_AUTH_USER_ID_HERE' with the actual
-- user ID you get from the auth.users table.

-- 1. Insert a client profile linked to an auth user
-- INSERT INTO public.profiles (id, name, company)
-- VALUES ('PASTE_YOUR_AUTH_USER_ID_HERE', 'Innovate Inc.', 'Alex Johnson');

-- 2. Insert a Web Development project for that client
-- INSERT INTO public.projects (client_id, name, status, progress, deadline, total_budget, paid, timeline)
-- VALUES (
--   'PASTE_YOUR_AUTH_USER_ID_HERE',
--   'E-commerce Platform Launch',
--   'In Progress',
--   65,
--   '2024-08-15',
--   15000.00,
--   7500.00,
--   '[
--     {"event": "Project Kick-off", "date": "2024-05-01", "completed": true},
--     {"event": "Design Phase", "date": "2024-05-15", "completed": true},
--     {"event": "Frontend Development", "date": "2024-06-01", "completed": true},
--     {"event": "Backend & API Integration", "date": "2024-07-01", "completed": false},
--     {"event": "QA Testing", "date": "2024-07-20", "completed": false},
--     {"event": "Deployment to Staging", "date": "2024-08-01", "completed": false},
--     {"event": "Launch", "date": "2024-08-15", "completed": false}
--   ]'::jsonb
-- );

-- 3. Insert a Lead Generation project for that client
-- INSERT INTO public.projects (client_id, name, status, progress, deadline, total_budget, paid, timeline)
-- VALUES (
--   'PASTE_YOUR_AUTH_USER_ID_HERE',
--   'Q3 Lead Generation Campaign',
--   'Planning',
--   10,
--   '2024-09-30',
--   5000.00,
--   0.00,
--   '[
--     {"event": "Strategy Finalized", "date": "2024-07-15", "completed": false},
--     {"event": "Creatives Ready", "date": "2024-07-30", "completed": false},
--     {"event": "Campaign Launch", "date": "2024-08-01", "completed": false}
--   ]'::jsonb
-- );
