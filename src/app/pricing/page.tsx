
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import PricingSection from '@/components/sections/pricing-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { DollarSign, Handshake, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing | Web Development & AI Solutions in Junagadh | SaaSnext',
  description: 'Find transparent pricing from a web development and AI solutions company in Junagadh. We offer custom quotes for website design, AI automation, and lead generation services in Gujarat.',
};

export default function PricingPage() {
  return (
    <>
      <HeroSection
        pageTitle="Transparent Pricing for Junagadh Businesses"
        pageSubtitle="Get custom quotes from the web development, AI, and lead generation company in Junagadh. We tailor pricing to your project's unique needs and budget."
        tagline="Value-Focused Solutions for Junagadh"
        TaglineIcon={DollarSign}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <PricingSection />
      <ImageWithTextSection
        id="value-partnership"
        imageUrl="/saasnextweb.png"
        altText="A handshake symbolizing the partnerships our web development company builds in Junagadh."
        title="Value Beyond Price, Partnerships in Junagadh"
        titleIcon={Handshake}
        paragraphs={[
          "At SaaSnext, our pricing philosophy centers on delivering exceptional value to Junagadh businesses. Whether you need website design, AI consulting, or lead generation services, we provide transparent, tailored quotes.",
          "As a web development company in Junagadh, our goal is to build lasting partnerships. We ensure our solutions provide a significant return, empowering your business with sustainable growth in the local market."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
        ctaText="Get Your Custom Quote"
        ctaLink="/contact"
      />
      <ImageWithTextSection
        id="roi-focus"
        imageUrl="/saasnextweb2.png"
        altText="A chart showing positive ROI, a key focus for our AI solutions company in Junagadh."
        title="Maximizing Your ROI in the Gujarat Market"
        titleIcon={TrendingUp}
        paragraphs={[
          "Investing in digital services with SaaSnext is an investment in your business's future. Our web development company meticulously plans every project, while our AI and lead generation services focus on maximizing your return.",
          "Our strategies are data-driven. As your local AI and web development company in Junagadh, we ensure you see tangible benefits and measurable growth."
        ]}
        imagePosition="left"
        bgColor="bg-background"
      />
    </>
  );
}
