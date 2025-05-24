
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import WorkProcessSection from '@/components/sections/work-process-section';
import ServicesOverviewSection from '@/components/sections/services-overview-section';
import CallToActionSection from '@/components/sections/call-to-action-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section'; // Import the new section
import { Zap, Lightbulb } from 'lucide-react'; // Added Lightbulb for the new section

export const metadata: Metadata = {
  title: 'Premier Website & AI SaaS Development in Junagadh | SaaSnext',
  description: 'Choose SaaSnext for leading website development, innovative AI SaaS solutions, and strategic lead generation in Junagadh. Let\'s build your success.',
};

export default function HomePage() {
  const homePageTitle = (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-8">
      Igniting Your Digital Success
    </h1>
  );

  return (
    <>
      <HeroSection
        pageTitle={homePageTitle}
        pageSubtitle="We empower businesses with cutting-edge Web Development, AI-driven Automation, and strategic Lead Generation. Let's build your future, together."
        tagline="SaaSnext Catalyst"
        TaglineIcon={Zap}
        showCtaButtons={true}
        containerPadding="py-20 md:py-32"
      />
      <ImageWithTextSection
        id="catalyzing-vision"
        imageUrl="https://placehold.co/600x400.png"
        imageHint="innovation lightbulb"
        altText="Abstract image representing innovation and vision"
        title="Catalyzing Your Vision into Digital Reality"
        titleIcon={Lightbulb}
        paragraphs={[
          "At SaaSnext Catalyst, we understand that every great business starts with a vision. Our mission is to be the spark that transforms your innovative ideas into tangible, impactful digital solutions.",
          "We leverage cutting-edge technology and strategic insights to build custom web platforms, implement intelligent AI automation, and drive effective lead generation, tailored for success in Junagadh and beyond."
        ]}
        imagePosition="left"
        bgColor="bg-background" // Or bg-card/10 if preferred
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
