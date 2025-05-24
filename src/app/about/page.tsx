
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
          "At SaaSnext, we foster a culture of collaboration, innovation, and continuous learning. Our diverse team of experts in website development, AI SaaS solutions, and marketing works in synergy, bringing together unique perspectives to solve complex challenges for our Junagadh clients.",
          "We believe that the best solutions emerge from open communication and a shared passion for excellence. This approach allows us to deliver cutting-edge solutions and build lasting partnerships, solidifying our role as a leading AI SaaS development company in Junagadh."
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
          "SaaSnext is proud to be a part of Junagadh's burgeoning tech scene. We are dedicated to empowering local businesses with world-class website development, innovative AI SaaS solutions, and effective lead generation services.",
          "Our goal is to contribute to the digital transformation of Junagadh, helping local enterprises thrive in the competitive online landscape and reach new heights of success with a trusted local partner."
        ]}
        imagePosition="left"
        bgColor="bg-background"
      />
    </>
  );
}
