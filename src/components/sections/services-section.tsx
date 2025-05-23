import ServiceCard from "@/components/common/service-card";
import { Globe, Cpu, Users, Search, ShoppingCart, Bot, LineChart, Palette } from "lucide-react";

const services = [
  {
    icon: Palette, // Changed from Globe
    title: "Web Development",
    description: "Crafting modern, responsive, and high-performance websites tailored to your unique business needs and brand identity, ensuring exceptional user experiences.",
    details: [
      "Custom responsive website design & development",
      "Full-stack solutions (React, Next.js, Node.js)",
      "E-commerce platforms (Shopify, WooCommerce, Custom)",
      "Content Management Systems (WordPress, Headless CMS)",
      "API design, development, and integration",
      "Performance optimization & Core Web Vitals focus",
      "Ongoing maintenance, support, and security",
      "Progressive Web App (PWA) development",
    ],
  },
  {
    icon: Bot, // Changed from Cpu
    title: "AI Automation",
    description: "Leveraging artificial intelligence to automate complex business processes, unlock insights from data, and create intelligent applications that enhance efficiency.",
    details: [
      "AI-powered chatbot development & integration",
      "Custom machine learning model development",
      "Workflow automation & robotic process automation (RPA)",
      "Natural Language Processing (NLP) solutions",
      "Data analysis, predictive modeling & forecasting",
      "AI strategy consulting and implementation",
      "Computer vision and image recognition systems",
      "Integration with existing enterprise systems",
    ],
  },
  {
    icon: LineChart, // Changed from Users
    title: "Lead Generation",
    description: "Identifying, attracting, and converting potential customers through targeted, data-driven marketing strategies and optimized sales funnels.",
    details: [
      "Comprehensive digital marketing strategy",
      "Search Engine Optimization (SEO) & content strategy",
      "Pay-Per-Click (PPC) advertising (Google, Social Media)",
      "Conversion Rate Optimization (CRO)",
      "Email marketing automation & campaigns",
      "Social media marketing & management",
      "Marketing analytics and performance tracking",
      "Sales funnel development and optimization",
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
            We provide a comprehensive suite of services designed to elevate your business in the digital landscape and drive sustainable growth.
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
