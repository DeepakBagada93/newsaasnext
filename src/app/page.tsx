import HeroSection from '@/components/sections/hero-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import ServicesOverviewSection from '@/components/sections/services-overview-section';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesOverviewSection />
      <PortfolioSection />
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Learn more about our journey and values, or get in touch to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105">
              <Link href="/about">
                About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-foreground border-primary hover:bg-primary/10 hover:text-primary shadow-lg transition-transform duration-300 hover:scale-105">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
