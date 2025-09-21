
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Manage Services | Admin Dashboard',
  description: 'View and manage all services.',
};

const mockServices = [
    { id: 'SER-001', name: 'Web Development Retainer', client: 'Innovate Corp', status: 'Active', price: 5000 },
    { id: 'SER-002', name: 'AI Chatbot Implementation', client: 'Sunrise Ltd.', status: 'Active', price: 2500 },
    { id: 'SER-003', name: 'Lead Generation Campaign', client: 'Peak Performance', status: 'Completed', price: 3000 },
    { id: 'SER-004', name: 'Branding Package', client: 'Digital Future', status: 'Active', price: 1500 },
    { id: 'SER-005', name: 'E-commerce Platform Build', client: 'Market Movers', status: 'In Progress', price: 10000 },
];

export default function AdminServicesPage() {

    const getStatusBadge = (status: string) => {
        switch (status.toLowerCase()) {
          case 'active':
            return <Badge className="bg-green-500/20 text-green-500">{status}</Badge>;
          case 'in progress':
            return <Badge className="bg-blue-500/20 text-blue-500">{status}</Badge>;
           case 'completed':
            return <Badge variant="secondary">{status}</Badge>;
          default:
            return <Badge variant="outline">{status}</Badge>;
        }
    };

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight">Services</h1>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add New Service
            </Button>
        </div>
      
        <Card>
            <CardHeader>
                <CardTitle>Service Contracts</CardTitle>
                <CardDescription>An overview of all active and past services.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Service Name</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead>Price (Monthly)</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockServices.map((service) => (
                        <TableRow key={service.id}>
                            <TableCell className="font-medium">{service.name}</TableCell>
                            <TableCell>{service.client}</TableCell>
                            <TableCell>${service.price.toLocaleString()}</TableCell>
                            <TableCell className="text-right">{getStatusBadge(service.status)}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}
