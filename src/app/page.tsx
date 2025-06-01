
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
  title: 'Premier Website & AI SaaS Development Company | SaaSnext',
  description: 'Choose SaaSnext, a top local website development company. We also specialize in AI SaaS development and strategic lead generation. Let\'s build your success.',
};

export default function HomePage() {
  const homePageTitle = (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-8">
      Ignite Your Business Growth: SaaSnext - Your Digital Catalyst.
    </h1>
  );

  return (
    <>
      <HeroSection
        pageTitle={homePageTitle}
        pageSubtitle="Partner with SaaSnext, your local Web Development, AI SaaS, and Lead Generation experts. We turn your vision into reality. Experience impactful digital momentum."
        tagline="Your Catalyst for Digital Excellence."
        TaglineIcon={Zap}
        showCtaButtons={true}
        containerPadding="py-20 md:py-32"
      />
      <ImageWithTextSection
        id="ai-recommender-promo"
        imageUrl={saasnextAiImage} 
        imageHint="AI helping business"
        altText="SaaSnext AI Service Recommender for local businesses"
        title="Unlock Your Success: Ask Our AI Recommender Now!"
        titleIcon={Lightbulb}
        paragraphs={[
          "Overwhelmed by choices for your business? Stop the guesswork! Our intelligent AI Recommender instantly analyzes your unique requirements, saving you time and confusion.",
          "Whether you need a stunning new website, powerful AI automation, or a flood of new leads, get a personalized, actionable service recommendation in minutes. This is your fast track to a winning strategy!"
        ]}
        imagePosition="right"
        bgColor="bg-card/10"
        ctaText="Get My Free AI Recommendation"
        ctaLink="/recommendation"
      />
      <ImageWithTextSection
        id="catalyzing-vision"
        imageUrl={saasnextWeb2Image} 
        imageHint="innovation lightbulb"
        altText="SaaSnext: Catalyzing business vision with local website development"
        title="Fueling Your Business Vision"
        titleIcon={Zap} 
        paragraphs={[
          "At SaaSnext, we understand that every great business starts with a vision. As your dedicated local webapp development company, our mission is to be the catalyst that turns your innovative ideas into tangible, impactful digital solutions, tailored for your market.",
          "We leverage cutting-edge technology and strategic insights to build custom web platforms. Our AI SaaS development expertise helps implement intelligent AI automation, and our local lead generation company drives effective growth for businesses aiming to thrive locally and beyond."
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
