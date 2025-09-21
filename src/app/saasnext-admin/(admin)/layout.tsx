
'use client';

import { useEffect, type ReactNode } from 'react';
import { useAuth } from '@/contexts/auth-context';
import { useRouter, usePathname } from 'next/navigation';
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
  Home,
  LogOut,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const adminMenuItems = [
  { href: '/saasnext-admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/saasnext-admin/clients', label: 'Clients', icon: Users },
  { href: '/saasnext-admin/services', label: 'Services', icon: Briefcase },
  { href: '/saasnext-admin/payments', label: 'Payments', icon: CreditCard },
  { href: '/saasnext-admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminProtectedLayout({ children }: { children: ReactNode }) {
  const { profile, loading, logOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Wait until loading is false before we check for profile and role
    if (!loading) {
      if (!profile || profile.role !== 'admin') {
        // If not loading and no admin profile, redirect to login
        router.push('/saasnext-admin/login');
      }
    }
  }, [profile, loading, router]);

  if (loading || !profile || profile.role !== 'admin') {
    // Show a loading screen while we verify the user's role
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="ml-4 text-muted-foreground">Verifying admin access...</p>
      </div>
    );
  }

  // If we reach here, the user is a confirmed admin
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
            {adminMenuItems.map((item) => {
              const isActive = (item.href === '/saasnext-admin' && pathname === '/saasnext-admin') || (item.href !== '/saasnext-admin' && pathname.startsWith(item.href));
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
              )
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
            <SidebarMenuItem>
              <SidebarMenuButton onClick={logOut} tooltip="Sign Out">
                <LogOut />
                <span>Sign Out</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px] flex-shrink-0">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Admin Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
                Welcome, {profile.full_name || 'Admin'}
            </span>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User />
              <span className="sr-only">User Profile</span>
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
