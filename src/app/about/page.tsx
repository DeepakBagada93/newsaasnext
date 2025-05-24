
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Building, Users, Briefcase } from 'lucide-react';
import saasnextWebImage from '@/public/saasnextweb.png'; // Import the image

export const metadata: Metadata = {
  title: 'About SaaSnext | Junagadh Website Development & AI Experts',
  description: 'Learn about SaaSnext Catalyst. We specialize in website development in Junagadh, AI SaaS development, and targeted lead generation. Discover our mission, vision, and the passionate team driving innovation in Junagadh.',
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        pageTitle="About SaaSnext Catalyst"
        pageSubtitle="Discover our mission, vision, and the passionate team dedicated to your digital success."
        tagline="Our Story"
        TaglineIcon={Building}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <AboutSection />
      <ImageWithTextSection
        id="our-team-culture"
        imageUrl={saasnextWebImage} // Use imported image
        imageHint="diverse team collaborating"
        altText="SaaSnext team working together"
        title="Our Collaborative Culture"
        titleIcon={Users}
        paragraphs={[
          "At SaaSnext, we foster a culture of collaboration, innovation, and continuous learning. Our diverse team of experts in website development, AI, and marketing works in synergy, bringing together unique perspectives to solve complex challenges.",
          "We believe that the best solutions emerge from open communication and a shared passion for excellence. This approach allows us to deliver cutting-edge solutions and build lasting partnerships with our clients in Junagadh and beyond."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
        ctaText="Meet Our Experts"
        ctaLink="/contact"
      />
      <ImageWithTextSection
        id="junagadh-focus"
        imageUrl={saasnextWebImage} // Use imported image
        imageHint="junagadh cityscape"
        altText="SaaSnext's commitment to Junagadh"
        title="Committed to Junagadh's Growth"
        titleIcon={Briefcase}
        paragraphs={[
          "SaaSnext is proud to be a part of Junagadh's burgeoning tech scene. We are dedicated to empowering local businesses with world-class website development, AI SaaS solutions, and effective lead generation services.",
          "Our goal is to contribute to the digital transformation of Junagadh, helping local enterprises thrive in the competitive online landscape and reach new heights of success."
        ]}
        imagePosition="left"
        bgColor="bg-background"
      />
    </>
  );
}
