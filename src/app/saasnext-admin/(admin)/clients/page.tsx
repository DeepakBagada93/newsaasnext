
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Manage Clients | Admin Dashboard',
  description: 'View and manage all clients.',
};

const mockClients = [
    { id: 'cli-001', name: 'Innovate Corp', email: 'contact@innovatecorp.com', plan: 'Enterprise', status: 'Active' },
    { id: 'cli-002', name: 'Sunrise Ltd.', email: 'hello@sunriseltd.com', plan: 'Pro', status: 'Active' },
    { id: 'cli-003', name: 'Peak Performance', email: 'support@peak.io', plan: 'Pro', status: 'On Hold' },
    { id: 'cli-004', name: 'Digital Future', email: 'admin@digitalfuture.net', plan: 'Basic', status: 'Active' },
    { id: 'cli-005', name: 'Market Movers', email: 'billing@marketmovers.com', plan: 'Enterprise', status: 'Cancelled' },
];

export default function AdminClientsPage() {

    const getStatusBadge = (status: string) => {
        switch (status.toLowerCase()) {
          case 'active':
            return <Badge className="bg-green-500/20 text-green-500">{status}</Badge>;
          case 'on hold':
            return <Badge className="bg-yellow-500/20 text-yellow-500">{status}</Badge>;
          case 'cancelled':
            return <Badge variant="destructive">{status}</Badge>;
          default:
            return <Badge variant="outline">{status}</Badge>;
        }
    };

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
            <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add New Client
            </Button>
        </div>
      
        <Card>
            <CardHeader>
                <CardTitle>Client Overview</CardTitle>
                <CardDescription>A list of all clients in the system.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Client Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Subscription Plan</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockClients.map((client) => (
                        <TableRow key={client.id}>
                            <TableCell className="font-medium">{client.name}</TableCell>
                            <TableCell>{client.email}</TableCell>
                            <TableCell>{client.plan}</TableCell>
                            <TableCell className="text-right">{getStatusBadge(client.status)}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}
