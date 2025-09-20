
-- Drop existing tables and types if they exist, to ensure a clean slate.
-- Use CASCADE to remove dependent objects.
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS clients CASCADE;
DROP TABLE IF EXISTS admins CASCADE;
DROP TYPE IF EXISTS project_status;

-- Create a custom type for project statuses.
-- Using a type ensures that the 'status' column in the projects table can only have these specific values.
CREATE TYPE project_status AS ENUM ('Planning', 'In Progress', 'On Hold', 'Completed', 'Archived');

-- Create the admins table.
-- This table stores credentials for administrators.
CREATE TABLE IF NOT EXISTS admins (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create the clients table.
-- This table stores information and credentials for clients.
CREATE TABLE IF NOT EXISTS clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create the projects table.
-- This table stores details about each project and links them to a client.
CREATE TABLE IF NOT EXISTS projects (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    client_id uuid REFERENCES clients(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    status project_status DEFAULT 'Planning' NOT NULL,
    progress INT DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
    deadline DATE,
    total_budget NUMERIC(10, 2),
    paid NUMERIC(10, 2),
    timeline JSONB, -- Stores milestones and other timeline-related events as a JSON object.
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS) for all tables.
-- This is a crucial security measure in Supabase to control data access.
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- RLS Policies for the 'admins' table.
-- For a custom auth system, we generally allow server-side access (using the service_role key).
-- These policies effectively deny all client-side access, which is what we want.
CREATE POLICY "Allow server-side access only for admins" ON admins FOR ALL
USING (false)
WITH CHECK (false);

-- RLS Policies for the 'clients' table.
-- Similar to admins, we deny all client-side read/write access.
-- Client creation and authentication are handled by secure server-side actions.
CREATE POLICY "Allow server-side access only for clients" ON clients FOR ALL
USING (false)
WITH CHECK (false);

-- RLS Policies for the 'projects' table.
-- We deny client-side access here as well. Data will be fetched via server-side
-- functions that can verify the user's role and ID from a secure JWT.
CREATE POLICY "Allow server-side access only for projects" ON projects FOR ALL
USING (false)
WITH CHECK (false);


-- --- DEMO DATA ---
-- Note: Passwords are 'password'. Do not use these in production.

-- Insert a sample admin user.
-- The password 'password' is securely hashed. The hash was generated using bcrypt.
-- In a real application, you would have a secure way to add initial admin users.
INSERT INTO admins (username, password_hash)
VALUES ('admin', '$2a$10$f.Xp/F5VihvA1KJ2/MOiHeV9F8FylvTrwV/fJ/.5MhMh3wL1vj/vS');

-- Insert a sample client user.
INSERT INTO clients (name, company, email, username, password_hash)
VALUES ('Demo Client', 'Innovate Inc.', 'demo@example.com', 'democlient', '$2a$10$3.J67z5h3a.gRRf./gD9YOJzI.Wd1lqw.w.s5.i8sZcK6f3qU8l9y')
RETURNING id; -- The 'RETURNING id' clause is useful if you need to capture the new ID.

-- Insert sample projects for the demo client.
-- This uses a subquery to get the ID of the client we just inserted.
INSERT INTO projects (client_id, name, status, progress, deadline, total_budget, paid, timeline)
SELECT
    id,
    'Corporate Website Redesign',
    'In Progress',
    75,
    '2024-09-30',
    15000.00,
    10000.00,
    '[
        {"event": "Discovery & Planning", "date": "2024-07-01", "completed": true},
        {"event": "Design & UX/UI", "date": "2024-07-15", "completed": true},
        {"event": "Frontend Development", "date": "2024-08-15", "completed": true},
        {"event": "Backend & CMS Integration", "date": "2024-09-01", "completed": false},
        {"event": "Testing & Deployment", "date": "2024-09-30", "completed": false}
    ]'
FROM clients WHERE username = 'democlient';

INSERT INTO projects (client_id, name, status, progress, deadline, total_budget, paid, timeline)
SELECT
    id,
    'Q3 Lead Generation Campaign',
    'Planning',
    20,
    '2024-09-30',
    7500.00,
    1500.00,
    '[
        {"event": "Strategy & Audience Research", "date": "2024-07-10", "completed": true},
        {"event": "Ad Creative & Copywriting", "date": "2024-07-25", "completed": false},
        {"event": "Campaign Launch", "date": "2024-08-01", "completed": false},
        {"event": "Mid-Campaign Review", "date": "2024-09-01", "completed": false}
    ]'
FROM clients WHERE username = 'democlient';
