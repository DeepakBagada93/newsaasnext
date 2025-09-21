
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Users, Briefcase, CreditCard, Activity, DollarSign, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Admin Dashboard | SaaSnext',
  description: 'Manage clients, services, and payments for SaaSnext.',
};

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+23</div>
            <p className="text-xs text-muted-foreground">+5 since last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ongoing Services</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">2 new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">Operational</div>
            <p className="text-xs text-muted-foreground">All systems are running smoothly</p>
          </CardContent>
        </Card>
      </div>

       <div className="grid gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Perform common admin tasks quickly.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                    <Button asChild>
                        <Link href="/saasnext-admin/clients">
                           <Users className="mr-2"/> Manage Clients
                        </Link>
                    </Button>
                     <Button asChild variant="secondary">
                        <Link href="/saasnext-admin/services">
                           <Briefcase className="mr-2"/> Manage Services
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/saasnext-admin/payments">
                           <CreditCard className="mr-2"/> View Payments
                        </Link>
                    </Button>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Add New</CardTitle>
                     <CardDescription>Create new entries in the system.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                    <Button>
                        <UserPlus className="mr-2 h-4 w-4" /> Add New Client
                    </Button>
                     <Button variant="secondary">
                        <Briefcase className="mr-2 h-4 w-4" /> Add New Service
                    </Button>
                </CardContent>
            </Card>
       </div>
    </div>
  );
}
