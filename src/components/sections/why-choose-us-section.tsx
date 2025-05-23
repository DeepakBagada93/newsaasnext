import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, Lightbulb, BarChart3, CheckCircle, ShieldCheck, Gem } from "lucide-react";

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Expertise & Innovation",
      description: "Our seasoned team stays at the forefront of technology, delivering innovative and effective solutions that drive real-world results.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We prioritize your unique needs, working collaboratively as an extension of your team to achieve your specific business goals.",
    },
    {
      icon: BarChart3,
      title: "Results-Driven Strategies",
      description: "We focus on delivering measurable outcomes that contribute directly to your growth, efficiency, and overall success.",
    },
    {
      icon: Gem, // Changed from Zap to Gem for 'AI-Powered Excellence'
      title: "AI-Powered Excellence",
      description: "Leverage the transformative power of AI for process automation, smarter decision-making, and enhanced customer experiences.",
    },
  ];

  return (
    <section id="why-choose-us" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Partner with SaaSnext Catalyst?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're more than just a service provider; we're your dedicated partner in digital transformation, committed to your long-term success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="bg-card/50 hover:shadow-primary/20 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full">
              <CardHeader className="flex flex-col items-center text-center pb-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Our Commitment to You</h3>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-left">
                <div className="flex items-start p-4 bg-card/30 rounded-lg shadow-sm">
                    <ShieldCheck className="h-7 w-7 mr-3 mt-1 text-primary flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">Transparent Communication</h4>
                        <p className="text-muted-foreground text-sm">We believe in open dialogue, keeping you informed and involved every step of the way.</p>
                    </div>
                </div>
                <div className="flex items-start p-4 bg-card/30 rounded-lg shadow-sm">
                    <CheckCircle className="h-7 w-7 mr-3 mt-1 text-primary flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">Uncompromising Quality</h4>
                        <p className="text-muted-foreground text-sm">Rigorous testing and meticulous attention to detail ensure top-notch, reliable deliverables.</p>
                    </div>
                </div>
                <div className="flex items-start p-4 bg-card/30 rounded-lg shadow-sm">
                    <Zap className="h-7 w-7 mr-3 mt-1 text-primary flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">Future-Focused Partnership</h4>
                        <p className="text-muted-foreground text-sm">We aim to build lasting relationships, continuously supporting your evolving needs and growth.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
