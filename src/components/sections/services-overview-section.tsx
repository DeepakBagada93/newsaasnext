import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Palette, Bot, LineChart, ArrowRight, MailCheck } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Palette,
    title: "Web Development",
    description: "Building high-performance, scalable, and engaging websites and web applications.",
    href: "/services#web-development"
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Implementing intelligent automation to streamline operations and unlock new capabilities.",
    href: "/services#ai-automation"
  },
  {
    icon: LineChart,
    title: "Lead Generation",
    description: "Driving growth through targeted strategies that attract and convert high-quality leads.",
    href: "/services#lead-generation"
  },
  {
    icon: MailCheck,
    title: "Email Marketing",
    description: "Engaging your audience and nurturing leads with targeted email campaigns.",
    href: "/services#email-marketing"
  }
];

export default function ServicesOverviewSection() {
  return (
    <section id="services-overview" className="w-full py-16 md:py-24 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core Solutions We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering your business with cutting-edge technology and strategic insights.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.title} className="bg-card/50 hover:shadow-primary/10 hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full">
              <CardHeader className="flex flex-row items-start space-x-4 pb-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-foreground mb-1">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                 {/* Placeholder for potential future content inside card if needed */}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105">
            <Link href="/services">
              Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
