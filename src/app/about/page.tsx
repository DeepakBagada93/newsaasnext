
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Building, Users, Briefcase, Lightbulb } from 'lucide-react'; // Added Lightbulb

export const metadata: Metadata = {
  title: 'About Our IT Company in Junagadh | SaaSnext',
  description: 'Learn about SaaSnext, a web development and AI company in Junagadh. Our mission is to empower businesses in Gujarat with innovative technology and expert lead generation services.',
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        pageTitle="About Our Web & AI Company in Junagadh"
        pageSubtitle="We are SaaSnext: a passionate team of local experts in Junagadh dedicated to building effective websites, innovative AI solutions, and effective lead generation strategies for Gujarat businesses."
        tagline="Your Local Junagadh IT Company"
        TaglineIcon={Building}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <AboutSection />
      <ImageWithTextSection
        id="our-team-culture"
        imageUrl="/saasnextweb.png"
        altText="Our diverse team collaborating at our web development company in Junagadh."
        title="Our Collaborative Culture for Your Success"
        titleIcon={Users}
        paragraphs={[
          "At SaaSnext, our collaborative culture is the cornerstone of our success as a web development and AI solutions company in Junagadh. Our team of local experts works in synergy to solve your challenges and deliver exceptional results.",
          "We believe open communication and a passion for excellence lead to the best outcomes. This approach enables our web development company to build cutting-edge digital products and our lead generation services to foster lasting partnerships in Junagadh."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
        ctaText="Meet Our Experts"
        ctaLink="/contact"
      />
      <ImageWithTextSection
        id="local-focus"
        imageUrl="/saasnextweb2.png"
        altText="A graphic representing our focus as a local lead generation company in Junagadh."
        title="Committed to Growth in Junagadh"
        titleIcon={Briefcase}
        paragraphs={[
          "At Saasnext, we’re more than just a web development company in Junagadh—we’re a partner in our community's success. We empower local entrepreneurs with the tools to compete globally. Our understanding of the Junagadh market allows our lead generation company to create strategies that resonate with your local audience."
        ]}
        imagePosition="left"
        bgColor="bg-background"
      />
      <ImageWithTextSection
        id="innovation-core"
        imageUrl="/saasnextai.png"
        altText="Abstract graphic illustrating the innovative AI services in Junagadh."
        title="AI Innovation at Our Core"
        titleIcon={Lightbulb}
        paragraphs={[
          "Innovation drives us. As an AI development company in Junagadh, we stay ahead of industry trends, integrating the latest technologies like machine learning and chatbot development. This commitment ensures your business stays competitive in the digital landscape of Gujarat."
        ]}
        imagePosition="right"
        bgColor="bg-card/30"
      />
    </>
  );
}
