
'use client';

import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Bot, Zap, Timer, CheckCircle } from 'lucide-react';

// Metadata export is not effective in a client component.
/*
export const metadata: Metadata = {
  title: 'AI Automation | Client Dashboard',
  description: 'Manage your AI automation projects with SaaSnext.',
};
*/

const chartData = [
  { month: 'Jan', tasks: 4000 },
  { month: 'Feb', tasks: 3000 },
  { month: 'Mar', tasks: 5000 },
  { month: 'Apr', tasks: 4500 },
  { month: 'May', tasks: 6000 },
  { month: 'Jun', tasks: 7500 },
];

const activeAutomations = [
  { id: 1, name: 'Customer Support Chatbot', status: 'Active', tasksProcessed: 15230, lastRun: '2 minutes ago' },
  { id: 2, name: 'Invoice Data Extraction', status: 'Active', tasksProcessed: 8940, lastRun: '15 minutes ago' },
  { id: 3, name: 'Social Media Post Scheduler', status: 'Paused', tasksProcessed: 5400, lastRun: '2 days ago' },
  { id: 4, name: 'Lead Qualification AI', status: 'Active', tasksProcessed: 21050, lastRun: '30 seconds ago' },
  { id: 5, name: 'Sentiment Analysis Model', status: 'Training', tasksProcessed: 0, lastRun: 'N/A' },
];

export default function AiAutomationPage() {
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return <Badge className="bg-green-500/20 text-green-500">Active</Badge>;
      case 'paused':
        return <Badge variant="secondary">Paused</Badge>;
      case 'training':
        return <Badge className="bg-blue-500/20 text-blue-500">Training</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">AI Automation</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Automated Tasks</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28,540</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Efficiency Gain</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+45%</div>
            <p className="text-xs text-muted-foreground">Time saved on manual work</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Automations</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">1 in training</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Model Accuracy</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.2%</div>
            <p className="text-xs text-muted-foreground">Average across all models</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tasks Automated Over Time</CardTitle>
            <CardDescription>Last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
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
                <Line type="monotone" dataKey="tasks" stroke="hsl(var(--primary))" strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Automations</CardTitle>
            <CardDescription>An overview of your running AI processes.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Automation</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Last Run</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeAutomations.map((automation) => (
                  <TableRow key={automation.id}>
                    <TableCell>
                      <div className="font-medium">{automation.name}</div>
                      <div className="text-xs text-muted-foreground">{automation.tasksProcessed.toLocaleString()} tasks processed</div>
                    </TableCell>
                    <TableCell>{getStatusBadge(automation.status)}</TableCell>
                    <TableCell className="text-right">{automation.lastRun}</TableCell>
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
