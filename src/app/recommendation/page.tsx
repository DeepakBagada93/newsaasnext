import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import RecommendationSection from '@/components/sections/recommendation-section';
import { Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Service Recommender | Website, AI SaaS, Lead Gen in Junagadh',
  description: 'Use our AI tool for recommendations on website development, AI SaaS solutions, or lead generation services in Junagadh. Tailored for your needs by SaaSnext, a leading local company.',
};

export default function RecommendationPage() {
  return (
    <>
      <HeroSection
        pageTitle="AI-Powered Recommendations for Junagadh Businesses"
        pageSubtitle="Let our intelligent assistant guide you to the SaaSnext services that best fit your business objectives in Junagadh."
        tagline="Smart Suggestions for Junagadh"
        TaglineIcon={Lightbulb}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <RecommendationSection />
    </>
  );
}
