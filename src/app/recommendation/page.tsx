
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import RecommendationSection from '@/components/sections/recommendation-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Lightbulb, Rocket } from 'lucide-react';
import FilterablePortfolioSection from '@/components/sections/filterable-portfolio-section';

export const metadata: Metadata = {
  title: 'AI Service Recommender for Web Development & More | SaaSnext',
  description: 'Unsure where to start? Use our free AI tool for instant recommendations on services from our web development company, AI solutions team, and lead generation experts.',
};

export default function RecommendationPage() {
  return (
    <>
      <HeroSection
        pageTitle="AI-Powered Insights for Your Business"
        pageSubtitle="Let our intelligent assistant guide you to the perfect services from our web development, AI, and lead generation company."
        tagline="Smart Tools for Your Success"
        TaglineIcon={Lightbulb}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <RecommendationSection />
      <FilterablePortfolioSection />
      <ImageWithTextSection
        id="after-recommendation-next-steps"
        imageUrl="/saasnextai.png"
        altText="Discussing AI recommendations with our AI solution company experts"
        title="Your Insights: What's Next?"
        titleIcon={Rocket}
        paragraphs={[
          "Great! You've received personalized service suggestions from our AI solution. This is an excellent starting point for your project.",
          "To take the next step, let's connect. Our experts from our web development and lead generation company can delve deeper into your specific needs, discuss the AI's recommendations in detail, and tailor a precise strategy to ensure your success. We're here to turn insights into action."
        ]}
        imagePosition="left"
        bgColor="bg-card/30"
        ctaText="Discuss Your Results"
        ctaLink="/contact"
      />
    </>
  );
}
