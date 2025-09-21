
'use client';

import { useAuth } from '@/contexts/auth-context';

// This is the root layout for the /saasnextdbadmin section.
// It uses the AuthProvider to make authentication state available to all child routes,
// including the login page and the protected admin area.
export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // We don't render the sidebar or any UI here.
  // The logic for what to display is handled by the child layouts/pages:
  // 1. `/saasnextdbadmin/login/page.tsx` will render the login form.
  // 2. `/saasnextdbadmin/(admin)/layout.tsx` will render the protected admin UI (sidebar, header, etc.).
  return <>{children}</>;
}
