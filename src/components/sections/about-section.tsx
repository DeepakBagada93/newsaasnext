import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users, Target, Lightbulb, Award, Zap, ArrowRight, Building, Rocket, ShieldCheck, Handshake } from 'lucide-react';

export default function AboutSection() {
  const values = [
    { icon: Lightbulb, title: "Innovation", description: "We constantly explore new technologies and creative solutions to keep you ahead of the curve." },
    { icon: Users, title: "Client-Centric", description: "Your success is our priority. We tailor solutions to your unique needs and foster collaborative partnerships." },
    { icon: Award, title: "Excellence", description: "We are committed to delivering high-quality work and achieving outstanding, measurable results." },
    { icon: ShieldCheck, title: "Integrity", description: "We operate with transparency and honesty, building trust through every interaction." },
  ];

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Removed introductory "Our Story" block */}

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-stretch">
          <Card className="bg-card/50 shadow-xl flex flex-col">
            <CardHeader className="flex flex-row items-center space-x-3 pb-4">
              <Target className="h-10 w-10 text-primary flex-shrink-0" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                To ignite digital success for businesses of all sizes by providing cutting-edge web development, intelligent AI automation, and effective lead generation strategies. We strive to be a catalyst for growth, transforming visions into tangible realities and fostering sustainable success.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 shadow-xl flex flex-col">
            <CardHeader className="flex flex-row items-center space-x-3 pb-4">
              <Rocket className="h-10 w-10 text-primary flex-shrink-0" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                To be the leading partner for businesses seeking to navigate and thrive in the ever-evolving digital landscape. We aim to be recognized globally for our innovation, reliability, and the transformative impact we deliver to our clients.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16 py-12 bg-card/30 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Journey So Far</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center container mx-auto px-4 md:px-6">
            <div className="relative aspect-video">
              <Image
                src="/saasnextweb2.png"
                alt="SaaSnext collaborative team working on a project"
                data-ai-hint="teamwork office"
                fill
                style={{objectFit: "cover"}}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground">From Vision to Catalyst</h3>
              <p>
                Founded with a bold vision to bridge the gap between emerging technology and tangible business growth, SaaSnext Catalyst began as a small, dedicated team of digital enthusiasts. We recognized the immense potential of expertly crafted websites, the transformative power of AI, and the critical need for strategic lead generation in a competitive market.
              </p>
              <p>
                Over the years, we've evolved into a dynamic and agile company, empowering a diverse range of clients to achieve their digital ambitions. Our journey is one of continuous learning, strategic adaptation, and an unwavering commitment to excellence. We believe in forging long-term partnerships built on trust, transparency, and mutual success.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center bg-card/40 hover:shadow-primary/20 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col">
                <CardHeader className="items-center">
                  <div className="p-4 rounded-full bg-primary/10 text-primary w-fit mb-3">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mb-16 text-center p-8 bg-primary/5 rounded-lg">
          <h2 className="text-3xl font-bold text-primary mb-6">Why Choose SaaSnext?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <Zap className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Cutting-Edge Solutions</h4>
                <p className="text-muted-foreground text-sm">We leverage the latest technologies to deliver future-proof digital products.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Handshake className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Collaborative Partnership</h4>
                <p className="text-muted-foreground text-sm">We work closely with you, ensuring your vision is at the heart of our process.</p>
              </div>
            </div>
             <div className="flex items-start space-x-3">
              <Target className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Measurable Results</h4>
                <p className="text-muted-foreground text-sm">Our strategies are designed to deliver tangible outcomes and a strong ROI.</p>
              </div>
            </div>
          </div>
        </div>


        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Ready to discuss your project or learn more about how we can help you achieve your digital goals?
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
