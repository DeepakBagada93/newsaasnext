
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import PricingSection from '@/components/sections/pricing-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { DollarSign, Handshake, TrendingUp } from 'lucide-react';
import saasnextWeb2Image from '@/src/public/saasnextweb2.png'; 
import saasnextWebImage from '@/src/public/saasnextweb.png';   

export const metadata: Metadata = {
  title: 'Pricing | Custom Quotes for Web & AI SaaS Development in Junagadh',
  description: 'Get transparent pricing for website development in Junagadh, AI SaaS projects, and lead generation services from SaaSnext Catalyst. Request your custom quote for Junagadh-focused solutions from a leading local company.',
};

export default function PricingPage() {
  return (
    <>
      <HeroSection
        pageTitle="Transparent Pricing for Junagadh Businesses"
        pageSubtitle="Get custom quotes for website development, AI SaaS, and lead generation in Junagadh. We match your project's unique needs."
        tagline="Value Focused Solutions"
        TaglineIcon={DollarSign}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <PricingSection />
      <ImageWithTextSection
        id="value-partnership"
        imageUrl={saasnextWeb2Image} 
        imageHint="business handshake deal"
        altText="Partnerships for website development in Junagadh"
        title="Value Beyond Price, Partnerships That Last"
        titleIcon={Handshake}
        paragraphs={[
          "Our pricing philosophy centers on delivering exceptional value. We believe in transparent quotes tailored to your specific requirements for website development, AI SaaS solutions, or lead generation in Junagadh. There are no hidden fees, just clear, upfront investment details.",
          "As a dedicated website development company in Junagadh, we aim to build long-term partnerships by ensuring our solutions provide a significant return on your investment, helping your business achieve sustainable growth and success."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
        ctaText="Get Your Custom Quote"
        ctaLink="/contact"
      />
      <ImageWithTextSection
        id="roi-focus"
        imageUrl={saasnextWebImage} 
        imageHint="financial growth chart"
        altText="ROI for AI SaaS development in Junagadh"
        title="Maximizing Your ROI with a Junagadh-Focused Company"
        titleIcon={TrendingUp}
        paragraphs={[
          "Investing in digital services is an investment in your future. We meticulously plan every website development project, AI SaaS implementation, and lead generation campaign to maximize your ROI.",
          "Our strategies are data-driven and results-oriented, ensuring that businesses in Junagadh see tangible benefits and measurable growth from their partnership with SaaSnext, your local AI SaaS development company."
        ]}
        imagePosition="left"
        bgColor="bg-background"
      />
    </>
  );
}
