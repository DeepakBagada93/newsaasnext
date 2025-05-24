
import HeroSection from '@/components/sections/hero-section';
import PricingSection from '@/components/sections/pricing-section';
import { DollarSign } from 'lucide-react';

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
