import React from 'react';
import Logo from '@/components/icons/logo';
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-muted-foreground text-sm">
              Igniting Your Digital Success with Web Development, AI Automation, and Lead Generation.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary">Portfolio</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="SaaSnext on Twitter">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="SaaSnext on Github">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="SaaSnext on LinkedIn">
                <Linkedin size={20} />
              </Link>
            </div>
             <p className="text-muted-foreground text-sm mt-4">
              123 Innovation Drive<br />
              Tech City, TX 75001
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              <a href="mailto:info@saasnext.com" className="hover:text-primary">info@saasnext.com</a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SaaSnext Catalyst. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
