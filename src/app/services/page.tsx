
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import { Settings } from 'lucide-react'; // Example icon

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        pageTitle="Our Expert Services"
        pageSubtitle="Tailored solutions to propel your business forward in the digital age. Explore how we can help you achieve your goals."
        tagline="Digital Solutions"
        TaglineIcon={Settings}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <ServicesSection />
    </>
  );
}
