import ServiceCard from "@/components/common/service-card";
import { Globe, Cpu, Users, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Crafting modern, responsive, and user-friendly websites tailored to your unique business needs and brand identity.",
    details: [
      "Custom website design and development",
      "E-commerce solutions and integrations",
      "Content Management Systems (CMS)",
      "Performance optimization and SEO",
    ],
  },
  {
    icon: Cpu,
    title: "AI Automation",
    description: "Leveraging artificial intelligence to automate complex business processes, enhancing efficiency and reducing operational costs.",
    details: [
      "AI-powered chatbot development",
      "Workflow automation solutions",
      "Data analysis and predictive modeling",
      "Custom AI model integration",
    ],
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Identifying and attracting potential customers through targeted marketing strategies and data-driven campaigns.",
    details: [
      "Digital marketing strategy development",
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) advertising",
      "Content marketing and social media",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a comprehensive suite of services to elevate your business in the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              details={service.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
