
'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, PlusCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import { signup } from '@/app/auth/actions';
import { createClient } from '@/lib/supabase/client';
import type { Profile } from '@/lib/types';


/*
export const metadata: Metadata = {
  title: 'Manage Clients | Admin Dashboard',
  description: 'Create, view, and manage client accounts.',
};
*/

const newClientSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  company: z.string().min(1, 'Company is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

type NewClientFormValues = z.infer<typeof newClientSchema>;


export default function ManageClientsPage() {
  const [clients, setClients] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const supabase = createClient();

  useEffect(() => {
    const fetchClients = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select(`
          id,
          name,
          company
        `);
      
      if (error) {
        console.error("Error fetching clients:", error);
        toast({
          variant: "destructive",
          title: "Error fetching clients",
          description: error.message,
        });
      } else {
        setClients(data as Profile[]);
      }
      setLoading(false);
    };

    fetchClients();
  }, [supabase, toast]);


  const form = useForm<NewClientFormValues>({
    resolver: zodResolver(newClientSchema),
    defaultValues: { name: '', company: '', email: '', password: '' },
  });
  
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

  const handleCreateClient = async (data: NewClientFormValues) => {
    setIsSubmitting(true);
    const result = await signup(data);
    setIsSubmitting(false);

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Failed to create client",
        description: result.error,
      });
    } else {
      toast({
        title: "Client created",
        description: "The new client account has been created successfully.",
      });
      // In a real app, you'd fetch and update the client list here
      // For now, we can manually add to the list to see the update
      const newClient = { id: '', name: data.name, company: data.company };
      setClients(prev => [...prev, newClient]);
      setIsDialogOpen(false);
      form.reset();
    }
  };


  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Manage Clients</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Client
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Client</DialogTitle>
              <DialogDescription>
                Enter the details for the new client account.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleCreateClient)} className="grid gap-4 py-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-4 items-center gap-4">
                      <FormLabel className="text-right">Name</FormLabel>
                      <FormControl className="col-span-3">
                        <Input placeholder="Alex Johnson" {...field} disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage className="col-span-4 pl-[25%]" />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-4 items-center gap-4">
                      <FormLabel className="text-right">Company</FormLabel>
                      <FormControl className="col-span-3">
                        <Input placeholder="Innovate Inc." {...field} disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage className="col-span-4 pl-[25%]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-4 items-center gap-4">
                      <FormLabel className="text-right">Email</FormLabel>
                      <FormControl className="col-span-3">
                        <Input type="email" placeholder="alex@example.com" {...field} disabled={isSubmitting} />
                      </FormControl>
                       <FormMessage className="col-span-4 pl-[25%]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-4 items-center gap-4">
                      <FormLabel className="text-right">Password</FormLabel>
                      <FormControl className="col-span-3">
                        <Input type="password" placeholder="••••••••" {...field} disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage className="col-span-4 pl-[25%]" />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline" type="button">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Save Client
                    </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Client List</CardTitle>
          <CardDescription>An overview of all client accounts.</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
             <div className="flex justify-center items-center h-40">
                <Loader2 className="h-8 w-8 animate-spin" />
             </div>
          ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.company}</TableCell>
                  <TableCell>{getStatusBadge('Active')}</TableCell>
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
                           <Link href={`/saasnextdbadmin/clients/${client.id}`}>View Details</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          )}
        </CardContent>
        <CardFooter>
            <div className="text-xs text-muted-foreground">
                Showing <strong>{clients.length}</strong> of <strong>{clients.length}</strong> clients.
            </div>
        </CardFooter>
      </Card>
    </div>
  );
}
