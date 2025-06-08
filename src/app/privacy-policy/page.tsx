
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Privacy Policy for SaaSnext to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  const placeholderContent = [
    {
      title: "1. Information We Collect",
      points: [
        "Personal Information: When you use our services, contact us, or subscribe to our newsletter, we may collect personal information such as your name, email address, phone number, and company details.",
        "Usage Data: We may collect information about how you access and use our website and services, including IP address, browser type, operating system, pages viewed, and time spent on pages.",
        "Cookies and Tracking Technologies: We use cookies and similar tracking technologies to track activity on our Service and hold certain information."
      ]
    },
    {
      title: "2. How We Use Your Information",
      points: [
        "To provide and maintain our Service.",
        "To notify you about changes to our Service.",
        "To allow you to participate in interactive features of our Service when you choose to do so.",
        "To provide customer support.",
        "To gather analysis or valuable information so that we can improve our Service.",
        "To monitor the usage of our Service.",
        "To detect, prevent and address technical issues.",
        "To provide you with news, special offers, and general information about other goods, services, and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information."
      ]
    },
    {
      title: "3. Data Sharing and Disclosure",
      points: [
        "We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.",
        "We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety."
      ]
    },
    {
      title: "4. Data Security",
      points: [
        "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."
      ]
    },
    {
      title: "5. Your Data Protection Rights",
      points: [
        "Depending on your location, you may have certain rights regarding your personal data, such as the right to access, correct, delete, or restrict its processing. Please contact us to exercise these rights."
      ]
    },
    {
      title: "6. Changes to This Privacy Policy",
      points: [
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
        "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
      ]
    },
    {
      title: "7. Contact Us",
      points: [
        "If you have any questions about this Privacy Policy, please contact us at saasnextdb@gmail.com."
      ]
    }
  ];

  return (
    <>
      <HeroSection
        pageTitle="Privacy Policy"
        pageSubtitle="Understanding how SaaSnext handles your information."
        tagline="Your Privacy Matters"
        TaglineIcon={ShieldCheck}
        showCtaButtons={false}
        containerPadding="py-16 md:py-24"
      />
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="bg-card/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">SaaSnext Privacy Policy</CardTitle>
              <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p>
                SaaSnext (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the SaaSnext website (the &quot;Service&quot;). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
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
