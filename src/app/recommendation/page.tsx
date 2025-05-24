
import HeroSection from '@/components/sections/hero-section';
import RecommendationSection from '@/components/sections/recommendation-section';
import { Lightbulb } from 'lucide-react';

export default function RecommendationPage() {
  return (
    <>
      <HeroSection
        pageTitle="AI-Powered Recommendations"
        pageSubtitle="Let our intelligent assistant guide you to the SaaSnext services that best fit your business objectives."
        tagline="Smart Suggestions"
        TaglineIcon={Lightbulb}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <RecommendationSection />
    </>
  );
}
