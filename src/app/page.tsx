
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import WorkProcessSection from '@/components/sections/work-process-section';
import ServicesOverviewSection from '@/components/sections/services-overview-section';
import CallToActionSection from '@/components/sections/call-to-action-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Zap, Lightbulb } from 'lucide-react';
import saasnextWeb2Image from '@/public/saasnextweb2.png'; // Import the image


export const metadata: Metadata = {
  title: 'Premier Website & AI SaaS Development Company in Junagadh | SaaSnext',
  description: 'Choose SaaSnext, the top website development company in Junagadh. We also specialize in AI SaaS development and strategic lead generation in Junagadh. Let\'s build your success.',
};

export default function HomePage() {
  const homePageTitle = (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-8">
      Igniting Your Digital Success in Junagadh
    </h1>
  );

  return (
    <>
      <HeroSection
        pageTitle={homePageTitle}
        pageSubtitle="As a leading website development, AI SaaS, and lead generation company in Junagadh, we empower businesses with cutting-edge solutions. Let's build your future, together."
        tagline="SaaSnext Catalyst"
        TaglineIcon={Zap}
        showCtaButtons={true}
        containerPadding="py-20 md:py-32"
      />
      <ImageWithTextSection
        id="catalyzing-vision"
        imageUrl={saasnextWeb2Image} 
        imageHint="innovation lightbulb"
        altText="SaaSnext: AI SaaS Development Company in Junagadh"
        title="Catalyzing Your Vision into Digital Reality"
        titleIcon={Lightbulb}
        paragraphs={[
          "At SaaSnext Catalyst, we understand that every great business starts with a vision. Our mission is to be the spark that transforms your innovative ideas into tangible, impactful digital solutions.",
          "We leverage cutting-edge technology and strategic insights to build custom web platforms, implement intelligent AI automation via our AI SaaS development expertise, and drive effective lead generation for businesses in Junagadh and beyond."
        ]}
        imagePosition="left"
        bgColor="bg-background"
        ctaText="Discover Our Approach"
        ctaLink="/about"
      />
      <WhyChooseUsSection />
      <WorkProcessSection />
      <ServicesOverviewSection />
      <PortfolioSection />
      <CallToActionSection />
    </>
  );
}
