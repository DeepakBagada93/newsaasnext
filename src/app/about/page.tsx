
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Building, Users, Briefcase } from 'lucide-react';
import saasnextWebImage from '@/public/saasnextweb.png';

export const metadata: Metadata = {
  title: 'About SaaSnext | Junagadh Website Development & AI SaaS Experts',
  description: 'Learn about SaaSnext Catalyst. We are a premier website development company in Junagadh, also specializing in AI SaaS development and targeted lead generation. Discover our mission, vision, and the passionate team driving innovation in Junagadh.',
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        pageTitle="About SaaSnext Catalyst"
        pageSubtitle="Your trusted partner for website development, AI SaaS solutions, and lead generation in Junagadh. Discover our story."
        tagline="Our Story"
        TaglineIcon={Building}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <AboutSection />
      <ImageWithTextSection
        id="our-team-culture"
        imageUrl={saasnextWebImage} 
        imageHint="diverse team collaborating"
        altText="SaaSnext team: experts in website development in Junagadh"
        title="Our Collaborative Culture for Junagadh Projects"
        titleIcon={Users}
        paragraphs={[
          "At SaaSnext, our collaborative culture is the cornerstone of delivering exceptional website development, AI SaaS, and lead generation solutions for our Junagadh clients. Our diverse team of experts works in synergy, bringing unique perspectives to solve your specific challenges.",
          "We believe that open communication and a shared passion for excellence lead to the best outcomes. This approach enables us to build cutting-edge digital products and foster lasting partnerships, solidifying our role as a leading AI SaaS development and website company in Junagadh."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
        ctaText="Meet Our Experts"
        ctaLink="/contact"
      />
      <ImageWithTextSection
        id="junagadh-focus"
        imageUrl={saasnextWebImage} 
        imageHint="junagadh cityscape"
        altText="SaaSnext: Your lead generation company in Junagadh"
        title="Committed to Junagadh's Growth"
        titleIcon={Briefcase}
        paragraphs={[
          "SaaSnext is deeply committed to Junagadh's dynamic tech scene. We empower local businesses with premier website development, innovative AI SaaS solutions, and strategic lead generation services, fueling their growth.",
          "Our mission is to drive the digital transformation of Junagadh. By partnering with us, local enterprises gain a competitive edge, thrive in the online landscape, and achieve new levels of success with a trusted local technology expert."
        ]}
        imagePosition="left"
        bgColor="bg-background"
      />
    </>
  );
}
