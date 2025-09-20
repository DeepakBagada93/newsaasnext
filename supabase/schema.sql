-- Create a custom type for project status if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'project_status') THEN
        CREATE TYPE project_status AS ENUM ('Planning', 'In Progress', 'On Hold', 'Completed', 'Archived');
    END IF;
END$$;


-- Create the clients table for custom authentication
CREATE TABLE IF NOT EXISTS public.clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT,
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Create the projects table
CREATE TABLE IF NOT EXISTS public.projects (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id uuid REFERENCES public.clients(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  status project_status DEFAULT 'Planning' NOT NULL,
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  deadline DATE,
  total_budget NUMERIC(10, 2),
  paid NUMERIC(10, 2),
  timeline JSONB,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Set up Row Level Security (RLS) for clients table
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
-- Admins should be able to manage all clients. For this to work, you'd typically have a role-check.
-- For simplicity, we'll allow all authenticated users (i.e., your admin account) to manage clients.
CREATE POLICY "Allow admin to manage clients" ON public.clients FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- Set up Row Level Security (RLS) for projects table
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
-- Admins can manage all projects
CREATE POLICY "Allow admin to manage projects" ON public.projects FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');
-- Clients can only see their own projects (this is illustrative, as client access is handled by custom auth)


--
-- DEMO DATA (Optional)
--
-- NOTE: To insert this data, you must first create a client using the 'Add New Client'
-- functionality in the admin dashboard. Then, replace the placeholder UUIDs below
-- with the actual 'id' of the client you created. You can find the ID in the 'clients' table.
--
-- Example of how to add demo data after creating a client:
/*
-- 1. Create a client in the app's admin dashboard first.
--    Let's say the created client has the id: 'a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6'

-- 2. Insert a Web Development project for this client
INSERT INTO public.projects (client_id, name, status, progress, deadline, total_budget, paid, timeline)
VALUES
(
  'a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6',
  'Corporate Website Redesign',
  'In Progress',
  40,
  '2024-09-30',
  15000.00,
  7500.00,
  '[
    {"event": "Discovery & Planning", "date": "2024-07-10", "completed": true},
    {"event": "UI/UX Design", "date": "2024-07-25", "completed": true},
    {"event": "Frontend Development", "date": "2024-08-20", "completed": false},
    {"event": "Backend Development", "date": "2024-09-10", "completed": false},
    {"event": "Deployment", "date": "2024-09-28", "completed": false}
  ]'
);

-- 3. Insert a Lead Generation project for the same client
INSERT INTO public.projects (client_id, name, status, progress, deadline, total_budget, paid, timeline)
VALUES
(
  'a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6',
  'Q3 Google Ads Campaign',
  'In Progress',
  60,
  '2024-09-30',
  5000.00,
  2500.00,
  '[
    {"event": "Keyword Research", "date": "2024-07-05", "completed": true},
    {"event": "Ad Copy Creation", "date": "2024-07-15", "completed": true},
    {"event": "Campaign Launch", "date": "2024-08-01", "completed": true},
    {"event": "Mid-Campaign Review", "date": "2024-08-30", "completed": false},
    {"event": "Final Report", "date": "2024-10-05", "completed": false}
  ]'
);
*/
