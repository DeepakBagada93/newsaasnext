
'use client';

import Link from 'next/link';
import Logo from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles } from 'lucide-react'; // Added Sparkles
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'AI Recommender', href: '/recommendation', icon: Sparkles }, // Added icon prop
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center"> {/* Removed justify-between */}
        
        {/* Mobile-only logo */}
        <Link href="/" className="flex items-center space-x-2 md:hidden" aria-label="SaaSnext homepage (mobile)">
          <Logo />
        </Link>

        {/* Centered group for desktop/tablet */}
        <div className="hidden md:flex items-center gap-12 mx-auto"> {/* Increased gap from gap-8 to gap-12 */}
          <Link href="/" className="flex items-center space-x-2" aria-label="SaaSnext homepage">
            <Logo />
          </Link>
          <nav className="flex items-center gap-1 text-sm bg-card/50 backdrop-blur-sm p-1 rounded-full border border-border/30 shadow-sm"> {/* Changed text-base font-medium to text-sm */}
            {navItems.map((item) => {
              const isActive = (item.href === '/' && currentPathname === '/') || (item.href !== '/' && currentPathname.startsWith(item.href));
              const isAiRecommender = item.label === 'AI Recommender';
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full transition-colors duration-200 ease-in-out flex items-center gap-2",  // Changed padding from px-5 py-3
                    isActive
                      ? "bg-primary text-primary-foreground font-medium shadow-sm" // font-medium kept for active
                      : isAiRecommender
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/10"
                  )}
                >
                  {Icon && <Icon className="h-3.5 w-3.5" />} {/* Icon size reduced */}
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile menu trigger - pushed to the right */}
        <div className="md:hidden ml-auto"> {/* Added ml-auto */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                <Menu className="h-7 w-7" />
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
                    const isAiRecommender = item.label === 'AI Recommender';
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                          "text-xl transition-colors flex items-center gap-2", 
                          isActive 
                            ? "text-primary font-semibold" 
                            : isAiRecommender 
                            ? "text-secondary font-semibold hover:text-secondary/90"
                            : "text-foreground/80 hover:text-primary"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {Icon && <Icon className="h-5 w-5" />}
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
