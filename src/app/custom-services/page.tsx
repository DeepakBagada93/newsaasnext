
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ContactSection from '@/components/sections/contact-section';
import { Layers, Lightbulb, CheckCircle } from 'lucide-react';
import WorkProcessSection from '@/components/sections/work-process-section';

export const metadata: Metadata = {
  title: 'Custom Service | Web Development & AI Solutions in Junagadh | SaaSnext',
  description: 'Looking for a custom solution? Our web development and AI company in Junagadh offers tailored services to meet your unique project needs. Contact us for a consultation.',
};

export default function CustomServicesPage() {
  return (
    <>
      <HeroSection
        pageTitle="Tailored Solutions for Your Unique Needs"
        pageSubtitle="Have a project that doesn't fit a standard category? Our web development and AI company in Junagadh specializes in creating custom solutions to solve your specific challenges."
        tagline="Your Vision, Built to Spec"
        TaglineIcon={Layers}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      
      <section id="custom-offerings" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
              <Lightbulb className="w-9 h-9 mr-3 text-primary icon-glow-primary" />
              What We Can Build for You
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team of expert developers and strategists in Junagadh is ready to tackle any challenge. We combine creativity and technical expertise to deliver solutions that give you a competitive edge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card/30 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Custom Web Applications</h3>
              <p className="text-muted-foreground mb-4">From complex internal dashboards to unique customer-facing platforms, we build web apps that streamline operations and enhance user engagement.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" /><span>Bespoke CRM & ERP systems</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" /><span>Interactive portals & dashboards</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" /><span>Third-party API integrations</span></li>
              </ul>
            </div>
            <div className="bg-card/30 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Specialized AI & Automation</h3>
              <p className="text-muted-foreground mb-4">Leverage our AI expertise to solve unique problems, from automating niche workflows to developing custom predictive models for your industry in Gujarat.</p>
               <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" /><span>Custom machine learning models</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" /><span>Niche process automation (RPA)</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" /><span>AI-powered data analysis tools</span></li>
              </ul>
            </div>
            <div className="bg-card/30 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Unique Digital Products</h3>
              <p className="text-muted-foreground mb-4">Have an idea for a SaaS product or a unique digital service? Our team in Junagadh can help you design, build, and launch it successfully.</p>
               <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" /><span>MVP development for startups</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" /><span>Scalable SaaS architecture</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" /><span>Monetization & subscription models</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WorkProcessSection />
      
      <ContactSection />
    </>
  );
}
