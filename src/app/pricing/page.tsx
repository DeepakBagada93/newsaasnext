
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import PricingSection from '@/components/sections/pricing-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { DollarSign, Handshake, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing & Quotes | Web Development & AI Solutions Company | SaaSnext',
  description: 'Find transparent pricing for services from a leading web development and AI solutions company. We offer custom quotes for web development, AI automation, and lead generation. Contact us for a detailed proposal.',
};

export default function PricingPage() {
  return (
    <>
      <HeroSection
        pageTitle="Transparent Pricing for Digital Solutions"
        pageSubtitle="Get custom quotes from a leading web development company, AI solution company, and lead generation company. We tailor pricing to your project's unique needs."
        tagline="Value Focused Solutions"
        TaglineIcon={DollarSign}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <PricingSection />
      <ImageWithTextSection
        id="value-partnership"
        imageUrl="/saasnextweb.png"
        altText="Handshake symbolizing the value-driven partnerships our web development company builds with clients."
        title="Value Beyond Price, Partnerships That Last"
        titleIcon={Handshake}
        paragraphs={[
          "At SaaSnext, our pricing philosophy centers on delivering exceptional value. Whether you need a web development company, AI solution company, or lead generation company, we provide transparent, tailored quotes with no hidden fees.",
          "As a leading local web development company, our goal is to build lasting partnerships. We ensure our solutions provide a significant return, empowering your business with sustainable growth and measurable success in your market."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
        ctaText="Get Your Custom Quote"
        ctaLink="/contact"
      />
      <ImageWithTextSection
        id="roi-focus"
        imageUrl="/saasnextweb2.png"
        altText="A chart showing positive ROI, a key focus for our AI solutions company."
        title="Maximizing Your ROI with Our Expertise"
        titleIcon={TrendingUp}
        paragraphs={[
          "Investing in digital services with SaaSnext is an investment in your business's future. Our web development company meticulously plans every project, while our AI solution company focuses on efficiency and our lead generation company on conversions to maximize your return.",
          "Our strategies are data-driven and results-oriented. As your local AI SaaS development and lead generation company, we ensure you see tangible benefits and measurable growth through our partnership."
        ]}
        imagePosition="left"
        bgColor="bg-background"
      />
    </>
  );
}
