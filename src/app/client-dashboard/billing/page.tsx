
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Billing | Client Dashboard',
  description: 'Manage your billing and invoices with SaaSnext.',
};

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Invoices & Payments</CardTitle>
            <CardDescription>View your billing history and manage payment methods.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This section is under development. Soon you will be able to download invoices, view payment history, and update your payment details here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
