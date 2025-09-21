
'use client';

import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AdminDashboardPage from './(admin)/page';

export default function AdminPage() {
  const { profile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!profile || profile.role !== 'admin')) {
      router.push('/saasnextdbadmin/login');
    }
  }, [profile, loading, router]);

  if (loading || !profile || profile.role !== 'admin') {
    // This will be shown briefly while redirecting or loading
    return null;
  }

  // If the user is an admin, show the dashboard.
  return <AdminDashboardPage />;
}
