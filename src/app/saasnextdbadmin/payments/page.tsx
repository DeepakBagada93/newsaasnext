
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

/*
export const metadata: Metadata = {
  title: 'Manage Payments | Admin Dashboard',
  description: 'View and manage client payment histories and invoices.',
};
*/

const payments = [
  { invoiceId: 'INV-2024-005', clientName: 'Alex Johnson', amount: 2500, status: 'Paid', date: '2024-07-05' },
  { invoiceId: 'INV-2024-006', clientName: 'Maria Garcia', amount: 1500, status: 'Pending', date: '2024-07-15' },
  { invoiceId: 'INV-2024-007', clientName: 'Chen Wei', amount: 3000, status: 'Overdue', date: '2024-06-30' },
  { invoiceId: 'INV-2024-004', clientName: 'David Smith', amount: 2500, status: 'Paid', date: '2024-06-15' },
  { invoiceId: 'INV-2024-008', clientName: 'Fatima Al-Sayed', amount: 500, status: 'Paid', date: '2024-07-09' },
];

export default function ManagePaymentsPage() {
  
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return <Badge className="bg-green-500/20 text-green-500 flex items-center gap-1"><CheckCircle className="h-3 w-3" />{status}</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500/20 text-yellow-500 flex items-center gap-1"><Clock className="h-3 w-3" />{status}</Badge>;
      case 'overdue':
        return <Badge variant="destructive" className="flex items-center gap-1"><AlertTriangle className="h-3 w-3" />{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Manage Payments</h1>
      
       <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>An overview of all client transactions and invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice #</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.invoiceId}>
                  <TableCell className="font-medium">{payment.invoiceId}</TableCell>
                  <TableCell>{payment.clientName}</TableCell>
                  <TableCell>${payment.amount.toLocaleString()}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>{getStatusBadge(payment.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-3.5 w-3.5" />
                      Invoice
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
         <CardFooter>
            <div className="text-xs text-muted-foreground">
                Showing <strong>1-5</strong> of <strong>{payments.length}</strong> payments.
            </div>
        </CardFooter>
      </Card>
    </div>
  );
}
