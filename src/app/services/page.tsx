
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Settings, Zap, CheckCircle } from 'lucide-react';
import saasnextWeb2Image from '@/public/saasnextweb2.png'; 
import saasnextAiImage from '@/public/saasnextai.png';   

export const metadata: Metadata = {
  title: 'Services | Website Development, AI SaaS, Lead Generation Company in Junagadh',
  description: 'Explore services by SaaSnext: your expert website development company in Junagadh. We also offer advanced AI SaaS development, strategic lead generation, and email marketing for Junagadh businesses.',
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        pageTitle="Our Expert Services in Junagadh"
        pageSubtitle="Tailored website development, AI SaaS solutions, and lead generation to propel your Junagadh business forward. Explore how we can help."
        tagline="Digital Solutions for Junagadh"
        TaglineIcon={Settings}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <ServicesSection />
      <ImageWithTextSection
        id="driving-transformation"
        imageUrl={saasnextWeb2Image} 
        imageHint="digital transformation abstract"
        altText="Digital transformation with SaaSnext in Junagadh"
        title="Driving Digital Transformation for Junagadh Businesses"
        titleIcon={Zap}
        paragraphs={[
          "At SaaSnext, our comprehensive suite of services, from cutting-edge website development in Junagadh to intelligent AI SaaS development and strategic lead generation, is designed to work in concert. We deliver holistic digital solutions that transform your business operations and market presence.",
          "Partner with us, a leading lead generation company in Junagadh, to harness the power of technology. We focus on creating seamless user experiences, automating for efficiency, and connecting you with your target audience effectively."
        ]}
        imagePosition="left"
        bgColor="bg-card/30"
        ctaText="Discuss Your Project"
        ctaLink="/contact"
      />
       <ImageWithTextSection
        id="tailored-for-junagadh"
        imageUrl={saasnextAiImage} 
        imageHint="local business Junagadh"
        altText="AI SaaS development tailored for Junagadh"
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
