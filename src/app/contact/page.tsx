
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ContactSection from '@/components/sections/contact-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Mail, MessageCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Web Development & AI Company in Junagadh | SaaSnext',
  description: "Contact our expert team in Junagadh today. As a leading web development and AI solutions company, we're ready to discuss your project needs and provide a tailored strategy for your success in Gujarat.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        pageTitle="Get In Touch with Our Junagadh Team"
        pageSubtitle="We're here to help your business in Junagadh and Gujarat. Whether you need web development, AI for business automation, or lead generation services, we're ready to help."
        tagline="Let's Talk"
        TaglineIcon={Mail}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <ImageWithTextSection
        id="ready-to-innovate"
        imageUrl="/saasnextweb.png"
        altText="A person interacting with an innovative interface from our web development company in Junagadh."
        title="Ready to Innovate in Junagadh?"
        titleIcon={MessageCircle}
        paragraphs={[
          "Your next big idea deserves a passionate team. As the top web development company in Junagadh, complemented by our expertise in AI solutions and lead generation, SaaSnext is poised to turn your vision into reality.",
          "Reach out to our Junagadh office to schedule a consultation. Let's explore how our digital strategies can catalyze your success."
        ]}
        imagePosition="left"
        bgColor="bg-card/30"
      />
      <ContactSection />
      <ImageWithTextSection
        id="local-support"
        imageUrl="/saasnextweb2.png"
        altText="Graphic showing dedicated client support from our AI solutions company in Junagadh."
        title="Dedicated Support for Our Junagadh Clients"
        titleIcon={Users}
        paragraphs={[
          "Our commitment extends beyond project delivery. We provide exceptional service and support for businesses in Junagadh. When you partner with SaaSnext, you gain a dedicated team from a top IT company invested in your long-term success.",
          "From website design to AI consulting and lead generation campaigns, we are your reliable partner in Junagadh every step of the way."
        ]}
        imagePosition="right"
        bgColor="bg-background"
      />
    </>
  );
}
