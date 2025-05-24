
'use client';

import Link from 'next/link';
import Logo from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'AI Recommender', href: '/recommendation' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between"> {/* Increased height from h-16 to h-20 */}
        <Link href="/" className="flex items-center space-x-2" aria-label="SaaSnext homepage">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center gap-1 text-base font-medium bg-card/50 backdrop-blur-sm p-1 rounded-full border border-border/30 shadow-sm"> {/* Increased font size from text-sm to text-base */}
          {navItems.map((item) => {
            const isActive = (item.href === '/' && currentPathname === '/') || (item.href !== '/' && currentPathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-5 py-3 rounded-full transition-colors duration-200 ease-in-out", // Increased padding from px-4 py-2
                  isActive
                    ? "bg-primary text-primary-foreground font-medium shadow-sm"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/10"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                <Menu className="h-7 w-7" /> {/* Increased icon size from h-6 w-6 */}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-6">
                <Link href="/" className="mb-8 block" onClick={() => setMobileMenuOpen(false)}>
                  <Logo />
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => {
                    const isActive = (item.href === '/' && currentPathname === '/') || (item.href !== '/' && currentPathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                          "text-xl transition-colors hover:text-primary", // Increased font size from text-lg to text-xl
                          isActive ? "text-primary font-semibold" : "text-foreground/80"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
