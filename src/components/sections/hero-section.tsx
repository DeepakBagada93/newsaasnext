
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react"; // Default icon
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  pageTitle: React.ReactNode;
  pageSubtitle: string;
  tagline?: string;
  TaglineIcon?: LucideIcon;
  showCtaButtons?: boolean;
  ctaButton1Text?: string;
  ctaButton1Link?: string;
  ctaButton2Text?: string;
  ctaButton2Link?: string;
  containerPadding?: string;
}

export default function HeroSection({
  pageTitle,
  pageSubtitle,
  tagline,
  TaglineIcon = Zap, // Default icon
  showCtaButtons = true,
  ctaButton1Text = "Get Started",
  ctaButton1Link = "/contact",
  ctaButton2Text = "Explore Services",
  ctaButton2Link = "/services",
  containerPadding = "py-20 md:py-32",
}: HeroSectionProps) {
  return (
    <section id="home-hero" className={cn("relative w-full bg-gradient-to-br from-background to-card overflow-hidden", containerPadding)}>
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="nodeGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.7 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.7 }} />
            </linearGradient>
          </defs>
          
          {/* Nodes - Increased quantity and varied delays/sizes */}
          <circle cx="10%" cy="15%" r="4" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '0s' }} />
          <circle cx="20%" cy="70%" r="5" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '0.8s' }} />
          <circle cx="40%" cy="25%" r="3" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '1.5s' }} />
          <circle cx="75%" cy="10%" r="5" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '0.3s' }} />
          <circle cx="90%" cy="60%" r="4" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '1.2s' }} />
          <circle cx="30%" cy="45%" r="6" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '0.6s' }} /> {/* Prominent node */}
          <circle cx="60%" cy="75%" r="3" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '2.0s' }} />
          <circle cx="5%"  cy="40%" r="4" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '1.0s' }} />
          <circle cx="95%" cy="30%" r="5" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '0.2s' }} />
          <circle cx="50%" cy="50%" r="4" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '2.2s' }} /> {/* Central node */}
          <circle cx="15%" cy="90%" r="3" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '1.7s' }} /> {/* Bottom-left */}
          <circle cx="85%" cy="90%" r="4" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '0.4s' }} /> {/* Bottom-right */}
          <circle cx="65%" cy="5%"  r="3" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '2.5s' }} /> {/* Top mid-right */}
          <circle cx="35%" cy="5%"  r="2" fill="url(#nodeGradientHero)" className="neural-node" style={{ animationDelay: '1.3s' }} /> {/* Top mid-left, small */}


          {/* Lines - Increased quantity, varied connections, opacities, and delays */}
          <line x1="10%" y1="15%" x2="30%" y2="45%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1" className="neural-line" style={{ animationDelay: '0s' }} />
          <line x1="30%" y1="45%" x2="20%" y2="70%" stroke="hsl(var(--accent) / 0.2)" strokeWidth="1" className="neural-line" style={{ animationDelay: '0.5s' }} />
          <line x1="30%" y1="45%" x2="40%" y2="25%" stroke="hsl(var(--primary) / 0.15)" strokeWidth="0.5" className="neural-line" style={{ animationDelay: '1s' }} />
          <line x1="40%" y1="25%" x2="75%" y2="10%" stroke="hsl(var(--accent) / 0.2)" strokeWidth="1" className="neural-line" style={{ animationDelay: '1.5s' }} />
          <line x1="75%" y1="10%" x2="90%" y2="60%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1" className="neural-line" style={{ animationDelay: '2s' }} />
          <line x1="90%" y1="60%" x2="60%" y2="75%" stroke="hsl(var(--accent) / 0.15)" strokeWidth="0.5" className="neural-line" style={{ animationDelay: '2.5s' }} />
          <line x1="20%" y1="70%" x2="60%" y2="75%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1" className="neural-line" style={{ animationDelay: '0.2s' }}/>
          <line x1="5%" y1="40%" x2="30%" y2="45%" stroke="hsl(var(--accent) / 0.2)" strokeWidth="1" className="neural-line" style={{ animationDelay: '0.8s' }} />
          <line x1="95%" y1="30%" x2="75%" y2="10%" stroke="hsl(var(--primary) / 0.15)" strokeWidth="0.5" className="neural-line" style={{ animationDelay: '1.2s' }} />
          <line x1="50%" y1="50%" x2="30%" y2="45%" stroke="hsl(var(--accent) / 0.2)" strokeWidth="1" className="neural-line" style={{ animationDelay: '0.3s' }} />
          <line x1="50%" y1="50%" x2="40%" y2="25%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1" className="neural-line" style={{ animationDelay: '0.7s' }} />
          <line x1="50%" y1="50%" x2="60%" y2="75%" stroke="hsl(var(--accent) / 0.15)" strokeWidth="0.5" className="neural-line" style={{ animationDelay: '1.4s' }} />
          <line x1="50%" y1="50%" x2="90%" y2="60%" stroke="hsl(var(--primary) / 0.1)" strokeWidth="0.5" className="neural-line" style={{ animationDelay: '1.9s' }} /> {/* Thinner line */}
          <line x1="15%" y1="90%" x2="20%" y2="70%" stroke="hsl(var(--accent) / 0.2)" strokeWidth="1" className="neural-line" style={{ animationDelay: '0.1s' }} />
          <line x1="85%" y1="90%" x2="60%" y2="75%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1" className="neural-line" style={{ animationDelay: '0.9s' }} />
          <line x1="75%" y1="10%" x2="65%" y2="5%" stroke="hsl(var(--accent) / 0.15)" strokeWidth="0.5" className="neural-line" style={{ animationDelay: '1.6s' }} />
          <line x1="40%" y1="25%" x2="35%" y2="5%" stroke="hsl(var(--primary) / 0.1)" strokeWidth="0.5" className="neural-line" style={{ animationDelay: '2.3s' }} /> {/* Thinner line */}
          <line x1="10%" y1="15%" x2="5%" y2="40%" stroke="hsl(var(--accent) / 0.1)" strokeWidth="0.5" className="neural-line" style={{ animationDelay: '2.8s' }} /> {/* Thinner line */}

          {/* Additional cross-connections for more complexity */}
          <line x1="5%" y1="40%" x2="20%" y2="70%" stroke="hsl(var(--primary) / 0.1)" strokeWidth="0.5" className="neural-line" style={{ animationDelay: '3.0s' }} />
          <line x1="95%" y1="30%" x2="90%" y2="60%" stroke="hsl(var(--accent) / 0.1)" strokeWidth="0.5" className="neural-line" style={{ animationDelay: '3.2s' }} />
          <line x1="15%" y1="90%" x2="50%" y2="50%" stroke="hsl(var(--primary) / 0.08)" strokeWidth="0.5" className="neural-line" style={{ animationDelay: '3.5s' }} />
          <line x1="85%" y1="90%" x2="50%" y2="50%" stroke="hsl(var(--accent) / 0.08)" strokeWidth="0.5" className="neural-line" style={{ animationDelay: '3.7s' }} />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        {tagline && TaglineIcon && (
          <div className="inline-flex items-center rounded-lg bg-muted/80 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary mb-6 shadow-md border border-border/30">
            <TaglineIcon className="h-4 w-4 mr-2" />
            {tagline}
          </div>
        )}
        {typeof pageTitle === 'string' ? (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8">
            {pageTitle}
          </h1>
        ) : (
          pageTitle
        )}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-12">
          {pageSubtitle}
        </p>
        {showCtaButtons && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105">
              <Link href={ctaButton1Link}>
                {ctaButton1Text} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-foreground border-primary hover:bg-primary/10 hover:text-primary shadow-lg transition-transform duration-300 hover:scale-105 bg-background/50 backdrop-blur-sm">
              <Link href={ctaButton2Link}>
                {ctaButton2Text}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
