
'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Loader2 } from 'lucide-react';

/*
export const metadata: Metadata = {
  title: 'Custom Services | Client Dashboard',
  description: 'Request and manage custom services with SaaSnext.',
};
*/

type ServiceStatus = 'Pending' | 'In Progress' | 'Completed' | 'On Hold';

interface CustomServiceRequest {
  id: string;
  serviceType: string;
  submittedDate: string;
  status: ServiceStatus;
  budget: number;
}

const initialRequests: CustomServiceRequest[] = [
    { id: 'SER-001', serviceType: 'Social Media Campaign', submittedDate: '2024-06-15', status: 'In Progress', budget: 1500 },
    { id: 'SER-002', serviceType: 'Logo & Branding Refresh', submittedDate: '2024-05-20', status: 'Completed', budget: 2500 },
    { id: 'SER-003', serviceType: 'Custom API Integration', submittedDate: '2024-07-01', status: 'Pending', budget: 3000 },
];

export default function CustomServicesPage() {
  const [requests, setRequests] = useState(initialRequests);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getStatusBadge = (status: ServiceStatus) => {
    switch (status) {
      case 'Completed':
        return <Badge className="bg-green-500/20 text-green-500">{status}</Badge>;
      case 'In Progress':
        return <Badge className="bg-blue-500/20 text-blue-500">{status}</Badge>;
      case 'On Hold':
        return <Badge className="bg-yellow-500/20 text-yellow-500">{status}</Badge>;
      case 'Pending':
        return <Badge variant="secondary">{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  const handleRequestSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        // Here you would typically get the form data and create a new request object.
        // For this demo, we'll add a static new request.
        const newRequest = {
            id: `SER-00${requests.length + 1}`,
            serviceType: 'New Service Request',
            submittedDate: new Date().toISOString().split('T')[0],
            status: 'Pending' as ServiceStatus,
            budget: 5000,
        };
        setRequests(prev => [newRequest, ...prev]);
        setIsSubmitting(false);
        // You would also likely reset the form here
        (event.target as HTMLFormElement).reset();
    }, 1500);
  };


  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Custom Services</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        
        {/* Form to request a new service */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Request a New Service</CardTitle>
              <CardDescription>Need something specific? Fill out the form below.</CardDescription>
            </CardHeader>
            <form onSubmit={handleRequestSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type</Label>
                  <Select name="service-type">
                    <SelectTrigger id="service-type" disabled={isSubmitting}>
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="social-media">Social Media Marketing</SelectItem>
                      <SelectItem value="lead-generation">Lead Generation</SelectItem>
                      <SelectItem value="logo-design">Logo & Branding</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-details">Project Details</Label>
                  <Textarea id="project-details" placeholder="Describe your requirements..." rows={5} disabled={isSubmitting}/>
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget ($)</Label>
                  <Input id="budget" type="number" placeholder="e.g., 2000" disabled={isSubmitting} />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Submit Request
                      </>
                    )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>

        {/* Table of existing custom requests */}
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Your Custom Service Requests</CardTitle>
                    <CardDescription>An overview of all your custom project inquiries.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>Request ID</TableHead>
                            <TableHead>Service</TableHead>
                            <TableHead>Submitted</TableHead>
                            <TableHead>Budget</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {requests.map((req) => (
                            <TableRow key={req.id}>
                                <TableCell className="font-medium">{req.id}</TableCell>
                                <TableCell>{req.serviceType}</TableCell>
                                <TableCell>{req.submittedDate}</TableCell>
                                <TableCell>${req.budget.toLocaleString()}</TableCell>
                                <TableCell className="text-right">{getStatusBadge(req.status)}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
