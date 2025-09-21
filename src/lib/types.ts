// This file can be removed if no longer used by other parts of the application,
// but is kept for now as it contains general-purpose types.

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
};
