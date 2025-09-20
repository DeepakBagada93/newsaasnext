
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { MoreHorizontal, ArrowLeft, User, Edit, Briefcase, DollarSign, PlusCircle, CheckCircle, Loader2, Circle } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { Profile, Project, ProjectStatus, TimelineEvent } from '@/lib/types';
import { useToast } from "@/hooks/use-toast";


const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
        case 'In Progress':
            return <Badge className="bg-blue-500/20 text-blue-500">{status}</Badge>;
        case 'Completed':
            return <Badge className="bg-green-500/20 text-green-500">{status}</Badge>;
        case 'Planning':
            return <Badge variant="secondary">{status}</Badge>;
        case 'On Hold':
            return <Badge className="bg-yellow-500/20 text-yellow-500">{status}</Badge>;
        case 'Archived':
            return <Badge variant="outline">{status}</Badge>;
        default:
            return <Badge variant="outline">{status}</Badge>;
    }
};

const mockClients: Profile[] = [
    { id: "user_123", full_name: "Alice Johnson", company: "Innovate Inc.", email: "alice@innovate.com", role: "client" },
    { id: "user_456", full_name: "Bob Williams", company: "Solutions Co.", email: "bob@solutions.co", role: "client" },
    { id: "user_789", full_name: "Charlie Brown", company: "Synergy Corp", email: "charlie@synergy.com", role: "client" },
];

const mockProjects: Project[] = [
    { id: "proj_abc", client_id: "user_123", name: "Innovate Inc. Website Redesign", status: "In Progress", progress: 75, deadline: "2024-08-30", total_budget: 20000, paid: 15000, timeline: [{event: "Design", date: "2024-07-01", completed: true}, {event: "Development", date: "2024-08-01", completed: false}], created_at: "2024-06-01" },
    { id: "proj_def", client_id: "user_123", name: "AI Chatbot for Support", status: "Planning", progress: 10, deadline: "2024-09-15", total_budget: 12000, paid: 2000, timeline: [{event: "Scoping", date: "2024-07-10", completed: false}], created_at: "2024-07-01" },
];

export default function ClientDetailPage({ params }: { params: { clientId: string } }) {
    const { toast } = useToast();
    const [client, setClient] = useState<Profile | null>(null);
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [editingProject, setEditingProject] = useState<Project | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            // Simulate fetching data
            setTimeout(() => {
                const foundClient = mockClients.find(c => c.id === params.clientId);
                setClient(foundClient || null);

                const clientProjects = mockProjects.filter(p => p.client_id === params.clientId);
                setProjects(clientProjects);

                if (!foundClient) {
                    toast({ variant: 'destructive', title: 'Error', description: 'Could not find client data.' });
                }

                setLoading(false);
            }, 500);
        };

        fetchData();
    }, [params.clientId, toast]);

    const handleOpenDialog = (project: Project) => {
        setSelectedProject(project);
        setEditingProject(JSON.parse(JSON.stringify(project))); 
    };
    
    const handleDialogClose = () => {
        setSelectedProject(null);
        setEditingProject(null);
    };

    const handleUpdateProject = async () => {
        if (!editingProject) return;

        // Simulate update
        setProjects(prev => prev.map(p => p.id === editingProject.id ? editingProject : p));
        toast({ title: 'Success (Demo)', description: 'Project updated successfully.' });
        
        handleDialogClose();
    };

    const handleTimelineChange = (index: number, field: 'event' | 'date' | 'completed', value: string | boolean) => {
        if (!editingProject) return;
        const newTimeline = [...(editingProject.timeline || [])];
        const eventToUpdate = { ...newTimeline[index] };

        if (field === 'completed' && typeof value === 'boolean') {
             eventToUpdate.completed = value;
        } else if (typeof value === 'string') {
            eventToUpdate[field as 'event' | 'date'] = value;
        }
        newTimeline[index] = eventToUpdate;
        setEditingProject({ ...editingProject, timeline: newTimeline });
    };

    if (loading) {
        return (
            <div className="flex h-full w-full items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        );
    }
    
    if (!client) {
         return (
            <div className="flex flex-col gap-4 p-4 md:p-8 items-start">
                 <Button variant="outline" size="icon" asChild>
                    <Link href="/saasnextdbadmin/clients">
                        <ArrowLeft className="h-4 w-4" />
                        <span className="sr-only">Back to Clients</span>
                    </Link>
                </Button>
                <p className="text-muted-foreground">Client not found.</p>
            </div>
         )
    }

    return (
        <div className="flex flex-col gap-8 p-4 md:p-8">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/saasnextdbadmin/clients">
                        <ArrowLeft className="h-4 w-4" />
                        <span className="sr-only">Back to Clients</span>
                    </Link>
                </Button>
                <h1 className="text-3xl font-bold tracking-tight">Manage Client: {client?.full_name || '...'}</h1>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Client Details Card */}
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User /> Client Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="text-sm">
                                <p className="font-medium text-muted-foreground">Company</p>
                                <p className="text-foreground">{client?.company || 'N/A'}</p>
                            </div>
                             <div className="text-sm">
                                <p className="font-medium text-muted-foreground">Contact Name</p>
                                <p className="text-foreground">{client?.full_name || 'N/A'}</p>
                            </div>
                              <div className="text-sm">
                                <p className="font-medium text-muted-foreground">Email</p>
                                <p className="text-foreground">{client?.email || 'N/A'}</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">
                                <Edit className="mr-2 h-4 w-4" /> Edit Client Details
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                
                {/* Projects/Services Management */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Briefcase /> Active Services & Projects
                            </CardTitle>
                            <CardDescription>
                                An overview of all services and projects for this client. (Demo Data)
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Project Name</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Progress</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {projects.map((project) => (
                                        <TableRow key={project.id}>
                                            <TableCell>
                                                <div className="font-medium">{project.name}</div>
                                                <div className="text-xs text-muted-foreground">
                                                    Deadline: {project.deadline ? new Date(project.deadline).toLocaleDateString() : 'N/A'}
                                                </div>
                                            </TableCell>
                                            <TableCell>{getStatusBadge(project.status)}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Progress value={project.progress} className="w-24" />
                                                    <span className="text-xs text-muted-foreground">{project.progress}%</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Dialog onOpenChange={(open) => !open && handleDialogClose()}>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                                <span className="sr-only">Open menu</span>
                                                                <MoreHorizontal className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DialogTrigger asChild onSelect={() => handleOpenDialog(project)}>
                                                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Edit Project</DropdownMenuItem>
                                                            </DialogTrigger>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem className="text-destructive">Archive Project</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                    
                                                    {selectedProject && editingProject && (
                                                    <DialogContent className="sm:max-w-md">
                                                         <DialogHeader>
                                                            <DialogTitle>Manage: {selectedProject.name}</DialogTitle>
                                                            <DialogDescription>
                                                                Update project details, status, and timeline below.
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        <div className="grid gap-4 py-4">
                                                             <div className="grid grid-cols-4 items-center gap-4">
                                                                <Label htmlFor="name" className="text-right">Project Name</Label>
                                                                <Input id="name" value={editingProject.name} onChange={(e) => setEditingProject({...editingProject, name: e.target.value})} className="col-span-3" />
                                                            </div>
                                                            <div className="grid grid-cols-4 items-center gap-4">
                                                                <Label htmlFor="status" className="text-right">Status</Label>
                                                                <Select 
                                                                    value={editingProject.status} 
                                                                    onValueChange={(value: ProjectStatus) => setEditingProject({...editingProject, status: value})}
                                                                >
                                                                    <SelectTrigger className="col-span-3">
                                                                        <SelectValue placeholder="Select status" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectItem value="Planning">Planning</SelectItem>
                                                                        <SelectItem value="In Progress">In Progress</SelectItem>
                                                                        <SelectItem value="On Hold">On Hold</SelectItem>
                                                                        <SelectItem value="Completed">Completed</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                            </div>
                                                            <div className="grid grid-cols-1 items-center gap-2">
                                                                <Label>Timeline</Label>
                                                                <div className="space-y-2">
                                                                    {(editingProject.timeline || []).map((item, index) => (
                                                                        <div key={index} className="flex items-center gap-2 text-sm">
                                                                            <div onClick={() => handleTimelineChange(index, 'completed', !item.completed)} className="cursor-pointer">
                                                                                 {item.completed ? <CheckCircle className="h-5 w-5 text-green-500"/> : <Circle className="h-5 w-5 border-2 border-muted-foreground rounded-full"/>}
                                                                            </div>
                                                                            <Input value={item.event} onChange={(e) => handleTimelineChange(index, 'event', e.target.value)} className="h-8"/>
                                                                            <Input type="date" value={item.date} onChange={(e) => handleTimelineChange(index, 'date', e.target.value)} className="h-8 w-36"/>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <DialogFooter>
                                                            <DialogClose asChild>
                                                                <Button type="button" variant="secondary">Close</Button>
                                                            </DialogClose>
                                                            <Button type="submit" onClick={handleUpdateProject}>Save changes</Button>
                                                        </DialogFooter>
                                                    </DialogContent>
                                                    )}
                                                </Dialog>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                         <CardFooter>
                            <Button>
                                <PlusCircle className="mr-2 h-4 w-4" /> Add New Project
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><DollarSign />Financial Overview</CardTitle>
                        <CardDescription>Summary of project budgets and payments.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                             <TableHeader>
                                <TableRow>
                                    <TableHead>Project</TableHead>
                                    <TableHead>Total Budget</TableHead>
                                    <TableHead>Amount Paid</TableHead>
                                    <TableHead>Outstanding</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {projects.map(p => (
                                    <TableRow key={p.id}>
                                        <TableCell className="font-medium">{p.name}</TableCell>
                                        <TableCell>${(p.total_budget || 0).toLocaleString()}</TableCell>
                                        <TableCell>${(p.paid || 0).toLocaleString()}</TableCell>
                                        <TableCell className={(p.total_budget || 0) - (p.paid || 0) > 0 ? "text-destructive" : ""}>
                                            ${((p.total_budget || 0) - (p.paid || 0)).toLocaleString()}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="outline" size="sm">Send Invoice</Button>
                                        </TableCell>
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
