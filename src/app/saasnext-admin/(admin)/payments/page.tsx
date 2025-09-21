
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Manage Payments | Admin Dashboard',
  description: 'View and manage all payments.',
};

const mockPayments = [
    { id: 'PAY-001', client: 'Innovate Corp', amount: 5000, date: '2024-07-10', status: 'Completed' },
    { id: 'PAY-002', client: 'Sunrise Ltd.', amount: 2500, date: '2024-07-08', status: 'Completed' },
    { id: 'PAY-003', client: 'Peak Performance', amount: 2500, date: '2024-07-05', status: 'Pending' },
    { id: 'PAY-004', client: 'Digital Future', amount: 1000, date: '2024-07-01', status: 'Completed' },
    { id: 'PAY-005', client: 'Market Movers', amount: 5000, date: '2024-06-28', status: 'Failed' },
];

export default function AdminPaymentsPage() {

    const getStatusBadge = (status: string) => {
        switch (status.toLowerCase()) {
          case 'completed':
            return <Badge className="bg-green-500/20 text-green-500">{status}</Badge>;
          case 'pending':
            return <Badge className="bg-yellow-500/20 text-yellow-500">{status}</Badge>;
          case 'failed':
            return <Badge variant="destructive">{status}</Badge>;
          default:
            return <Badge variant="outline">{status}</Badge>;
        }
    };

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
      
        <Card>
            <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>A log of all recent transactions.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Transaction ID</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockPayments.map((payment) => (
                        <TableRow key={payment.id}>
                            <TableCell className="font-medium">{payment.id}</TableCell>
                            <TableCell>{payment.client}</TableCell>
                            <TableCell>{payment.date}</TableCell>
                            <TableCell>${payment.amount.toLocaleString()}</TableCell>
                            <TableCell className="text-right">{getStatusBadge(payment.status)}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}
