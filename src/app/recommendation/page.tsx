
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import RecommendationSection from '@/components/sections/recommendation-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Lightbulb, Rocket } from 'lucide-react';
import FilterablePortfolioSection from '@/components/sections/filterable-portfolio-section';

export const metadata: Metadata = {
  title: 'AI Service Recommender for Junagadh Businesses | SaaSnext',
  description: 'Use our free AI tool for instant recommendations on services from our Junagadh-based web development, AI, and lead generation experts.',
};

export default function RecommendationPage() {
  return (
    <>
      <HeroSection
        pageTitle="AI-Powered Insights for Your Junagadh Business"
        pageSubtitle="Let our intelligent assistant guide you to the perfect services from our web development, AI, and lead generation company in Junagadh."
        tagline="Smart Tools for Your Success in Gujarat"
        TaglineIcon={Lightbulb}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <RecommendationSection />
      <FilterablePortfolioSection />
      <ImageWithTextSection
        id="after-recommendation-next-steps"
        imageUrl="/saasnextai.png"
        altText="Discussing AI recommendations with our AI solution company experts in Junagadh"
        title="Your Insights: What's Next?"
        titleIcon={Rocket}
        paragraphs={[
          "Great! You've received personalized service suggestions. This is an excellent starting point for your project.",
          "To take the next step, let's connect. Our experts in Junagadh can delve deeper into your specific needs, discuss the AI's recommendations, and tailor a precise strategy to ensure your success. We're here to turn insights into action."
        ]}
        imagePosition="left"
        bgColor="bg-card/30"
        ctaText="Discuss Your Results"
        ctaLink="/contact"
      />
    </>
  );
}
