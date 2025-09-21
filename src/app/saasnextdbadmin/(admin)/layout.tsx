
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
    if (!loading) {
      if (!profile || profile.role !== 'admin') {
        router.push('/saasnextdbadmin/login');
      }
    }
  }, [profile, loading, router]);

  if (loading || !profile || profile.role !== 'admin') {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-4">Verifying admin access...</p>
      </div>
    );
  }

  return <>{children}</>;
}
