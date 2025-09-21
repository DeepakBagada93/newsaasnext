'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users, Briefcase, CreditCard, Activity, DollarSign, UserPlus } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';


export default function AdminDashboardPage() {
    const { profile } = useAuth();
    
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
            <CardTitle className="text-sm font-medium">Pending Services</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">3 require approval</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 Updates</div>
            <p className="text-xs text-muted-foreground">New client & 2 payments today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Welcome, {profile?.full_name || 'Admin'}</CardTitle>
            <CardDescription>Oversee and manage all operations from here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use the sidebar to navigate to different sections. You can manage client accounts, approve service requests, and view payment histories. Check the quick actions to jump right in.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Jump directly into management tasks.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
             <Button asChild>
              <Link href="/saasnextdbadmin/clients">
                <UserPlus className="mr-2 h-4 w-4" /> Add New Client
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
    </div>
  );
}
