
'use client';

import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { profile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // This effect runs when loading is finished.
    // If loading is done and there's no admin profile, redirect to login.
    if (!loading && (!profile || profile.role !== 'admin')) {
      router.push('/saasnextdbadmin/login');
    }
  }, [profile, loading, router]);

  // While the auth state is loading, or if the user is not an admin,
  // show a loading screen. This prevents rendering the page content prematurely
  // and avoids flicker or incorrect redirects.
  if (loading || !profile || profile.role !== 'admin') {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-4">Verifying admin access...</p>
      </div>
    );
  }

  // If loading is complete and the user is an admin, render the children.
  return <>{children}</>;
}
