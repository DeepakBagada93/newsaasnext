
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Manage Services | Admin Dashboard',
  description: 'Review and approve custom service requests from clients.',
};

export default function ManageServicesPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Manage Services</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Service Request Management</CardTitle>
            <CardDescription>
              This section is under development. Here you will be able to view all custom service requests submitted by clients.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              You will have options to review project details, approve, deny, or mark requests as 'in progress'.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
