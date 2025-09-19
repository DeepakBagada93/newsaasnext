
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Settings | Client Dashboard',
  description: 'Manage your account settings with SaaSnext.',
};

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Manage your personal and business information.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This section is under development. Soon you will be able to update your profile, change your password, and manage notification preferences here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
