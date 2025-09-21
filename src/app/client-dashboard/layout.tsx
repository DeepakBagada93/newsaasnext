
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
  Globe,
  LineChart,
  Bot,
  CreditCard,
  Settings,
  Home,
  Layers,
  User,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { useEffect } from 'react';


const menuItems = [
  { href: '/client-dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/client-dashboard/web-development', label: 'Web Development', icon: Globe },
  { href: '/client-dashboard/ai-automation', label: 'AI Automation', icon: Bot },
  { href: '/client-dashboard/lead-generation', label: 'Lead Generation', icon: LineChart },
  { href: '/client-dashboard/custom-services', label: 'Custom Services', icon: Layers },
  { href: '/client-dashboard/billing', label: 'Billing', icon: CreditCard },
  { href: '/client-dashboard/settings', label: 'Settings', icon: Settings },
];

export default function ClientDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, loading, logOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    // You can show a loading spinner or a message here
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

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
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <Link href={item.href} legacyBehavior passHref>
                    <SidebarMenuButton
                      isActive={pathname === item.href}
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
                  <h1 className="text-lg font-semibold">Client Portal</h1>
              </div>
              <div className="flex items-center gap-4">
                  <Button asChild size="sm">
                      <Link href="/contact">Contact Support</Link>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User />
                    <span className="sr-only">User Profile</span>
                  </Button>
              </div>
          </header>
          <main className="flex-1 overflow-y-auto">
              {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
  );
}
