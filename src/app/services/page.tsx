
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import ProblemSolutionSection from '@/components/sections/problem-solution-section'; 
import { Settings, Zap, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Website Development, AI SaaS, Lead Generation Company',
  description: 'Explore services by SaaSnext: your expert local website development company. We also offer advanced AI SaaS development, strategic lead generation, and email marketing for businesses.',
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        pageTitle="Our Expert Services"
        pageSubtitle="Tailored website development, AI SaaS solutions, and lead generation to propel your business forward. Explore how we can help."
        tagline="Digital Solutions for Your Growth"
        TaglineIcon={Settings}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <ServicesSection />
      <ProblemSolutionSection /> 
      <ImageWithTextSection
        id="driving-transformation"
        imageUrl="/saasnextweb2.png" 
        imageHint="digital transformation abstract"
        altText="Digital transformation with SaaSnext"
        title="Driving Digital Transformation for Businesses"
        titleIcon={Zap}
        paragraphs={[
          "SaaSnext is at the forefront of driving digital transformation for businesses. Our comprehensive services—from cutting-edge website development to intelligent AI SaaS solutions and strategic lead generation—are integrated to deliver holistic results, revolutionizing your operations and market presence.",
          "Partner with a leading local website development and lead generation company. We harness technology to create seamless user experiences, automate for peak efficiency, and effectively connect you with your target audience, ensuring impactful growth."
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
                Solutions Tailored for Your Business
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-base md:text-lg">
                  We possess a deep understanding of unique market dynamics. This insight allows us to craft bespoke website development, AI SaaS, and lead generation services that precisely meet the needs of diverse enterprises, giving you a distinct advantage.
                </p>
                <p className="text-base md:text-lg">
                  Our dedicated team empowers businesses to leverage the latest digital tools for sustainable growth and competitive success. Partner with SaaSnext to build a stronger digital future for your enterprise.
                </p>
              </div>
            </div>
            {/* Right Column: New Relevant Text */}
            <div className="bg-card/30 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">The SaaSnext Advantage: Precision-Crafted Solutions</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">In-Depth Discovery</h4>
                    <p className="text-sm">We immerse ourselves in your business model, market, and objectives to ensure our solutions are perfectly aligned.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Strategic Customization</h4>
                    <p className="text-sm">Every feature and line of code is purposefully chosen to meet your specific operational needs and strategic goals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Future-Proof Scalability</h4>
                    <p className="text-sm">Our tailored webapps and AI systems are built to adapt and grow alongside your evolving business.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Dedicated Partnership & Support</h4>
                    <p className="text-sm">Beyond delivery, we provide ongoing support and strategic advice, acting as a true extension of your team.</p>
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
