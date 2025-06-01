
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import WorkProcessSection from '@/components/sections/work-process-section';
import ServicesOverviewSection from '@/components/sections/services-overview-section';
import CallToActionSection from '@/components/sections/call-to-action-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Zap, Lightbulb } from 'lucide-react';
import saasnextWeb2Image from '@/public/saasnextweb2.png';
import saasnextAiImage from '@/public/saasnextairecom.png'; // Import the AI image
import ComprehensiveSolutionsSection from '@/components/sections/comprehensive-solutions-section';


export const metadata: Metadata = {
  title: 'Premier Website & AI SaaS Development Company in Junagadh | SaaSnext',
  description: 'Choose SaaSnext, the top website development company in Junagadh. We also specialize in AI SaaS development and strategic lead generation in Junagadh. Let\'s build your success.',
};

export default function HomePage() {
  const homePageTitle = (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-8">
      Elevate Your Junagadh Business: Digital Solutions, Powerful Results.
    </h1>
  );

  return (
    <>
      <HeroSection
        pageTitle={homePageTitle}
        pageSubtitle="Partner with SaaSnext, Junagadh's leading Web Development, AI SaaS, and Lead Generation experts. We turn your vision into reality. Experience transformative growth."
        tagline="Your Catalyst for Digital Excellence."
        TaglineIcon={Zap}
        showCtaButtons={true}
        containerPadding="py-20 md:py-32"
      />
      <ImageWithTextSection
        id="ai-recommender-promo"
        imageUrl={saasnextAiImage} 
        imageHint="AI helping business"
        altText="SaaSnext AI Service Recommender for Junagadh businesses"
        title="Need Guidance? Try Our AI Service Recommender!"
        titleIcon={Lightbulb}
        paragraphs={[
          "Unsure which of our services best fits your unique business needs in Junagadh? Let our intelligent AI Recommender analyze your requirements and provide personalized suggestions.",
          "Whether you're looking for cutting-edge website development, efficient AI SaaS solutions, or impactful lead generation strategies, get tailored advice in minutes to kickstart your project in Junagadh."
        ]}
        imagePosition="right"
        bgColor="bg-card/10"
        ctaText="Try AI Recommender"
        ctaLink="/recommendation"
      />
      <ImageWithTextSection
        id="catalyzing-vision"
        imageUrl={saasnextWeb2Image} 
        imageHint="innovation lightbulb"
        altText="SaaSnext: Catalyzing business vision in Junagadh with website development"
        title="Catalyzing Your Junagadh Business Vision"
        titleIcon={Zap} 
        paragraphs={[
          "At SaaSnext, we understand that every great business in Junagadh starts with a vision. As your dedicated webapp development company in Junagadh, our mission is to be the catalyst that transforms your innovative ideas into tangible, impactful digital solutions, specifically tailored for the local market.",
          "We leverage cutting-edge technology and strategic insights to build custom web platforms. Our AI SaaS development expertise helps implement intelligent AI automation, and our lead generation company in Junagadh drives effective growth for businesses aiming to thrive in Junagadh and beyond."
        ]}
        imagePosition="left"
        bgColor="bg-background"
        ctaText="Discover Our Approach"
        ctaLink="/about"
      />
      <WhyChooseUsSection />
      <WorkProcessSection />
      <ComprehensiveSolutionsSection /> 
      <ServicesOverviewSection />
      <PortfolioSection />
      <CallToActionSection />
    </>
  );
}

