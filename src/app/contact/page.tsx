
import HeroSection from '@/components/sections/hero-section';
import ContactSection from '@/components/sections/contact-section';
import { Mail } from 'lucide-react';

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
      <ContactSection />
    </>
  );
}
