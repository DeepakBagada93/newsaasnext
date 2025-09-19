
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users, Briefcase, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Manage clients, services, and payments.',
};

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, Admin</CardTitle>
            <CardDescription>Oversee and manage all operations from here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use the sidebar to navigate to different sections. You can manage client accounts, approve service requests, and view payment histories.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Jump directly into management tasks.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
             <Button asChild variant="outline">
              <Link href="/saasnextdbadmin/clients">
                <Users className="mr-2 h-4 w-4" /> Manage Clients
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/saasnextdbadmin/services">
                <Briefcase className="mr-2 h-4 w-4" /> Review Services
              </Link>
            </Button>
             <Button asChild variant="outline">
              <Link href="/saasnextdbadmin/payments">
                <CreditCard className="mr-2 h-4 w-4" /> View Payments
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
       <div className="text-center p-4 mt-8">
          <p className="text-muted-foreground">This admin portal is a foundational build. More features coming soon!</p>
      </div>
    </div>
  );
}
