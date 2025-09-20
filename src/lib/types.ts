
export type Profile = {
  id: string;
  name: string | null;
  company: string | null;
  email?: string; // email is on auth.users, but we might join it
};

export type ProjectStatus = "In Progress" | "Completed" | "Planning" | "On Hold" | "Archived";

export type TimelineEvent = { 
  event: string; 
  date: string; 
  completed: boolean 
};

export type Project = {
  id: string;
  client_id: string;
  name: string;
  status: ProjectStatus;
  progress: number;
  deadline: string | null;
  total_budget: number | null;
  paid: number | null;
  timeline: TimelineEvent[] | null;
  created_at: string;
  profiles?: Profile; // Optional profile if joining tables
};
