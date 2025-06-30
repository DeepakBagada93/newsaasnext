
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ContactSection from '@/components/sections/contact-section';
import ImageWithTextSection from '@/components/sections/image-with-text-section';
import { Mail, MessageCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Our Web Development & AI Solutions Company | SaaSnext',
  description: "Contact our expert team today. As a leading web development and AI solutions company, we're ready to discuss your project needs and provide a tailored strategy for your success. Let's build something great together.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        pageTitle="Get In Touch with Our Tech Experts"
        pageSubtitle="We're here to discuss your needs. Whether you're looking for a web development company, an AI solution company, or a lead generation company, we're ready to help."
        tagline="Let's Talk"
        TaglineIcon={Mail}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <ImageWithTextSection
        id="ready-to-innovate"
        imageUrl="/saasnextweb.png"
        altText="A person interacting with an innovative interface, representing our web development company's capabilities."
        title="Ready to Innovate?"
        titleIcon={MessageCircle}
        paragraphs={[
          "Your next big idea deserves a team as passionate as you are. As a leading local web development company, complemented by our expertise as an AI solutions company and lead generation company, SaaSnext is poised to turn your vision into reality.",
          "Reach out to schedule a consultation. Let's explore how our tailored digital strategies can catalyze your success and elevate your business."
        ]}
        imagePosition="left"
        bgColor="bg-card/30"
      />
      <ContactSection />
      <ImageWithTextSection
        id="local-support"
        imageUrl="/saasnextweb2.png"
        altText="Graphic showing dedicated client support from our AI solutions company."
        title="Dedicated Support for Our Clients"
        titleIcon={Users}
        paragraphs={[
          "Our commitment extends beyond project delivery. We provide exceptional, ongoing service and support. When you partner with SaaSnext, you gain a dedicated team from a top web development company invested in your long-term success.",
          "From initial consultations for website development and AI SaaS projects to continuous optimization of campaigns by our lead generation company, we are your reliable partner every step of the way."
        ]}
        imagePosition="right"
        bgColor="bg-background"
      />
    </>
  );
}
