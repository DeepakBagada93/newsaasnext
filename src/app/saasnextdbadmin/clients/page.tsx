
'use client';

import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import Link from 'next/link';

/*
export const metadata: Metadata = {
  title: 'Manage Clients | Admin Dashboard',
  description: 'Create, view, and manage client accounts.',
};
*/

const clients = [
  { id: 'C001', name: 'Alex Johnson', company: 'Innovate Inc.', email: 'alex.j@example.com', status: 'Active', joinedDate: '2024-01-15' },
  { id: 'C002', name: 'Maria Garcia', company: 'Solutions Co.', email: 'maria.g@example.com', status: 'Active', joinedDate: '2024-02-20' },
  { id: 'C003', name: 'Chen Wei', company: 'TechForward', email: 'chen.w@example.com', status: 'Inactive', joinedDate: '2024-03-10' },
  { id: 'C004', name: 'David Smith', company: 'BuildRight', email: 'david.s@example.com', status: 'Active', joinedDate: '2024-04-05' },
  { id: 'C005', name: 'Fatima Al-Sayed', company: 'Creative Minds', email: 'fatima.a@example.com', status: 'Pending', joinedDate: '2024-05-21' },
];

export default function ManageClientsPage() {
  
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return <Badge className="bg-green-500/20 text-green-500">{status}</Badge>;
      case 'inactive':
        return <Badge variant="secondary">{status}</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500/20 text-yellow-500">{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Manage Clients</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Client
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Client List</CardTitle>
          <CardDescription>An overview of all client accounts.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="whitespace-nowrap">Joined Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.id}</TableCell>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.company}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{getStatusBadge(client.status)}</TableCell>
                  <TableCell>{client.joinedDate}</TableCell>
                  <TableCell className="text-right">
                     <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                           <Link href={`/saasnextdbadmin/clients/${client.id}`}>Edit Client</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/saasnextdbadmin/clients/${client.id}`}>View Details</Link>
                        </DropdownMenuItem>
                         <DropdownMenuItem asChild>
                           <Link href={`/saasnextdbadmin/clients/${client.id}`}>Manage Services</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
            <div className="text-xs text-muted-foreground">
                Showing <strong>1-5</strong> of <strong>{clients.length}</strong> clients.
            </div>
        </CardFooter>
      </Card>
    </div>
  );
}
