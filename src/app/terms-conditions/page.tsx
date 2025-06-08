
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the Terms and Conditions for using SaaSnext services and website.',
};

export default function TermsConditionsPage() {
  const placeholderContent = [
    {
      title: "1. Agreement to Terms",
      points: [
        "By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.",
        "These Terms apply to all visitors, users, and others who wish to access or use the Service."
      ]
    },
    {
      title: "2. Use of Our Services",
      points: [
        "You agree to use our services for lawful purposes only and in a manner consistent with all applicable local, national, and international laws and regulations.",
        "You are responsible for maintaining the confidentiality of your account and password, if any, and for restricting access to your computer."
      ]
    },
    {
      title: "3. Intellectual Property",
      points: [
        "The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of SaaSnext and its licensors.",
        "Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of SaaSnext."
      ]
    },
    {
      title: "4. User Responsibilities",
      points: [
        "You agree not to misuse the Service or help anyone else to do so.",
        "You are responsible for any content you provide and the consequences thereof."
      ]
    },
    {
      title: "5. Disclaimer of Warranties",
      points: [
        "Our Service is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. SaaSnext makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content or materials included therein."
      ]
    },
    {
      title: "6. Limitation of Liability",
      points: [
        "In no event shall SaaSnext, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service."
      ]
    },
     {
      title: "7. Governing Law",
      points: [
        "These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions."
      ]
    },
    {
      title: "8. Changes to Terms",
      points: [
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect.",
        "By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms."
      ]
    },
    {
      title: "9. Contact Us",
      points: [
        "If you have any questions about these Terms, please contact us at saasnextdb@gmail.com."
      ]
    }
  ];

  return (
    <>
      <HeroSection
        pageTitle="Terms & Conditions"
        pageSubtitle="Please read these terms carefully before using our services."
        tagline="Service Guidelines"
        TaglineIcon={FileText}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="bg-card/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">SaaSnext Terms & Conditions</CardTitle>
               <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p>
                Welcome to SaaSnext. These terms and conditions outline the rules and regulations for the use of SaaSnext's Website, located at [Your Website URL]. By accessing this website we assume you accept these terms and conditions. Do not continue to use SaaSnext if you do not agree to take all of the terms and conditions stated on this page.
              </p>
              {placeholderContent.map((section, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    {section.points.map((point, pIndex) => (
                      <li key={pIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
