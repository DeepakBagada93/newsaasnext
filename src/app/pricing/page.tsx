import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import PricingSection from '@/components/sections/pricing-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { DollarSign, Handshake, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing | Custom Quotes for Web & AI SaaS Development',
  description: 'Get transparent pricing for local website development, AI SaaS projects, and lead generation services from SaaSnext Catalyst. Request your custom quote for locally-focused solutions from a leading company.',
};

export default function PricingPage() {
  return (
    <>
      <HeroSection
        pageTitle="Transparent Pricing for Your Business"
        pageSubtitle="Get custom quotes for website development, AI SaaS, and lead generation. We match your project's unique needs."
        tagline="Value Focused Solutions"
        TaglineIcon={DollarSign}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <PricingSection />
      <ImageWithTextSection
        id="value-partnership"
        imageUrl="/saasnextweb.png"
        imageHint="business handshake deal"
        altText="Partnerships for local website development"
        title="Value Beyond Price, Partnerships That Last"
        titleIcon={Handshake}
        paragraphs={[
          "At SaaSnext, our pricing philosophy centers on delivering exceptional value for your investment in website development, AI SaaS solutions, or lead generation. We provide transparent, tailored quotes with no hidden fees—just clear, upfront details.",
          "As a leading local website development company, our goal is to build lasting partnerships. We ensure our solutions provide a significant return, empowering your business with sustainable growth and measurable success in your market."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
        ctaText="Get Your Custom Quote"
        ctaLink="/contact"
      />
      <ImageWithTextSection
        id="roi-focus"
        imageUrl="/saasnextweb2.png"
        imageHint="financial growth chart"
        altText="ROI for local AI SaaS development"
        title="Maximizing Your ROI with Our Expertise"
        titleIcon={TrendingUp}
        paragraphs={[
          "Investing in digital services with SaaSnext is an investment in your business's future. We meticulously plan every website development project, AI SaaS implementation, and lead generation campaign to maximize your return.",
          "Our strategies are data-driven and results-oriented. As your local AI SaaS development and lead generation company, we ensure you see tangible benefits and measurable growth through our partnership."
        ]}
        imagePosition="left"
        bgColor="bg-background"
      />
    </>
  );
}
