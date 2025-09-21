

'use client';

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
import { useAuth } from '@/contexts/auth-context';


const menuItems = [
  { href: '/saasnextdbadmin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/saasnextdbadmin/clients', label: 'Clients', icon: Users },
  { href: '/saasnextdbadmin/services', label: 'Services', icon: Briefcase },
  { href: '/saasnextdbadmin/payments', label: 'Payments', icon: CreditCard },
  { href: '/saasnextdbadmin/settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { profile, logOut } = useAuth();


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
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <Link href={item.href} legacyBehavior passHref>
                    <SidebarMenuButton
                      isActive={pathname.startsWith(item.href) && (item.href !== '/saasnextdbadmin' || pathname === '/saasnextdbadmin')}
                      tooltip={item.label}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
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
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={logOut} tooltip="Sign Out">
                            <LogOut />
                            <span>Sign Out</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
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
