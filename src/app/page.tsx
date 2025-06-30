
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
  title: 'SaaSnext: Premier Website Development, AI & Lead Generation Company',
  description: "Partner with SaaSnext, a premier local website development company. We excel in AI SaaS development and results-driven lead generation. Discover how our expert solutions can elevate your business.",
};

export default function HomePage() {
  const homePageTitle = (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-8">
      Premier Web Development, AI & Lead Generation Company
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
      <AnimatedServicesShowcaseSection />
      <ImageWithTextSection
        id="ai-recommender-promo"
        imageUrl="/saasnextairecom.png"
        altText="AI Recommender tool from our AI solutions company helping a user choose services."
        title="Unlock Your Success: Ask Our AI Recommender Now!"
        titleIcon={Lightbulb}
        paragraphs={[
          "Overwhelmed by choices for your business? Stop the guesswork! Our intelligent AI Recommender instantly analyzes your unique requirements, saving you time and confusion.",
          "Whether you need a stunning new website from an expert web development company, powerful automation from an AI solution company, or a flood of new leads from a top lead generation company, get a personalized, actionable service recommendation in minutes. This is your fast track to a winning strategy!"
        ]}
        imagePosition="right"
        bgColor="bg-card/10"
        ctaText="Get My Free AI Recommendation"
        ctaLink="/recommendation"
      />
      <ImageWithTextSection
        id="catalyzing-vision"
        imageUrl="/saasnextweb.png"
        altText="A professional from our web development company discussing a project plan."
        title="Fueling Your Business Vision"
        titleIcon={Zap} 
        paragraphs={[
          "At SaaSnext, we understand that every great business starts with a vision. As your dedicated local web development company, our mission is to be the catalyst that turns your innovative ideas into tangible, impactful digital solutions, tailored for your market.",
          "We leverage cutting-edge technology and strategic insights to build custom web platforms. Our AI solutions company expertise helps implement intelligent automation, and our local lead generation company drives effective growth for businesses aiming to thrive locally and beyond."
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
        altText="Screenshot of a custom web application developed by our web development company."
        title="Tailored Webapps for Every Industry"
        titleIcon={Layers}
        paragraphs={[
          "Generic web solutions often fall short. As a specialized web development company, we recognize that diverse sectors like retail, healthcare, or manufacturing require unique operational demands and customer engagement strategies.",
          "SaaSnext excels at creating industry-specific applications that significantly enhance efficiency and customer interaction. From sophisticated e-commerce platforms to secure patient portals, our solutions are engineered by an expert web development company to drive success within your specific field.",
          "Are you ready to equip your business with a custom webapp designed to lead your industry? Let's build the solution that sets you apart."
        ]}
        imagePosition="right"
        bgColor="bg-card/10"
        ctaText="Discuss Your Industry App"
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
                Dominate Search with Our Lead Generation Company
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                Is your business struggling to get noticed online? Effective Search Engine Optimization (SEO) is a critical component of any successful lead generation strategy. Without a strong online presence, you're missing out on valuable local customers actively searching for your services.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                As a leading lead generation company with a focus on SEO, SaaSnext provides comprehensive services to dominate local search results. We help businesses like yours increase website traffic, enhance visibility, and convert visitors into loyal customers.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform duration-300 hover:scale-105">
                <Link href="/contact">
                  Boost Your Lead Generation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            {/* Right Column */}
            <div className="bg-card/30 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">Our SEO Services for Lead Generation</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Local Keyword Mastery</h4>
                    <p className="text-sm">Our lead generation company identifies high-intent keywords your customers use, like "web development company near me" or "AI solution company for small business."</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Holistic SEO Strategy</h4>
                    <p className="text-sm">We combine on-page, off-page, and technical SEO, tailoring every aspect for maximum local impact and lead generation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Google Business Profile Optimization</h4>
                    <p className="text-sm">We maximize your visibility on Google Maps and in local search results to capture geographically-relevant leads.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Authoritative Link Building</h4>
                    <p className="text-sm">Our lead generation company builds your online authority with high-quality local citations and backlinks.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Transparent & Measurable Results</h4>
                    <p className="text-sm">Receive clear reports on ranking improvements, traffic growth, and the direct impact on your lead generation goals.</p>
                  </div>
                </li>
              </ul>
              <p className="text-base md:text-lg text-foreground mt-8 font-semibold">
                Partner with us to make your business the top choice for local customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </>
  );
}
