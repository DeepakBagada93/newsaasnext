
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Building, Users, Briefcase, Lightbulb } from 'lucide-react'; // Added Lightbulb

export const metadata: Metadata = {
  title: 'About Our Company | SaaSnext - Local Web Development & AI Experts',
  description: 'Discover the story behind SaaSnext, a leading local website development company and AI solutions company. Learn about our mission to empower businesses with innovative technology and expert lead generation services.',
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        pageTitle="About Our Web & AI Company"
        pageSubtitle="We are SaaSnext: a passionate, local team of experts dedicated to building premier websites, innovative AI solutions, and effective lead generation strategies."
        tagline="Our Story"
        TaglineIcon={Building}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <AboutSection />
      <ImageWithTextSection
        id="our-team-culture"
        imageUrl="/saasnextweb.png"
        altText="Our diverse team collaborating on a project, showcasing the culture at our web development company."
        title="Our Collaborative Culture for Your Projects"
        titleIcon={Users}
        paragraphs={[
          "At SaaSnext, our collaborative culture is the cornerstone of our success as a leading web development and AI solutions company. Our diverse team of experts works in synergy, bringing unique perspectives to solve your specific challenges and deliver exceptional results.",
          "We believe that open communication and a shared passion for excellence lead to the best outcomes. This approach enables our web development company to build cutting-edge digital products and our lead generation company to foster lasting partnerships."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
        ctaText="Meet Our Experts"
        ctaLink="/contact"
      />
      <ImageWithTextSection
        id="local-focus"
        imageUrl="/saasnextweb2.png"
        altText="A graphic representing our focus as a local lead generation company helping community businesses."
        title="Committed to Local Growth"
        titleIcon={Briefcase}
        paragraphs={[
          "At Saasnext, we’re more than just a local web development company—we’re a partner in your community's success. We take pride in contributing to vibrant business ecosystems by empowering local entrepreneurs with tools to compete globally. Our deep understanding of local markets allows our lead generation company to create strategies that resonate with your audience."
        ]}
        imagePosition="left"
        bgColor="bg-background"
      />
      <ImageWithTextSection
        id="innovation-core"
        imageUrl="/saasnextai.png"
        altText="Abstract graphic illustrating the innovative core of our AI solutions company."
        title="Innovation at Our Core"
        titleIcon={Lightbulb}
        paragraphs={[
          "Innovation drives everything we do. As a leading local AI solutions company, we stay ahead of industry trends, integrating the latest technologies like machine learning and advanced analytics into our services. This commitment to innovation ensures that your business stays competitive in an ever-evolving digital landscape."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
      />
    </>
  );
}
