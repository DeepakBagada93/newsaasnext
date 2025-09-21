
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SaaSnext Admin',
  description: 'Admin portal for SaaSnext.',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout applies to the login page as well, so it's kept minimal.
  // The protected layout is inside the (admin) group.
  return <>{children}</>;
}
