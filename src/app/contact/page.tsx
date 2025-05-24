
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ContactSection from '@/components/sections/contact-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Mail, MessageCircle, Users } from 'lucide-react';
import saasnextWebImage from '@/src/public/saasnextweb.png'; 

export const metadata: Metadata = {
  title: 'Contact Us | SaaSnext - Junagadh Website & AI Development Company',
  description: 'Reach out to SaaSnext for top-tier website development in Junagadh, custom AI SaaS solutions, and effective lead generation strategies. As a leading company in Junagadh, let\'s connect.',
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        pageTitle="Get In Touch with Your Junagadh Tech Partner"
        pageSubtitle="We're here to discuss your website development, AI SaaS, or lead generation needs in Junagadh. Reach out today!"
        tagline="Let's Talk"
        TaglineIcon={Mail}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <ImageWithTextSection
        id="ready-to-innovate"
        imageUrl={saasnextWebImage} 
        imageHint="innovation lightbulb"
        altText="Innovate with SaaSnext in Junagadh"
        title="Ready for Innovative Website Development in Junagadh?"
        titleIcon={MessageCircle}
        paragraphs={[
          "Your next big idea deserves a team that's as passionate about it as you are. Whether you're looking for a website development company in Junagadh, advanced AI SaaS solutions, or a powerful lead generation company in Junagadh, we're ready to listen.",
          "Contact us to schedule a consultation. Let's discuss your vision and how SaaSnext can be the catalyst for your digital success in Junagadh."
        ]}
        imagePosition="left"
        bgColor="bg-card/30"
      />
      <ContactSection />
      <ImageWithTextSection
        id="junagadh-support"
        imageUrl={saasnextWebImage} 
        imageHint="support team Junagadh"
        altText="SaaSnext support for Junagadh clients"
        title="Dedicated Support for Junagadh Clients"
        titleIcon={Users}
        paragraphs={[
          "We are committed to providing exceptional service and support to our clients in Junagadh. When you partner with SaaSnext, you gain a dedicated team focused on your success.",
          "From initial consultation for your website development or AI SaaS project to ongoing support for lead generation campaigns, our Junagadh-based company is here for you every step of the way."
        ]}
        imagePosition="right"
        bgColor="bg-background"
      />
    </>
  );
}
