
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'AI Automation | Client Dashboard',
  description: 'Manage your AI automation projects with SaaSnext.',
};

export default function AiAutomationPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">AI Automation</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Automation Insights</CardTitle>
            <CardDescription>Overview of your AI automation initiatives.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This section is under development. Soon you will be able to monitor automation performance, view reports, and manage AI model deployments here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
