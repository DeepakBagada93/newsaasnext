
'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Activity, Target, DollarSign, Users, Loader2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import type { Project } from '@/lib/types';


// Note: Metadata export is not effective in a client component. 
/*
export const metadata: Metadata = {
  title: 'Lead Generation | Client Dashboard',
  description: 'Manage your lead generation campaigns with SaaSnext.',
};
*/

// Mock data, as we don't have this in the DB yet
const chartData = [
  { month: 'Jan', leads: 65, signups: 40 },
  { month: 'Feb', leads: 59, signups: 33 },
  { month: 'Mar', leads: 80, signups: 62 },
  { month: 'Apr', leads: 81, signups: 55 },
  { month: 'May', leads: 56, signups: 41 },
  { month: 'Jun', leads: 72, signups: 50 },
];

const recentLeads = [
    { id: 1, name: 'Alex Johnson', email: 'alex.j@example.com', source: 'Google Ads', status: 'New' },
    { id: 2, name: 'Maria Garcia', email: 'maria.g@example.com', source: 'Organic Search', status: 'Contacted' },
    { id: 3, name: 'Chen Wei', email: 'chen.w@example.com', source: 'Facebook', status: 'Qualified' },
    { id: 4, name: 'Fatima Al-Sayed', email: 'fatima.a@example.com', source: 'LinkedIn', status: 'New' },
    { id: 5, name: 'David Smith', email: 'david.s@example.com', source: 'Referral', status: 'Converted' },
];

export default function LeadGenerationPage() {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchProject = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("You must be logged in to view project details.");
        setLoading(false);
        return;
      }
      
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('client_id', session.user.id)
        .ilike('name', '%lead generation%') // Simple filter for lead gen
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      
      if (error) {
        console.error("Error fetching project:", error);
         if (error.code === 'PGRST116') { // "exact one row expected, but found no rows"
             setError("No active lead generation project found for your account. The data below is for demonstration only.");
        } else {
             setError("Could not fetch project data. The data below is for demonstration only.");
        }
      } else {
        setProject(data);
      }
      setLoading(false);
    };

    fetchProject();
  }, [supabase]);

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new':
        return <Badge variant="secondary">New</Badge>;
      case 'contacted':
        return <Badge className="bg-blue-500/20 text-blue-500">Contacted</Badge>;
      case 'qualified':
        return <Badge className="bg-yellow-500/20 text-yellow-500">Qualified</Badge>;
      case 'converted':
        return <Badge className="bg-green-500/20 text-green-500">Converted</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Lead Generation</h1>
      
      {loading ? (
        <div className="flex items-center text-muted-foreground"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Loading campaign data...</div>
      ) : project ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Campaign Budget</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${project.total_budget?.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">For Q3 2024</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Campaign Status</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{project.status}</div>
              <p className="text-xs text-muted-foreground">Next step: {project.timeline?.find(t => !t.completed)?.event || 'Review'}</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leads This Month</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,254</div>
              <p className="text-xs text-muted-foreground">+15.2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5%</div>
              <p className="text-xs text-muted-foreground">+2.1% from last month</p>
            </CardContent>
          </Card>
        </div>
      ) : (
         <div className="text-muted-foreground">{error}</div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Campaign Performance</CardTitle>
            <CardDescription>Leads and Signups Over Last 6 Months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--muted) / 0.5)' }}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                  }}
                />
                <Legend iconSize={10} wrapperStyle={{fontSize: "12px"}}/>
                <Bar dataKey="leads" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="signups" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
            <CardDescription>A list of the latest leads from your campaigns.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <div className="font-medium">{lead.name}</div>
                      <div className="text-xs text-muted-foreground">{lead.email}</div>
                    </TableCell>
                    <TableCell>{lead.source}</TableCell>
                    <TableCell className="text-right">{getStatusBadge(lead.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
