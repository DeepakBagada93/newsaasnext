

export type Client = {
  id: string;
  name: string;
  company: string | null;
  email: string;
  username: string;
  password_hash?: string; // Should not be sent to client
  created_at: string;
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
  clients?: Client; // Optional client data if joining tables
};
