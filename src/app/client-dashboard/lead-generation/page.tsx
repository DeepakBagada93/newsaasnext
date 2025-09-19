
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Lead Generation | Client Dashboard',
  description: 'Manage your lead generation campaigns with SaaSnext.',
};

export default function LeadGenerationPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Lead Generation</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Campaign Performance</CardTitle>
            <CardDescription>Overview of your lead generation activities.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This section is under development. Soon you will be able to track campaign metrics, view lead data, and analyze ROI here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
