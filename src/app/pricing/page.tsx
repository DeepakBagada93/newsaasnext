import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import PricingSection from '@/components/sections/pricing-section';
import { DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing | Custom Quotes for Web & AI SaaS Development in Junagadh',
  description: 'Get transparent pricing for website development, AI SaaS projects, and lead generation services in Junagadh from SaaSnext Catalyst. Request your custom quote.',
};

export default function PricingPage() {
  return (
    <>
      <HeroSection
        pageTitle="Transparent & Fair Pricing"
        pageSubtitle="Get a clear understanding of our pricing approach. We offer custom quotes to match your project's unique needs."
        tagline="Value Focused"
        TaglineIcon={DollarSign}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <PricingSection />
    </>
  );
}
