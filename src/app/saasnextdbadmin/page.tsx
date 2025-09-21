
'use client';

import AdminDashboardPage from './(admin)/page';

// This component now simply renders the dashboard page.
// The protection logic is handled by the layout in `(admin)/layout.tsx`.
export default function AdminPage() {
  return <AdminDashboardPage />;
}
