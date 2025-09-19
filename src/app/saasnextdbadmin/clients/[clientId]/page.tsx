
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { MoreHorizontal, ArrowLeft, User, Edit, MessageSquare, Briefcase, DollarSign, PlusCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';


type ProjectStatus = "In Progress" | "Completed" | "Planning" | "On Hold" | "Archived";
type Project = {
    id: string;
    name: string;
    status: ProjectStatus;
    progress: number;
    deadline: string;
    totalBudget: number;
    paid: number;
    timeline: { event: string; date: string; completed: boolean }[];
};

// Mock data - in a real app, this would be fetched based on the client ID from the URL
const clientData = {
    id: 'C001',
    name: 'Alex Johnson',
    company: 'Innovate Inc.',
    email: 'alex.j@example.com',
    joinedDate: '2024-01-15'
};

const initialClientProjects: Project[] = [
    {
        id: 'PROJ-001',
        name: 'E-commerce Platform Launch',
        status: 'In Progress',
        progress: 65,
        deadline: '2024-08-15',
        totalBudget: 15000,
        paid: 7500,
        timeline: [
            { event: "Project Kick-off", date: "2024-05-01", completed: true},
            { event: "Design Phase", date: "2024-05-15", completed: true},
            { event: "Development Start", date: "2024-06-01", completed: true},
            { event: "QA Testing", date: "2024-07-20", completed: false},
            { event: "Launch", date: "2024-08-15", completed: false},
        ]
    },
    {
        id: 'PROJ-002',
        name: 'AI Chatbot Integration',
        status: 'Completed',
        progress: 100,
        deadline: '2024-06-20',
        totalBudget: 8000,
        paid: 8000,
        timeline: [
            { event: "Initial Scoping", date: "2024-05-10", completed: true},
            { event: "Model Training", date: "2024-05-25", completed: true},
            { event: "Integration", date: "2024-06-10", completed: true},
            { event: "Final Review", date: "2024-06-20", completed: true},
        ]
    },
    {
        id: 'PROJ-003',
        name: 'Lead Generation Campaign Q3',
        status: 'Planning',
        progress: 10,
        deadline: '2024-09-30',
        totalBudget: 5000,
        paid: 0,
        timeline: [
            { event: "Strategy Finalized", date: "2024-07-15", completed: false},
            { event: "Creatives Ready", date: "2024-07-30", completed: false},
            { event: "Campaign Launch", date: "2024-08-01", completed: false},
        ]
    }
];

const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
        case 'in progress':
            return <Badge className="bg-blue-500/20 text-blue-500">{status}</Badge>;
        case 'completed':
            return <Badge className="bg-green-500/20 text-green-500">{status}</Badge>;
        case 'planning':
            return <Badge variant="secondary">{status}</Badge>;
        case 'on hold':
            return <Badge className="bg-yellow-500/20 text-yellow-500">{status}</Badge>;
        default:
            return <Badge variant="outline">{status}</Badge>;
    }
};

export default function ClientDetailPage({ params }: { params: { clientId: string } }) {
    const [clientProjects, setClientProjects] = useState<Project[]>(initialClientProjects);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleUpdateProject = (updatedProject: Project) => {
        setClientProjects(prev => prev.map(p => p.id === updatedProject.id ? updatedProject : p));
        setSelectedProject(null); // Close dialog
    };
    
    return (
        <div className="flex flex-col gap-8 p-4 md:p-8">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/saasnextdbadmin/clients">
                        <ArrowLeft className="h-4 w-4" />
                        <span className="sr-only">Back to Clients</span>
                    </Link>
                </Button>
                <h1 className="text-3xl font-bold tracking-tight">Manage Client: {clientData.name}</h1>
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
                                <p className="text-foreground">{clientData.company}</p>
                            </div>
                             <div className="text-sm">
                                <p className="font-medium text-muted-foreground">Contact Name</p>
                                <p className="text-foreground">{clientData.name}</p>
                            </div>
                             <div className="text-sm">
                                <p className="font-medium text-muted-foreground">Email</p>
                                <p className="text-foreground">{clientData.email}</p>
                            </div>
                             <div className="text-sm">
                                <p className="font-medium text-muted-foreground">Client Since</p>
                                <p className="text-foreground">{clientData.joinedDate}</p>
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
                                An overview of all services and projects for this client.
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
                                    {clientProjects.map((project) => (
                                        <TableRow key={project.id}>
                                            <TableCell>
                                                <div className="font-medium">{project.name}</div>
                                                <div className="text-xs text-muted-foreground">
                                                    Deadline: {project.deadline}
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
                                                <Dialog onOpenChange={(open) => !open && setSelectedProject(null)}>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                                <span className="sr-only">Open menu</span>
                                                                <MoreHorizontal className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DialogTrigger asChild onSelect={() => setSelectedProject(project)}>
                                                                <DropdownMenuItem>Edit Project</DropdownMenuItem>
                                                            </DialogTrigger>
                                                            <DialogTrigger asChild onSelect={() => setSelectedProject(project)}>
                                                                <DropdownMenuItem>Update Status</DropdownMenuItem>
                                                            </DialogTrigger>
                                                            <DialogTrigger asChild onSelect={() => setSelectedProject(project)}>
                                                                <DropdownMenuItem>View Timeline</DropdownMenuItem>
                                                            </DialogTrigger>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem className="text-destructive">Archive Project</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                    
                                                    {selectedProject && (
                                                    <DialogContent className="sm:max-w-[425px]">
                                                         <DialogHeader>
                                                            <DialogTitle>Manage: {selectedProject.name}</DialogTitle>
                                                            <DialogDescription>
                                                                Update project details and status below.
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        <div className="grid gap-4 py-4">
                                                             <div className="grid grid-cols-4 items-center gap-4">
                                                                <Label htmlFor="name" className="text-right">Project Name</Label>
                                                                <Input id="name" defaultValue={selectedProject.name} className="col-span-3" />
                                                            </div>
                                                            <div className="grid grid-cols-4 items-center gap-4">
                                                                <Label htmlFor="status" className="text-right">Status</Label>
                                                                <Select 
                                                                    defaultValue={selectedProject.status} 
                                                                    onValueChange={(value: ProjectStatus) => handleUpdateProject({...selectedProject, status: value})}
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
                                                            <div className="grid grid-cols-4 items-center gap-4">
                                                                <Label className="text-right">Timeline</Label>
                                                                <div className="col-span-3 space-y-2">
                                                                    {selectedProject.timeline.map(item => (
                                                                        <div key={item.event} className="flex items-center text-sm text-muted-foreground">
                                                                            {item.completed ? <CheckCircle className="h-4 w-4 mr-2 text-green-500"/> : <div className="h-4 w-4 mr-2"/>}
                                                                            <span>{item.event} - {item.date}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <DialogFooter>
                                                            <DialogClose asChild>
                                                                <Button type="button" variant="secondary">Close</Button>
                                                            </DialogClose>
                                                            <DialogClose asChild>
                                                                <Button type="submit">Save changes</Button>
                                                            </DialogClose>
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
                                {clientProjects.map(p => (
                                    <TableRow key={p.id}>
                                        <TableCell className="font-medium">{p.name}</TableCell>
                                        <TableCell>${p.totalBudget.toLocaleString()}</TableCell>
                                        <TableCell>${p.paid.toLocaleString()}</TableCell>
                                        <TableCell className={p.totalBudget - p.paid > 0 ? "text-destructive" : ""}>
                                            ${(p.totalBudget - p.paid).toLocaleString()}
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
