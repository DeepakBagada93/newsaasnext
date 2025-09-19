
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Web Development | Client Dashboard',
  description: 'Manage your web development projects with SaaSnext.',
};

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Web Development</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
            <CardDescription>Overview of your ongoing web development projects.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This section is under development. Soon you will be able to track project milestones, view analytics, and access project files here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
