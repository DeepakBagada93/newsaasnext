
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import ProblemSolutionSection from '@/components/sections/problem-solution-section'; 
import { Settings, Zap, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services: Web Development & AI Company in Junagadh | SaaSnext',
  description: 'Explore our expert services in Junagadh. As a web development company, we offer custom webapps, AI solutions, and strategic lead generation to drive business growth in Gujarat.',
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        pageTitle="Web Development & AI Services in Junagadh"
        pageSubtitle="As a web development company and AI solutions provider in Junagadh, we deliver tailored digital strategies. Explore how our lead generation and development services can help your Gujarat business succeed."
        tagline="Digital Solutions for Your Growth in Junagadh"
        TaglineIcon={Settings}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <ServicesSection />
      <ProblemSolutionSection /> 
      <ImageWithTextSection
        id="driving-transformation"
        imageUrl="/saasnextai.png"
        altText="Abstract graphic illustrating digital transformation driven by our AI solutions company in Junagadh."
        title="Driving Digital Transformation for Junagadh Businesses"
        titleIcon={Zap}
        paragraphs={[
          "Our AI solutions company in Junagadh is at the forefront of driving digital transformation. Our comprehensive services—from our web development company's cutting-edge websites to our lead generation company's strategic campaigns—are integrated to deliver holistic results for your business.",
          "Partner with a web development and lead generation company in Junagadh. We harness technology to create seamless user experiences, automate for peak efficiency, and connect you with your target audience."
        ]}
        imagePosition="left"
        bgColor="bg-card/30"
        ctaText="Discuss Your Project"
        ctaLink="/contact"
      />
      {/* New Custom Section for "Tailored Solutions" */}
      <section id="tailored-for-you" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column: Existing Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center">
                <CheckCircle className="w-9 h-9 mr-3 text-primary icon-glow-primary" />
                Solutions by Our Web Development Company in Junagadh
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-base md:text-lg">
                  As a web development company in Junagadh, we possess a deep understanding of the Gujarat market. This insight allows us to craft bespoke solutions that give you a distinct advantage.
                </p>
                <p className="text-base md:text-lg">
                  Our dedicated team empowers businesses to leverage the latest digital tools for sustainable growth. Partner with our web development company to build a stronger digital future.
                </p>
              </div>
            </div>
            {/* Right Column: New Relevant Text */}
            <div className="bg-card/30 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">The SaaSnext Advantage: Junagadh-Focused Solutions</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Local Market Discovery</h4>
                    <p className="text-sm">Our web development company immerses itself in your Junagadh business model to ensure our solutions are perfectly aligned.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Strategic Customization</h4>
                    <p className="text-sm">Every feature is chosen to meet your specific needs, from AI for business automation in Junagadh to local lead generation tactics.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Future-Proof Scalability</h4>
                    <p className="text-sm">The systems built by our web development and AI solutions company in Junagadh are designed to grow with your business.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Dedicated Partnership in Junagadh</h4>
                    <p className="text-sm">Beyond delivery, our web development company provides ongoing support, acting as a true extension of your local team.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
