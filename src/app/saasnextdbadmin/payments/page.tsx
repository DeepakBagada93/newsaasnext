
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Manage Payments | Admin Dashboard',
  description: 'View and manage client payment histories and invoices.',
};

export default function ManagePaymentsPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Manage Payments</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Overview</CardTitle>
            <CardDescription>
              This section is under development. It will provide a comprehensive overview of all client payments and invoice statuses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Functionality for filtering by client, viewing transaction details, and generating reports will be available here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
