
import HeroSection from '@/components/sections/hero-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import WorkProcessSection from '@/components/sections/work-process-section'; // Updated import
import ServicesOverviewSection from '@/components/sections/services-overview-section';
import CallToActionSection from '@/components/sections/call-to-action-section';
import { Zap } from 'lucide-react';

export default function HomePage() {
  const homePageTitle = (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-8">
      Igniting Your Digital Success
    </h1>
  );

  return (
    <>
      <HeroSection
        pageTitle={homePageTitle}
        pageSubtitle="We empower businesses with cutting-edge Web Development, AI-driven Automation, and strategic Lead Generation. Let's build your future, together."
        tagline="SaaSnext Catalyst"
        TaglineIcon={Zap}
        showCtaButtons={true}
        containerPadding="py-20 md:py-32"
      />
      <WhyChooseUsSection />
      <WorkProcessSection /> {/* Updated component usage */}
      <ServicesOverviewSection />
      <PortfolioSection />
      <CallToActionSection />
    </>
  );
}
