
import ServiceCard from "@/components/common/service-card";
import { Globe, Cpu, Users, Search, ShoppingCart, Bot, LineChart, Palette, MailCheck, Brush } from "lucide-react"; // Added Brush

const services = [
  {
    id: "web-development", // Added ID for deep linking
    icon: Palette, 
    title: "Custom Website Development",
    description: "As a leading web development company, we craft modern, responsive, and high-performance websites tailored to your unique business needs and brand identity.",
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
    id: "ai-automation", // Added ID
    icon: Bot, 
    title: "AI Solution Company Services",
    description: "Our AI solution company leverages artificial intelligence to automate complex business processes, unlock insights from data, and create intelligent applications that enhance efficiency.",
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
    id: "lead-generation", // Added ID
    icon: LineChart, 
    title: "Strategic Lead Generation",
    description: "As a premier lead generation company, we identify, attract, and convert potential customers through targeted, data-driven marketing strategies that optimize sales funnels.",
    details: [
      "Comprehensive digital marketing strategy",
      "Search Engine Optimization (SEO) & content strategy",
      "Pay-Per-Click (PPC) advertising (Google, Social Media)",
      "Conversion Rate Optimization (CRO)",
      "Social media marketing & management",
      "Marketing analytics and performance tracking",
      "Sales funnel development and optimization",
      "Content marketing creation and distribution",
    ],
  },
  {
    id: "email-marketing", // Added ID
    icon: MailCheck,
    title: "Email Marketing Solutions",
    description: "Engaging your audience, nurturing leads, and driving conversions through targeted and personalized email campaigns, supporting the efforts of our lead generation company.",
    details: [
      "Email campaign strategy & planning",
      "Custom email template design & coding",
      "Audience segmentation & list management",
      "Marketing automation & drip campaigns",
      "A/B testing for content & subject lines",
      "Performance tracking & analytics reporting",
      "Compliance & deliverability best practices",
      "Integration with CRM and sales platforms",
    ],
  },
  {
    id: "logo-branding-design", // Added ID
    icon: Brush,
    title: "Logo & Branding Design",
    description: "Creating impactful visual identities that capture your brand's essence. A strong brand is the foundation for any successful web development company or marketing campaign.",
    details: [
      "Custom logo design and brand identity systems",
      "Comprehensive brand strategy and positioning",
      "Visual style guide and typography development",
      "Marketing collateral design (brochures, business cards, etc.)",
      "Packaging design concepts and execution",
      "Digital asset creation for web and social media",
      "Brand messaging and communication guidelines",
      "Rebranding services for existing businesses",
    ],
  }
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
            We are a full-service digital agency. As a web development company, AI solution company, and lead generation company, we offer a comprehensive suite of services to drive growth.
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
