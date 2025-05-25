
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ContactSection from '@/components/sections/contact-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Mail, MessageCircle, Users } from 'lucide-react';
import saasnextWebImage from '@/public/saasnextweb.png'; 

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
          "Your next big idea deserves a team as passionate as you are. As a leading website development company in Junagadh, complemented by our expertise in AI SaaS solutions and lead generation, SaaSnext is poised to turn your vision into reality.",
          "Reach out to schedule a consultation. Let's explore how our tailored digital strategies can catalyze your success and elevate your business in Junagadh."
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
          "Our commitment to Junagadh extends beyond project delivery. We provide exceptional, ongoing service and support for all our clients. When you partner with SaaSnext, you gain a dedicated local team invested in your long-term success.",
          "From initial consultations for website development and AI SaaS projects to continuous optimization of lead generation campaigns, our Junagadh company is your reliable partner every step of the way."
        ]}
        imagePosition="right"
        bgColor="bg-background"
      />
    </>
  );
}
