
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import WorkProcessSection from '@/components/sections/work-process-section';
import ServicesOverviewSection from '@/components/sections/services-overview-section';
import CallToActionSection from '@/components/sections/call-to-action-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Zap, Lightbulb, Layers, Search } from 'lucide-react'; 
import saasnextWeb2Image from '@/public/saasnextweb2.png';
import saasnextAiImage from '@/public/saasnextairecom.png'; 
import ComprehensiveSolutionsSection from '@/components/sections/comprehensive-solutions-section';
import ProblemSolutionSection from '@/components/sections/problem-solution-section';


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
      <ImageWithTextSection
        id="industry-specific-webapps"
        imageUrl={saasnextWeb2Image}
        imageHint="diverse business sectors"
        altText="Custom webapp development for diverse industries by SaaSnext"
        title="Tailored Webapps for Every Industry"
        titleIcon={Layers}
        paragraphs={[
          "Generic web solutions often fall short, failing to meet the unique operational demands and customer engagement strategies required by diverse sectors such as retail, healthcare, education, or manufacturing.",
          "SaaSnext excels as a specialized webapp development company, creating industry-specific applications that significantly enhance efficiency and customer interaction. From sophisticated e-commerce platforms to secure patient portals or interactive educational tools, our solutions are engineered to drive success within your specific field.",
          "Are you ready to equip your business with a custom webapp designed to lead your industry? Let's build the solution that sets you apart."
        ]}
        imagePosition="right"
        bgColor="bg-card/10"
        ctaText="Discuss Your Industry App"
        ctaLink="/contact"
      />
      <ProblemSolutionSection />
      <ImageWithTextSection
        id="seo-growth-section"
        imageUrl={saasnextWeb2Image}
        imageHint="search engine optimization strategy"
        altText="SaaSnext enhancing online visibility with SEO strategies"
        title="Boost Your Visibility with Expert SEO"
        titleIcon={Search}
        paragraphs={[
          "Is your business struggling to get noticed online? Effective Search Engine Optimization (SEO) is crucial for attracting organic traffic and reaching your target audience.",
          "SaaSnext provides comprehensive SEO services, from local SEO for community-focused businesses to advanced strategies for competitive markets. We help you climb search rankings, increase website traffic, and convert visitors into loyal customers.",
          "Let us optimize your digital presence and unlock sustainable growth for your business."
        ]}
        imagePosition="left"
        bgColor="bg-background"
        ctaText="Enhance Your SEO"
        ctaLink="/contact"
      />
      <CallToActionSection />
    </>
  );
}
