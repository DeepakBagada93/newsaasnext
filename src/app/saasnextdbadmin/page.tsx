
// This file is the entry point for the `/saasnextdbadmin` route.
// It is protected by the `(admin)/layout.tsx` which will handle redirection.
// This component simply renders the main dashboard page content.
import AdminDashboardPage from './(admin)/page';

export default function AdminPage() {
  return <AdminDashboardPage />;
}
