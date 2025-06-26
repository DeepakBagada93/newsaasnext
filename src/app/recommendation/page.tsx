
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import RecommendationSection from '@/components/sections/recommendation-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Lightbulb, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Service Recommender | SaaSnext',
  description: 'Use our AI tool for recommendations on website development, AI SaaS solutions, or lead generation services. Tailored for your needs by SaaSnext, a leading local company.',
};

export default function RecommendationPage() {
  return (
    <>
      <HeroSection
        pageTitle="AI-Powered Insights for Your Business"
        pageSubtitle="Let our intelligent assistant guide you to the SaaSnext services that best fit your objectives."
        tagline="Smart Tools for Your Success"
        TaglineIcon={Lightbulb}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <RecommendationSection />
      <ImageWithTextSection
        id="after-recommendation-next-steps"
        imageUrl="/saasnextai.png"
        altText="Discussing AI recommendations with SaaSnext experts"
        title="Your Insights: What's Next?"
        titleIcon={Rocket}
        paragraphs={[
          "Great! You've received personalized service suggestions. This is an excellent starting point for your project.",
          "To take the next step, let's connect. Our experts can delve deeper into your specific needs, discuss the AI's recommendations in detail, and tailor a precise strategy to ensure your success. We're here to turn insights into action."
        ]}
        imagePosition="left"
        bgColor="bg-card/30"
        ctaText="Discuss Your Results"
        ctaLink="/contact"
      />
    </>
  );
}
