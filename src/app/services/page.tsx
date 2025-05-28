
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import ProblemSolutionSection from '@/components/sections/problem-solution-section'; // Import the new section
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
      <ProblemSolutionSection /> {/* Add the new section here */}
      <ImageWithTextSection
        id="driving-transformation"
        imageUrl={saasnextWeb2Image} 
        imageHint="digital transformation abstract"
        altText="Digital transformation with SaaSnext in Junagadh"
        title="Driving Digital Transformation for Junagadh Businesses"
        titleIcon={Zap}
        paragraphs={[
          "SaaSnext is at the forefront of driving digital transformation for businesses in Junagadh. Our comprehensive services—from cutting-edge website development to intelligent AI SaaS solutions and strategic lead generation—are integrated to deliver holistic results, revolutionizing your operations and market presence.",
          "Partner with a leading website development and lead generation company in Junagadh. We harness technology to create seamless user experiences, automate for peak efficiency, and effectively connect you with your target audience, ensuring impactful growth."
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
          "We possess a deep understanding of Junagadh's unique market dynamics. This insight allows us to craft bespoke website development, AI SaaS, and lead generation services that precisely meet the needs of local enterprises, giving you a distinct advantage.",
          "Our dedicated team empowers Junagadh businesses to leverage the latest digital tools for sustainable growth and competitive success. Partner with SaaSnext to build a stronger digital future for your enterprise in Junagadh."
        ]}
        imagePosition="right"
        bgColor="bg-background"
      />
    </>
  );
}
