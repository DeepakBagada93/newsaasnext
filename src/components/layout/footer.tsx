import React from 'react';
import Logo from '@/components/icons/logo';
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background overflow-hidden"> {/* Ensure footer itself has a base background */}
      {/* SVG Wave Pattern */}
      <div
        className="absolute top-0 left-0 w-full h-[100px] md:h-[150px]" // Height of the wave area
        style={{ zIndex: 0 }} // Behind the content
      >
        <svg
          viewBox="0 0 1440 150" // ViewBox: width 1440, total height for path 150
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <linearGradient id="footerWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.9 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          {/* 
            Path explanation:
            M0,50: Moves to the starting point (left edge, 50px down from the top of the 150px viewBox).
            C360,0 1080,0 1440,50: Draws a cubic Bezier curve.
              - (360,0) is the first control point (pulls the curve upwards near the left).
              - (1080,0) is the second control point (pulls the curve upwards near the right).
              - (1440,50) is the end point of the curve (right edge, 50px down).
            This creates a wave that arches upwards, touching the top of the viewBox (y=0) in its middle section.
            L1440,150: Draws a line down to the bottom-right corner of the viewBox.
            L0,150: Draws a line across to the bottom-left corner of the viewBox.
            Z: Closes the path, connecting back to the start point.
            The shape is filled with the 'footerWaveGradient'.
          */}
          <path
            d="M0,50 C360,0 1080,0 1440,50 L1440,150 L0,150 Z"
            style={{ fill: 'url(#footerWaveGradient)' }}
          />
        </svg>
      </div>

      {/* Footer Content Wrapper */}
      {/* Increased top padding (pt-28, md:pt-40) to ensure content is below the wave */}
      <div className="relative container mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-28 md:pt-40 text-primary-foreground">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Logo /> {/* Assuming Logo component is visible on gradient or adapts */}
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Igniting Your Digital Success with Web Development, AI Automation, and Lead Generation.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary-foreground tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Services</Link></li>
              <li><Link href="/pricing" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Pricing</Link></li>
              <li><Link href="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">About Us</Link></li>
              <li><Link href="/recommendation" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">AI Recommender</Link></li>
              <li><Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary-foreground tracking-wider uppercase mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground" aria-label="SaaSnext on Twitter">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground" aria-label="SaaSnext on Github">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground" aria-label="SaaSnext on LinkedIn">
                <Linkedin size={20} />
              </Link>
            </div>
            <p className="text-primary-foreground/80 text-sm mt-4">
              123 Innovation Drive<br />
              Tech City, TX 75001
            </p>
            <p className="text-primary-foreground/80 text-sm mt-2">
              <a href="mailto:saasnextdb@gmail.com" className="hover:text-primary-foreground">saasnextdb@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/30 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            &copy; {currentYear} SaaSnext Catalyst. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
