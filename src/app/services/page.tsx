
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import ProblemSolutionSection from '@/components/sections/problem-solution-section'; // Import the new section
import { Settings, Zap, CheckCircle } from 'lucide-react';
import saasnextWeb2Image from '@/public/saasnextweb2.png'; 
import saasnextAiImage from '@/public/saasnextai.png';   

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
      <ProblemSolutionSection /> {/* Add the new section here */}
      <ImageWithTextSection
        id="driving-transformation"
        imageUrl={saasnextWeb2Image} 
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
       <ImageWithTextSection
        id="tailored-for-you"
        imageUrl={saasnextAiImage} 
        imageHint="local business success"
        altText="AI SaaS development tailored for your business"
        title="Solutions Tailored for Your Business"
        titleIcon={CheckCircle}
        paragraphs={[
          "We possess a deep understanding of unique market dynamics. This insight allows us to craft bespoke website development, AI SaaS, and lead generation services that precisely meet the needs of diverse enterprises, giving you a distinct advantage.",
          "Our dedicated team empowers businesses to leverage the latest digital tools for sustainable growth and competitive success. Partner with SaaSnext to build a stronger digital future for your enterprise."
        ]}
        imagePosition="right"
        bgColor="bg-background"
      />
    </>
  );
}
