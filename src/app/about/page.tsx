
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Building, Users, Briefcase, Lightbulb } from 'lucide-react'; // Added Lightbulb
import saasnextWebImage from '@/public/saasnextweb.png';
import saasnextWeb2Image from '@/public/saasnextweb2.png'; // Assuming this image is suitable for innovation

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
          "At Saasnext, we’re more than just a webapp development company in Junagadh—we’re a partner in your success. We take pride in contributing to Junagadh’s vibrant business ecosystem by empowering local entrepreneurs and businesses with tools to compete globally. Our deep understanding of the local market allows us to create solutions that resonate with Junagadh’s diverse audience, from retail to hospitality and beyond. By choosing Saasnext, you’re supporting a local company dedicated to fostering economic growth in our community."
        ]}
        imagePosition="left"
        bgColor="bg-background"
      />
      <ImageWithTextSection
        id="innovation-core"
        imageUrl={saasnextWeb2Image} 
        imageHint="abstract technology innovation"
        altText="Innovation at SaaSnext - AI Solutions Company in Junagadh"
        title="Innovation at Our Core"
        titleIcon={Lightbulb}
        paragraphs={[
          "Innovation drives everything we do at Saasnext. As a leading AI solutions company in Junagadh, we stay ahead of industry trends, integrating the latest technologies like machine learning, cloud computing, and advanced analytics into our services. Our team continuously explores new ways to enhance your webapps, streamline lead generation, and optimize social media campaigns. This commitment to innovation ensures that your business stays competitive in an ever-evolving digital landscape."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
      />
    </>
  );
}
