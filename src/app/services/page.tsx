
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Settings, Zap, CheckCircle } from 'lucide-react';
import saasnextWeb2Image from '@/public/saasnextweb2.png'; // Import image
import saasnextAiImage from '@/public/saasnextai.png';   // Import image

export const metadata: Metadata = {
  title: 'Services | Website Development, AI SaaS, Lead Generation in Junagadh',
  description: 'Explore services by SaaSnext in Junagadh: expert website development, advanced AI SaaS development, strategic lead generation, and comprehensive email marketing for your Junagadh based business.',
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        pageTitle="Our Expert Services"
        pageSubtitle="Tailored solutions to propel your business forward in the digital age. Explore how we can help you achieve your goals in Junagadh and beyond."
        tagline="Digital Solutions"
        TaglineIcon={Settings}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <ServicesSection />
      <ImageWithTextSection
        id="driving-transformation"
        imageUrl={saasnextWeb2Image} // Use imported image
        imageHint="digital transformation abstract"
        altText="Abstract representation of digital transformation"
        title="Driving Your Digital Transformation"
        titleIcon={Zap}
        paragraphs={[
          "At SaaSnext, our comprehensive suite of services, from cutting-edge website development to intelligent AI automation and strategic lead generation, is designed to work in concert. We deliver holistic digital solutions that transform your business operations and market presence.",
          "Partner with us to harness the power of technology. We focus on creating seamless user experiences, automating for efficiency, and connecting you with your target audience in Junagadh effectively."
        ]}
        imagePosition="left"
        bgColor="bg-card/30"
        ctaText="Discuss Your Project"
        ctaLink="/contact"
      />
       <ImageWithTextSection
        id="tailored-for-junagadh"
        imageUrl={saasnextAiImage} // Use imported image
        imageHint="local business Junagadh"
        altText="Illustrating services tailored for Junagadh businesses"
        title="Solutions Tailored for Junagadh Businesses"
        titleIcon={CheckCircle}
        paragraphs={[
          "Understanding the unique market dynamics of Junagadh, we craft our website development, AI SaaS, and lead generation services to meet the specific needs of local enterprises.",
          "Our team is committed to helping Junagadh businesses leverage the latest digital tools to grow, compete, and succeed. Let's build a stronger digital future for Junagadh together."
        ]}
        imagePosition="right"
        bgColor="bg-background"
      />
    </>
  );
}
