import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import { Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About SaaSnext | Junagadh Website Development & AI Experts',
  description: 'Learn about SaaSnext Catalyst. We specialize in website development in Junagadh, AI SaaS development, and targeted lead generation. Discover our mission.',
};

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
