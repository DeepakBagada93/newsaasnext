
'use client';

import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar';
import Logo from '@/components/icons/logo';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  CreditCard,
  Settings,
  Shield,
  Home,
  User,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const menuItems = [
  { href: '/saasnextdbadmin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/saasnextdbadmin/clients', label: 'Clients', icon: Users },
  { href: '/saasnextdbadmin/services', label: 'Services', icon: Briefcase },
  { href: '/saasnextdbadmin/payments', label: 'Payments', icon: CreditCard },
  { href: '/saasnextdbadmin/settings', label: 'Settings', icon: Settings },
];

export default function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { profile, loading, logOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Wait until the initial loading is complete before checking for a profile.
    if (!loading && (!profile || profile.role !== 'admin')) {
      // If not loading and not an admin, redirect to the login page.
      router.push('/saasnextdbadmin/login');
    }
  }, [profile, loading, router]);

  // While the auth state is loading, or if the user is not an admin,
  // show a loading screen. This prevents rendering the page content prematurely.
  if (loading || !profile || profile.role !== 'admin') {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-4">Verifying admin access...</p>
      </div>
    );
  }

  // If loading is complete and the user is an admin, render the full admin layout.
  return (
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center justify-between p-2">
              <Logo />
              <SidebarTrigger className="md:hidden" />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex items-center gap-2 rounded-md bg-destructive/10 px-2 py-1.5 text-xs font-medium text-destructive">
                  <Shield className="size-3" /> Admin Portal
                </div>
              </SidebarMenuItem>
              {menuItems.map((item) => {
                const isActive = item.href === '/saasnextdbadmin' 
                  ? pathname === item.href 
                  : pathname.startsWith(item.href);

                return (
                  <SidebarMenuItem key={item.label}>
                    <Link href={item.href} legacyBehavior passHref>
                      <SidebarMenuButton
                        isActive={isActive}
                        tooltip={item.label}
                      >
                        <item.icon />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <SidebarMenuButton tooltip="Back to Homepage">
                      <Home />
                      <span>Homepage</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                 {profile && (
                  <>
                    <SidebarMenuItem>
                      <div className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-muted-foreground">
                        <User className="size-4" />
                        <span className="truncate">{profile.full_name || 'Admin'}</span>
                      </div>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={logOut} tooltip="Sign Out">
                            <LogOut />
                            <span>Sign Out</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                  </>
                )}
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px] flex-shrink-0">
              <SidebarTrigger />
              <div className="flex-1">
                  <h1 className="text-lg font-semibold">Admin Panel</h1>
              </div>
              <div className="flex items-center gap-4">
                  <Button asChild size="sm">
                      <Link href="/contact">Get Help</Link>
                  </Button>
                  {profile && (
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <User />
                        <span className="sr-only">Admin Profile</span>
                    </Button>
                  )}
              </div>
          </header>
          <main className="flex-1 overflow-y-auto">
              {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
  );
}
