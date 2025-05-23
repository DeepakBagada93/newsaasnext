import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="w-full py-20 md:py-32 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium text-primary mb-6 shadow-md">
          <Zap className="h-4 w-4 mr-2" />
          SaaSnext Catalyst
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-6">
          Igniting Your Digital Success
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
          We empower businesses with cutting-edge Web Development, AI-driven Automation, and strategic Lead Generation. Let's build your future, together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105">
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-foreground border-primary hover:bg-primary/10 hover:text-primary shadow-lg transition-transform duration-300 hover:scale-105">
            <Link href="/services">
              Explore Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
