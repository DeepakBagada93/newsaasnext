
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import PricingSection from '@/components/sections/pricing-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { DollarSign, Handshake, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing | Custom Quotes for Web & AI SaaS Development in Junagadh',
  description: 'Get transparent pricing for website development in Junagadh, AI SaaS projects, and lead generation services from SaaSnext Catalyst. Request your custom quote for Junagadh-focused solutions.',
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
      <ImageWithTextSection
        id="value-partnership"
        imageUrl="https://placehold.co/600x400.png"
        imageHint="business handshake deal"
        altText="Business partners shaking hands"
        title="Value Beyond Price, Partnerships That Last"
        titleIcon={Handshake}
        paragraphs={[
          "Our pricing philosophy centers on delivering exceptional value. We believe in transparent quotes tailored to your specific requirements for website development, AI SaaS solutions, or lead generation in Junagadh. There are no hidden fees, just clear, upfront investment details.",
          "We aim to build long-term partnerships by ensuring our solutions provide a significant return on your investment, helping your Junagadh-based business achieve sustainable growth and success."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
        ctaText="Get Your Custom Quote"
        ctaLink="/contact"
      />
      <ImageWithTextSection
        id="roi-focus"
        imageUrl="https://placehold.co/600x400.png"
        imageHint="financial growth chart"
        altText="Chart showing return on investment"
        title="Maximizing Your Return on Investment in Junagadh"
        titleIcon={TrendingUp}
        paragraphs={[
          "Investing in digital services is an investment in your future. We meticulously plan every website development project, AI SaaS implementation, and lead generation campaign to maximize your ROI.",
          "Our strategies are data-driven and results-oriented, ensuring that businesses in Junagadh see tangible benefits and measurable growth from their partnership with SaaSnext."
        ]}
        imagePosition="left"
        bgColor="bg-background"
      />
    </>
  );
}
