
import type { Metadata } from 'next';
import AdminDashboardPage from './(admin)/page';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Manage clients, services, and payments.',
};

export default function AdminPage() {
  return <AdminDashboardPage />;
}
