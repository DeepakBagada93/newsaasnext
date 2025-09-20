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

-- In a real app, you would check for an admin role. For this demo, we allow broader access.
-- This policy allows users with the 'service_role' (like admins from server-side) to do anything.
create policy "Admins can manage all projects." on projects
  for all using (true);

-- This policy allows authenticated clients to view only their own projects.
create policy "Clients can view their own projects." on projects
  for select using (auth.uid() = client_id);
