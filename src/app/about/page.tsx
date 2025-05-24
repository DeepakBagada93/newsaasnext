
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import { Building } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <HeroSection
        pageTitle="About SaaSnext Catalyst"
        pageSubtitle="Discover our mission, vision, and the passionate team dedicated to your digital success."
        tagline="Our Story"
        TaglineIcon={Building}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <AboutSection />
    </>
  );
}
