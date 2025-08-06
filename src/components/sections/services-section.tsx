
import ServiceCard from "@/components/common/service-card";
import { Globe, Cpu, Users, Search, ShoppingCart, Bot, LineChart, Palette, MailCheck, Brush } from "lucide-react"; // Added Brush

const services = [
  {
    id: "web-development", // Added ID for deep linking
    icon: Palette, 
    title: "Web Development in Junagadh",
    description: "As a skilled web development company in Junagadh, we craft modern, responsive, and high-performance websites and full-stack applications.",
    details: [
      "Custom responsive website design for Junagadh businesses",
      "Full-stack solutions (React, Next.js, Node.js)",
      "E-commerce website development in Junagadh",
      "WordPress development and customization",
      "API design, development, and integration",
      "Performance optimization for fast loading speeds",
      "Ongoing maintenance and security for websites",
      "UI/UX design for superior user experience in Junagadh",
    ],
  },
  {
    id: "ai-automation", // Added ID
    icon: Bot, 
    title: "AI Services in Junagadh",
    description: "Our AI development company in Junagadh leverages artificial intelligence to automate processes, unlock data insights, and create intelligent applications.",
    details: [
      "AI for business automation in Junagadh",
      "Custom machine learning model development",
      "Chatbot development company services in Junagadh",
      "Natural Language Processing (NLP) solutions",
      "Data analytics services and predictive modeling",
      "AI consulting for businesses in Gujarat",
      "Computer vision and image recognition systems",
      "AI integration with existing enterprise systems",
    ],
  },
  {
    id: "lead-generation", // Added ID
    icon: LineChart, 
    title: "Lead Generation in Junagadh",
    description: "As a local lead generation company in Junagadh, we attract and convert customers through data-driven digital marketing strategies.",
    details: [
      "Digital lead generation and marketing strategy",
      "Search Engine Optimization (SEO) for local ranking in Junagadh",
      "Pay-Per-Click (PPC) advertising (Google, Social Media)",
      "B2B lead generation services for Gujarat companies",
      "Sales lead generation and funnel optimization",
      "Marketing qualified leads (MQL) strategies",
      "Cold email outreach services and campaign management",
      "Content marketing to attract local customers",
    ],
  },
  {
    id: "email-marketing", // Added ID
    icon: MailCheck,
    title: "Email Marketing Solutions",
    description: "Engaging your audience and nurturing leads with targeted email campaigns, supporting our lead generation services in Junagadh.",
    details: [
      "Email campaign strategy & planning",
      "Custom email template design & coding",
      "Audience segmentation for the Junagadh market",
      "Marketing automation & drip campaigns",
      "A/B testing for higher conversion rates",
      "Performance tracking & analytics reporting",
      "Compliance & deliverability best practices",
      "Integration with CRM and sales platforms",
    ],
  },
  {
    id: "logo-branding-design", // Added ID
    icon: Brush,
    title: "Website & Logo Design in Junagadh",
    description: "Creating impactful visual identities that capture your brand's essence. A strong brand is key for any web development company or marketing campaign.",
    details: [
      "Custom logo design and brand identity systems",
      "Comprehensive brand strategy for the Gujarat market",
      "Visual style guide and typography development",
      "Marketing collateral design (brochures, business cards)",
      "Packaging design concepts and execution",
      "Digital asset creation for web and social media",
      "Brand messaging and communication guidelines",
      "Rebranding services for existing Junagadh businesses",
    ],
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Services in Junagadh
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are a full-service IT company in Junagadh. As a web development, AI, and lead generation company, we offer a comprehensive suite of services to drive growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid for better flow with 5 items */}
          {services.map((service) => (
            <div key={service.id} id={service.id} className="flex"> {/* Added id for anchor linking */}
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                details={service.details}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
