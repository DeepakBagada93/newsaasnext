

'use client';

import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, CheckCircle, XCircle, Clock } from 'lucide-react';

/*
export const metadata: Metadata = {
  title: 'Manage Services | Admin Dashboard',
  description: 'Review and approve custom service requests from clients.',
};
*/

type ServiceStatus = 'Pending' | 'In Progress' | 'Completed' | 'Requires Review';

const serviceRequests = [
    { id: 'SER-003', clientName: 'Alex Johnson', serviceType: 'Custom API Integration', submittedDate: '2024-07-01', status: 'Pending' as ServiceStatus, budget: 3000 },
    { id: 'SER-001', clientName: 'Maria Garcia', serviceType: 'Social Media Campaign', submittedDate: '2024-06-15', status: 'In Progress' as ServiceStatus, budget: 1500 },
    { id: 'SER-004', clientName: 'Chen Wei', serviceType: 'Fintech Dashboard', submittedDate: '2024-07-05', status: 'Requires Review' as ServiceStatus, budget: 12000 },
    { id: 'SER-002', clientName: 'David Smith', serviceType: 'Logo & Branding Refresh', submittedDate: '2024-05-20', status: 'Completed' as ServiceStatus, budget: 2500 },
    { id: 'SER-005', clientName: 'Fatima Al-Sayed', serviceType: 'E-commerce SEO Audit', submittedDate: '2024-07-08', status: 'Pending' as ServiceStatus, budget: 800 },
];

export default function ManageServicesPage() {

    const getStatusBadge = (status: ServiceStatus) => {
    switch (status) {
      case 'Completed':
        return <Badge className="bg-green-500/20 text-green-500">{status}</Badge>;
      case 'In Progress':
        return <Badge className="bg-blue-500/20 text-blue-500">{status}</Badge>;
      case 'Requires Review':
        return <Badge className="bg-yellow-500/20 text-yellow-500">{status}</Badge>;
      case 'Pending':
        return <Badge variant="secondary">{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Manage Services</h1>
      
       <Card>
        <CardHeader>
          <CardTitle>Client Service Requests</CardTitle>
          <CardDescription>Review, approve, and manage all custom service requests.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {serviceRequests.map((req) => (
                <TableRow key={req.id}>
                  <TableCell className="font-medium">{req.id}</TableCell>
                  <TableCell>{req.clientName}</TableCell>
                  <TableCell>{req.serviceType}</TableCell>
                  <TableCell>{req.submittedDate}</TableCell>
                  <TableCell>${req.budget.toLocaleString()}</TableCell>
                  <TableCell>{getStatusBadge(req.status)}</TableCell>
                  <TableCell className="text-right">
                     <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Manage</DropdownMenuLabel>
                        <DropdownMenuItem>
                            <CheckCircle className="mr-2 h-4 w-4" /> Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Clock className="mr-2 h-4 w-4" /> Mark In Progress
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                            <XCircle className="mr-2 h-4 w-4" /> Deny
                        </DropdownMenuItem>
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
                Showing <strong>1-5</strong> of <strong>{serviceRequests.length}</strong> service requests.
            </div>
        </CardFooter>
      </Card>
    </div>
  );
}

