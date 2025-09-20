
'use client'
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// This data is now for demonstration and is consistent with the admin panel's source of truth.
// In a real application, this would be fetched from a database.
const project = {
  name: 'E-commerce Platform Launch',
  progress: 65,
  startDate: '2024-05-01',
  deadline: '2024-08-15',
  milestones: [
      { event: "Project Kick-off", date: "2024-05-01", completed: true},
      { event: "Design Phase", date: "2024-05-15", completed: true},
      { event: "Frontend Development", date: "2024-06-01", completed: true},
      { event: "Backend & API Integration", date: "2024-07-01", completed: false},
      { event: "QA Testing", date: "2024-07-20", completed: false},
      { event: "Deployment to Staging", date: "2024-08-01", completed: false},
      { event: "Launch", date: "2024-08-15", completed: false},
  ],
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC', // Ensure consistent date formatting regardless of server location
  });
};

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Web Development</h1>
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
                    <p className="text-muted-foreground">{formatDate(project.startDate)}</p>
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
                {project.milestones.map((milestone) => (
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

        {/* Sidebar Card for quick info */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center justify-between">
                    <span className="font-medium">Current Status:</span>
                    <span className="font-semibold text-primary">In Progress</span>
                </li>
                 <li className="flex items-center justify-between">
                    <span className="font-medium">Next Milestone:</span>
                    <span className="font-semibold text-foreground">Backend & API Integration</span>
                </li>
                 <li className="flex items-center justify-between">
                    <span className="font-medium">Project Manager:</span>
                    <span className="font-semibold text-foreground">Deepak B.</span>
                </li>
            </ul>
             <Separator className="my-6" />
             <p className="text-xs text-muted-foreground">
                This is a demo representation. Actual project timelines and details may vary. For any questions, please contact support.
             </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
