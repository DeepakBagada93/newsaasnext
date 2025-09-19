
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CreditCard, DollarSign, CalendarClock, Download, Edit } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Billing | Client Dashboard',
  description: 'Manage your billing and invoices with SaaSnext.',
};

const invoices = [
    { id: 'INV-2024-005', dueDate: '2024-07-15', amount: 2500, status: 'Paid' },
    { id: 'INV-2024-004', dueDate: '2024-06-15', amount: 1500, status: 'Paid' },
    { id: 'INV-2024-003', dueDate: '2024-05-15', amount: 3000, status: 'Paid' },
    { id: 'INV-2024-002', dueDate: '2024-04-15', amount: 2500, status: 'Paid' },
];

export default function BillingPage() {

    const getStatusBadge = (status: string) => {
        switch (status.toLowerCase()) {
          case 'paid':
            return <Badge className="bg-green-500/20 text-green-500">{status}</Badge>;
          case 'due':
            return <Badge className="bg-yellow-500/20 text-yellow-500">{status}</Badge>;
          case 'overdue':
            return <Badge variant="destructive">{status}</Badge>;
          default:
            return <Badge variant="outline">{status}</Badge>;
        }
    };

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0.00</div>
            <p className="text-xs text-muted-foreground">All invoices settled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Payment Method</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-mono tracking-wider">Visa **** 4242</div>
            <p className="text-xs text-muted-foreground">Expires 12/26</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Due Date</CardTitle>
            <CalendarClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">August 15, 2024</div>
            <p className="text-xs text-muted-foreground">For monthly retainer</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Invoice History</CardTitle>
                    <CardDescription>An overview of all your past invoices.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>Invoice #</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell className="font-medium">{invoice.id}</TableCell>
                                <TableCell>{invoice.dueDate}</TableCell>
                                <TableCell>${invoice.amount.toLocaleString()}</TableCell>
                                <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="outline" size="sm">
                                        <Download className="mr-2 h-3.5 w-3.5" />
                                        PDF
                                    </Button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-1">
             <Card>
                <CardHeader>
                    <CardTitle>Payment Settings</CardTitle>
                    <CardDescription>Manage your payment preferences.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mb-4 rounded-lg border bg-muted/50 p-4">
                        <h4 className="font-semibold text-sm text-foreground">Active Card</h4>
                        <p className="text-sm text-muted-foreground font-mono mt-1">Visa ending in 4242</p>
                        <p className="text-xs text-muted-foreground mt-1">Expires 12/2026</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        To update your billing information, please use the secure link below or contact support.
                    </p>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                     <Button className="w-full">
                        <Edit className="mr-2 h-4 w-4" /> Update Payment Method
                     </Button>
                     <Button variant="outline" className="w-full">
                        View Payment History
                     </Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}
