import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Dashboard',
  description: 'Manage your SaaSnext services, projects, and billing.',
};

export default function ClientDashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Your Dashboard</CardTitle>
            <CardDescription>Here you can manage all your services with SaaSnext.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use the sidebar to navigate between your active services, view billing history, or manage your account settings. We're continuously adding new features to improve your experience.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Need help navigating the dashboard?</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <p className="text-sm text-muted-foreground">
              Explore the sections in the sidebar. Each service has its own dedicated area for project status, analytics, and support.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">
                Contact Support
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
       <div className="text-center p-4 mt-8">
          <p className="text-muted-foreground">This dashboard is currently under active development. More features coming soon!</p>
      </div>
    </div>
  );
}
