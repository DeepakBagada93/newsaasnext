
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Building, Users, Briefcase, Lightbulb } from 'lucide-react'; // Added Lightbulb
import saasnextWebImage from '@/public/saasnextweb.png';
import saasnextWeb2Image from '@/public/saasnextweb2.png'; // Assuming this image is suitable for innovation

export const metadata: Metadata = {
  title: 'About SaaSnext | Local Website Development & AI SaaS Experts',
  description: 'Learn about SaaSnext Catalyst. We are a premier local website development company, also specializing in AI SaaS development and targeted lead generation. Discover our mission, vision, and the passionate team driving innovation.',
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        pageTitle="About SaaSnext Catalyst"
        pageSubtitle="Your trusted local partner for website development, AI SaaS solutions, and lead generation. Discover our story."
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
        altText="SaaSnext team: experts in local website development"
        title="Our Collaborative Culture for Your Projects"
        titleIcon={Users}
        paragraphs={[
          "At SaaSnext, our collaborative culture is the cornerstone of delivering exceptional website development, AI SaaS, and lead generation solutions for our clients. Our diverse team of experts works in synergy, bringing unique perspectives to solve your specific challenges.",
          "We believe that open communication and a shared passion for excellence lead to the best outcomes. This approach enables us to build cutting-edge digital products and foster lasting partnerships, solidifying our role as a leading local AI SaaS development and website company."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
        ctaText="Meet Our Experts"
        ctaLink="/contact"
      />
      <ImageWithTextSection
        id="local-focus"
        imageUrl={saasnextWebImage} 
        imageHint="thriving city"
        altText="SaaSnext: Your local lead generation company"
        title="Committed to Local Growth"
        titleIcon={Briefcase}
        paragraphs={[
          "At Saasnext, we’re more than just a local webapp development company—we’re a partner in your success. We take pride in contributing to vibrant business ecosystems by empowering entrepreneurs and businesses with tools to compete globally. Our deep understanding of local markets allows us to create solutions that resonate with diverse audiences, from retail to hospitality and beyond. By choosing Saasnext, you’re supporting a company dedicated to fostering economic growth within communities."
        ]}
        imagePosition="left"
        bgColor="bg-background"
      />
      <ImageWithTextSection
        id="innovation-core"
        imageUrl={saasnextWeb2Image} 
        imageHint="abstract technology innovation"
        altText="Innovation at SaaSnext - Local AI Solutions Company"
        title="Innovation at Our Core"
        titleIcon={Lightbulb}
        paragraphs={[
          "Innovation drives everything we do at Saasnext. As a leading local AI solutions company, we stay ahead of industry trends, integrating the latest technologies like machine learning, cloud computing, and advanced analytics into our services. Our team continuously explores new ways to enhance your webapps, streamline lead generation, and optimize social media campaigns. This commitment to innovation ensures that your business stays competitive in an ever-evolving digital landscape."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
      />
    </>
  );
}
