

export type Profile = {
  id: string; // Corresponds to auth.users.id
  full_name: string | null;
  company: string | null;
  email: string | null;
  role: 'admin' | 'client';
};


export type ProjectStatus = "In Progress" | "Completed" | "Planning" | "On Hold" | "Archived";

export type TimelineEvent = { 
  event: string; 
  date: string; 
  completed: boolean 
};

export type Project = {
  id: string;
  client_id: string; // Foreign key to profiles.id
  name: string;
  status: ProjectStatus;
  progress: number;
  deadline: string | null;
  total_budget: number | null;
  paid: number | null;
  timeline: TimelineEvent[] | null;
  created_at: string;
  profiles?: Profile; // Optional profile data if joining tables
};
