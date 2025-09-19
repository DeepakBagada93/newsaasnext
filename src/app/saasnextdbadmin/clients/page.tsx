
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Manage Clients | Admin Dashboard',
  description: 'Create, view, and manage client accounts.',
};

export default function ManageClientsPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Manage Clients</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Client Management</CardTitle>
            <CardDescription>
              This section is under development. Soon you will be able to create new client accounts, edit existing user details, and manage access permissions.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-muted-foreground">
              Functionality to add, edit, and delete client profiles will be implemented here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
