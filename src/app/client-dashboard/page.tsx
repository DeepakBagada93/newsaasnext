
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LayoutDashboard, LogIn } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Client Dashboard',
  description: 'Client dashboard for SaaSnext services.',
};

export default function ClientDashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center p-4">
      <LayoutDashboard className="h-16 w-16 text-primary mb-4" />
      <h1 className="text-4xl font-bold mb-2">Client Dashboard</h1>
      <p className="text-lg text-muted-foreground mb-6 max-w-md">
        This area is under construction. Soon, you'll be able to manage all your services right here.
      </p>
      <Button asChild size="lg">
        <Link href="/">
           Return to Homepage
        </Link>
      </Button>
    </div>
  );
}
