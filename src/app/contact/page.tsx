
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ContactSection from '@/components/sections/contact-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Mail, MessageCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | SaaSnext - Junagadh Web & AI Development',
  description: 'Reach out to SaaSnext for top-tier website development in Junagadh, custom AI SaaS solutions, and effective lead generation strategies for your Junagadh business. Let\'s connect.',
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        pageTitle="Get In Touch"
        pageSubtitle="We're here to answer your questions and discuss how we can collaborate. Reach out to us today!"
        tagline="Let's Talk"
        TaglineIcon={Mail}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <ImageWithTextSection
        id="ready-to-innovate"
        imageUrl="https://placehold.co/600x400.png"
        imageHint="innovation lightbulb"
        altText="Lightbulb symbolizing innovation"
        title="Ready to Innovate Together?"
        titleIcon={MessageCircle}
        paragraphs={[
          "Your next big idea deserves a team that's as passionate about it as you are. Whether you're looking for website development in Junagadh, AI SaaS solutions, or powerful lead generation, we're ready to listen and explore the possibilities.",
          "Contact us to schedule a consultation. Let's discuss your vision and how SaaSnext can be the catalyst for your digital success in Junagadh."
        ]}
        imagePosition="left"
        bgColor="bg-card/30"
      />
      <ContactSection />
      <ImageWithTextSection
        id="junagadh-support"
        imageUrl="https://placehold.co/600x400.png"
        imageHint="support team Junagadh"
        altText="SaaSnext support for Junagadh clients"
        title="Dedicated Support for Junagadh Clients"
        titleIcon={Users}
        paragraphs={[
          "We are committed to providing exceptional service and support to our clients in Junagadh. When you partner with SaaSnext, you gain a dedicated team focused on your success.",
          "From initial consultation for your website development or AI SaaS project to ongoing support for lead generation campaigns, we're here for your Junagadh business every step of the way."
        ]}
        imagePosition="right"
        bgColor="bg-background"
      />
    </>
  );
}
