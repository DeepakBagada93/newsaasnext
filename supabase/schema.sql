-- Create a table for public proles
create table if not exists profiles (
  id uuid not null references auth.users on delete cascade,
  full_name text,
  company text,
  email text,
  role text default 'client',
  primary key (id)
);

alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- This trigger automatically creates a profile for new users.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email, role)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.email,
    new.raw_user_meta_data->>'role'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Drop existing trigger if it exists
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- Create a custom type for project status
do $$ begin
    create type project_status as enum ('Planning', 'In Progress', 'On Hold', 'Completed', 'Archived');
exception
    when duplicate_object then null;
end $$;

-- Create the projects table
create table if not exists projects (
    id uuid primary key default gen_random_uuid(),
    client_id uuid not null references public.profiles(id),
    name text not null,
    status project_status not null default 'Planning',
    progress int not null default 0 check (progress >= 0 and progress <= 100),
    deadline date,
    total_budget numeric(10, 2),
    paid numeric(10, 2) default 0,
    timeline jsonb,
    created_at timestamptz not null default now()
);

-- Enable RLS for projects table
alter table projects enable row level security;

-- Admins can do anything
create policy "Admins can manage all projects"
on projects
for all
using (
  exists (
    select 1 from profiles where id = auth.uid() and role = 'admin'
  )
)
with check (
  exists (
    select 1 from profiles where id = auth.uid() and role = 'admin'
  )
);

-- Clients can only see their own projects
create policy "Clients can view their own projects"
on projects
for select
using (
  auth.uid() = client_id
);


-- Set up Storage!
insert into storage.buckets (id, name, public)
values ('project_files', 'project_files', false)
on conflict (id) do nothing;

create policy "Project files are accessible to the project's client and admins"
on storage.objects for select
using (
  (bucket_id = 'project_files') and
  (
    -- User is an admin
    (select role from profiles where id = auth.uid()) = 'admin'
    or
    -- User is the client associated with the project this file belongs to
    auth.uid() = (select client_id from projects where id = (storage.foldername(name))[1]::uuid)
  )
);

create policy "Admins can upload project files"
on storage.objects for insert
with check (
  (bucket_id = 'project_files') and
  (select role from profiles where id = auth.uid()) = 'admin'
);

-- DEMO DATA

-- Before running this, you need to create a user in your Supabase Auth dashboard
-- and replace 'PUT_CLIENT_USER_ID_HERE' with the actual user ID.

-- Example Client and Projects
-- INSERT INTO public.profiles (id, full_name, company, email, role)
-- VALUES ('PUT_CLIENT_USER_ID_HERE', 'Demo Client', 'Innovate Inc.', 'client@example.com', 'client');

-- with client as (
--   select id from public.profiles where email = 'client@example.com'
-- )
-- INSERT INTO public.projects (client_id, name, status, progress, deadline, total_budget, paid, timeline)
-- VALUES
-- ((select id from client), 'New Corporate Website Development', 'In Progress', 45, '2024-10-31', 15000.00, 7500.00, '[
--   {"event": "Project Kick-off & Discovery", "date": "2024-07-01", "completed": true},
--   {"event": "Design & Wireframing", "date": "2024-07-15", "completed": true},
--   {"event": "Frontend Development", "date": "2024-08-15", "completed": false},
--   {"event": "Backend & CMS Integration", "date": "2024-09-15", "completed": false},
--   {"event": "Testing & QA", "date": "2024-10-15", "completed": false},
--   {"event": "Launch", "date": "2024-10-31", "completed": false}
-- ]'),
-- ((select id from client), 'Q3 Lead Generation Campaign', 'In Progress', 60, '2024-09-30', 5000.00, 2500.00, '[
--   {"event": "Campaign Strategy", "date": "2024-07-05", "completed": true},
--   {"event": "Ad Creative & Copy", "date": "2024-07-20", "completed": true},
--   {"event": "Google Ads Launch", "date": "2024-08-01", "completed": true},
--   {"event": "Meta Ads Launch", "date": "2024-08-10", "completed": false},
--   {"event": "Mid-Campaign Review", "date": "2024-09-01", "completed": false},
--   {"event": "Final Report", "date": "2024-09-30", "completed": false}
-- ]');
