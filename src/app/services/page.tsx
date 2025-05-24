import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import { Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Website Development, AI SaaS, Lead Generation in Junagadh',
  description: 'Explore services by SaaSnext in Junagadh: expert website development, advanced AI SaaS development, strategic lead generation, and comprehensive email marketing.',
};

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
