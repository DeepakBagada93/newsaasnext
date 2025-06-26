import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ContactSection from '@/components/sections/contact-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Mail, MessageCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | SaaSnext - Local Website & AI Development Company',
  description: 'Reach out to SaaSnext for top-tier local website development, custom AI SaaS solutions, and effective lead generation strategies. As a leading local company, let\'s connect.',
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        pageTitle="Get In Touch with Your Local Tech Partner"
        pageSubtitle="We're here to discuss your website development, AI SaaS, or lead generation needs. Reach out today!"
        tagline="Let's Talk"
        TaglineIcon={Mail}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <ImageWithTextSection
        id="ready-to-innovate"
        imageUrl="/saasnextweb.png"
        imageHint="innovation lightbulb"
        altText="Innovate with SaaSnext"
        title="Ready for Innovative Website Development?"
        titleIcon={MessageCircle}
        paragraphs={[
          "Your next big idea deserves a team as passionate as you are. As a leading local website development company, complemented by our expertise in AI SaaS solutions and lead generation, SaaSnext is poised to turn your vision into reality.",
          "Reach out to schedule a consultation. Let's explore how our tailored digital strategies can catalyze your success and elevate your business."
        ]}
        imagePosition="left"
        bgColor="bg-card/30"
      />
      <ContactSection />
      <ImageWithTextSection
        id="local-support"
        imageUrl="/saasnextweb2.png"
        imageHint="support team"
        altText="SaaSnext support for clients"
        title="Dedicated Support for Our Clients"
        titleIcon={Users}
        paragraphs={[
          "Our commitment extends beyond project delivery. We provide exceptional, ongoing service and support for all our clients. When you partner with SaaSnext, you gain a dedicated team invested in your long-term success.",
          "From initial consultations for website development and AI SaaS projects to continuous optimization of lead generation campaigns, our company is your reliable partner every step of the way."
        ]}
        imagePosition="right"
        bgColor="bg-background"
      />
    </>
  );
}
