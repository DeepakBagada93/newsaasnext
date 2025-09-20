
-- Drop tables and types if they exist for a clean slate during development
-- Use with caution in production
DROP TABLE IF EXISTS "projects";
DROP TABLE IF EXISTS "clients";
DROP TYPE IF EXISTS "project_status";

-- Create a custom type for project status
CREATE TYPE "project_status" AS ENUM ('Planning', 'In Progress', 'On Hold', 'Completed', 'Archived');

-- Create the clients table to store client-specific information
-- This table is separate from Supabase's auth.users table
CREATE TABLE "clients" (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the projects table to store project details
-- It references the new clients table
CREATE TABLE "projects" (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id uuid REFERENCES clients(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  status project_status DEFAULT 'Planning' NOT NULL,
  progress INT DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  deadline DATE,
  total_budget NUMERIC(10, 2),
  paid NUMERIC(10, 2),
  timeline JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Note: RLS (Row Level Security) is not applied here as client authentication
-- is handled by the application logic. Ensure your API endpoints and server actions
-- have proper authorization checks to prevent unauthorized data access.


-- --- SEED DATA ---
-- This section provides sample data for demonstration.
-- 1. Create a sample client.
--    The password 'password123' is shown here for clarity, but it will be hashed
--    by the application before being inserted. The hash below is for 'password123'.
INSERT INTO "clients" (id, name, company, email, username, password_hash)
VALUES (
    'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', -- This is a placeholder UUID.
    'Demo Client',
    'Innovate Inc.',
    'client@example.com',
    'democlient',
    '$2a$10$1b.gC3p2rT.v.N/C8Q9Q..J/8qYqS1Y/K2W.7G8jF/L3XwQ2qg.yW' -- Bcrypt hash for 'password123'
);

-- 2. Add projects for the sample client.
--    Ensure the client_id matches the UUID of the client created above.
INSERT INTO "projects" (client_id, name, status, progress, deadline, total_budget, paid, timeline)
VALUES
(
    'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', -- Match this with the client's UUID
    'E-commerce Platform Launch',
    'In Progress',
    60,
    '2024-09-30',
    25000,
    15000,
    '[
        {"event": "Project Kick-off", "date": "2024-05-01", "completed": true},
        {"event": "Design & Prototyping", "date": "2024-05-20", "completed": true},
        {"event": "Frontend Development", "date": "2024-06-15", "completed": true},
        {"event": "Backend & API Integration", "date": "2024-07-20", "completed": false},
        {"event": "Deployment to Staging", "date": "2024-08-10", "completed": false},
        {"event": "Final Launch", "date": "2024-08-30", "completed": false}
    ]'::jsonb
),
(
    'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', -- Match this with the client's UUID
    'Q3 Lead Generation Campaign',
    'Planning',
    15,
    '2024-08-15',
    5000,
    0,
    '[
        {"event": "Strategy & Keyword Research", "date": "2024-07-01", "completed": true},
        {"event": "Ad Creative Development", "date": "2024-07-10", "completed": false},
        {"event": "Campaign Launch", "date": "2024-07-20", "completed": false}
    ]'::jsonb
);
