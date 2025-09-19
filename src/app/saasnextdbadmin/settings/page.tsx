
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Admin Settings | Admin Dashboard',
  description: 'Configure admin portal settings and integrations.',
};

export default function AdminSettingsPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Admin Settings</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Portal Configuration</CardTitle>
            <CardDescription>
              This section is under development. You will be able to manage admin accounts, configure notification settings, and set up integrations here.
            </CardDescription>
          </CardHeader>
           <CardContent>
            <p className="text-sm text-muted-foreground">
              Security settings, API key management, and other administrative configurations will be located in this section.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
