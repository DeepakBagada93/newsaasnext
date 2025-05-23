import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import PricingSection from '@/components/sections/pricing-section';
import RecommendationSection from '@/components/sections/recommendation-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import ContactSection from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <RecommendationSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
