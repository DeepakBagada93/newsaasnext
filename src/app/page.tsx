
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import WorkProcessSection from '@/components/sections/work-process-section';
import ServicesOverviewSection from '@/components/sections/services-overview-section';
import CallToActionSection from '@/components/sections/call-to-action-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Zap, Lightbulb, Layers, Search, ArrowRight, CheckCircle } from 'lucide-react'; 
import ComprehensiveSolutionsSection from '@/components/sections/comprehensive-solutions-section';
import ProblemSolutionSection from '@/components/sections/problem-solution-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedServicesShowcaseSection from '@/components/sections/animated-services-showcase-section';


export const metadata: Metadata = {
  title: 'Top Web Development Company in Junagadh | AI & Lead Generation',
  description: "SaaSnext is the best web development company in Junagadh. We are a leading IT company in Junagadh, specializing in AI solutions, lead generation, and custom website design.",
};

export default function HomePage() {
  const homePageTitle = (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-8">
      Top Web Development Company in Junagadh, Gujarat
    </h1>
  );

  return (
    <>
      <HeroSection
        pageTitle={homePageTitle}
        pageSubtitle="As the leading web development company in Junagadh, SaaSnext offers premier AI solutions and lead generation services. We build custom web solutions to drive growth for businesses in Gujarat."
        tagline="Your Expert IT Company in Junagadh."
        TaglineIcon={Zap}
        showCtaButtons={true}
        containerPadding="py-20 md:py-32"
      />
      <AnimatedServicesShowcaseSection />
      <ImageWithTextSection
        id="ai-recommender-promo"
        imageUrl="/saasnextairecom.png"
        altText="AI solutions for businesses in Junagadh helping a user choose services."
        title="Get Expert Advice from Our AI Solutions Company in Junagadh"
        titleIcon={Lightbulb}
        paragraphs={[
          "Unsure what your business needs to succeed online? Our AI tool provides instant service recommendations.",
          "Whether you need a responsive website from the best web development company in Junagadh, AI for business automation, or B2B lead generation services, our AI recommender offers a personalized strategy. Get clarity and start your growth journey now."
        ]}
        imagePosition="right"
        bgColor="bg-card/10"
        ctaText="Get My Free AI Recommendation"
        ctaLink="/recommendation"
      />
      <ImageWithTextSection
        id="catalyzing-vision"
        imageUrl="/saasnextweb.png"
        altText="A professional from our web development company in Junagadh discussing a project."
        title="Your Vision, Amplified by the Top IT Company in Junagadh"
        titleIcon={Zap} 
        paragraphs={[
          "At SaaSnext, we turn your business vision into a digital reality. As your dedicated web development company in Junagadh, we build impactful digital solutions tailored for the Gujarat market and beyond.",
          "We use cutting-edge technology to build custom e-commerce and WordPress websites. Our AI solutions and lead generation services drive tangible growth for local businesses."
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
        imageUrl="/saasnextweb2.png"
        altText="Screenshot of a custom e-commerce website development in Junagadh."
        title="Custom Web Solutions for Junagadh Businesses"
        titleIcon={Layers}
        paragraphs={[
          "Off-the-shelf solutions don't work for everyone. As a specialized web development company in Junagadh, we understand the unique needs of local industries.",
          "SaaSnext excels at creating industry-specific web applications, from e-commerce website development to full-stack custom solutions. Our work enhances efficiency and drives success in your specific field.",
          "Ready for a custom webapp that sets you apart in the Junagadh market? Let's build it together."
        ]}
        imagePosition="right"
        bgColor="bg-card/10"
        ctaText="Discuss Your Custom Web Solution"
        ctaLink="/contact"
      />
      <ProblemSolutionSection />
      
      <section id="seo-growth-section" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center">
                <Search className="w-9 h-9 mr-3 text-primary icon-glow-primary" />
                Dominate Junagadh Search with Our Lead Generation Company
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                Is your business struggling to be found by customers in Junagadh? As the top lead generation company in Junagadh, we specialize in SEO strategies that put you at the top of local search results.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Our digital marketing agency in Junagadh provides SEO services that increase website traffic, enhance online visibility, and convert local searchers into loyal customers. Don't miss out on valuable leads in your area.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform duration-300 hover:scale-105">
                <Link href="/contact">
                  Boost Your Junagadh Leads <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            {/* Right Column */}
            <div className="bg-card/30 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">Our Lead Generation Services in Junagadh</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Local Keyword Mastery</h4>
                    <p className="text-sm">We target high-intent keywords like "web development company in Junagadh" and "AI services Gujarat" to attract qualified leads.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Complete SEO for Junagadh</h4>
                    <p className="text-sm">We combine on-page, off-page, and technical SEO, tailored for maximum impact in the Junagadh market.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Google Business Profile Optimization</h4>
                    <p className="text-sm">We maximize your visibility on Google Maps to capture local customers searching for your services in Junagadh.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Local Link Building</h4>
                    <p className="text-sm">Our lead generation company builds your online authority with high-quality citations and backlinks from local sources.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Measurable Results</h4>
                    <p className="text-sm">Receive clear reports on ranking improvements, traffic growth, and lead generation goals for your Junagadh business.</p>
                  </div>
                </li>
              </ul>
              <p className="text-base md:text-lg text-foreground mt-8 font-semibold">
                Partner with the top digital marketing agency in Junagadh.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </>
  );
}
