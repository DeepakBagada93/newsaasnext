
'use client'
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, Loader2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import type { Project } from '@/lib/types';

// Mock Data
const mockProject: Project = {
  id: "proj_123",
  client_id: "user_456",
  name: "Client Web Development Project",
  status: "In Progress",
  progress: 65,
  deadline: "2024-09-30T00:00:00.000Z",
  total_budget: 15000,
  paid: 7500,
  timeline: [
    { event: "Project Kick-off & Discovery", date: "2024-07-01", completed: true },
    { event: "Design & Wireframing", date: "2024-07-15", completed: true },
    { event: "Frontend Development", date: "2024-08-15", completed: true },
    { event: "Backend & API Integration", date: "2024-09-01", completed: false },
    { event: "Testing & QA", date: "2024-09-15", completed: false },
    { event: "Deployment & Launch", date: "2024-09-30", completed: false },
  ],
  created_at: "2024-07-01T10:00:00.000Z",
};


// This data will be fetched from Supabase
const formatDate = (dateString: string | null) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC', // Ensure consistent date formatting
  });
};

export default function WebDevelopmentPage() {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching data
    setLoading(true);
    setTimeout(() => {
        // In a real app, you'd fetch this data. For now, we use mock data.
        // Since login is removed, we show a demo project.
        setProject(mockProject);
        setError("This is a demo project. Data is not loaded from a database.");
        setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-4">Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return <div className="p-8 text-muted-foreground">{error || "No active web development project found."}</div>;
  }

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Web Development</h1>
      {error && <div className="p-4 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-md text-sm">{error}</div>}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>Overview of your ongoing web development project.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-muted-foreground">Project Progress</span>
                <span className="text-sm font-bold text-primary">{project.progress}% Complete</span>
              </div>
              <Progress value={project.progress} className="w-full" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="font-semibold text-foreground">Start Date</p>
                    <p className="text-muted-foreground">{formatDate(project.timeline?.[0]?.date)}</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="font-semibold text-foreground">Target Deadline</p>
                    <p className="text-muted-foreground">{formatDate(project.deadline)}</p>
                </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Project Milestones</h3>
              <div className="space-y-4">
                {project.timeline?.map((milestone) => (
                  <div key={milestone.event} className="flex items-start space-x-3">
                    {milestone.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    )}
                    <span className={milestone.completed ? "text-muted-foreground line-through" : "text-foreground"}>
                      {milestone.event}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center justify-between">
                    <span className="font-medium">Current Status:</span>
                    <span className="font-semibold text-primary">{project.status}</span>
                </li>
                 <li className="flex items-center justify-between">
                    <span className="font-medium">Next Milestone:</span>
                    <span className="font-semibold text-foreground">{project.timeline?.find(m => !m.completed)?.event || 'All done!'}</span>
                </li>
                 <li className="flex items-center justify-between">
                    <span className="font-medium">Project Manager:</span>
                    <span className="font-semibold text-foreground">Deepak B.</span>
                </li>
            </ul>
             <Separator className="my-6" />
             <p className="text-xs text-muted-foreground">
                Project data is for demonstration purposes. For any questions, please contact support.
             </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
