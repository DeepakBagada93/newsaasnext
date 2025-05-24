
import PortfolioCard from "@/components/common/portfolio-card";
import { Briefcase } from "lucide-react";

const portfolioItems = [
  {
    imageUrl: "/images/portfolio/enterprise-web-platform.png",
    imageHint: "modern office",
    title: "Enterprise Web Platform",
    description: "A scalable web platform for a multinational corporation, enhancing their global online presence and operational efficiency.",
    tags: ["Web Development", "React", "Node.js", "Enterprise"],
    projectUrl: "#",
  },
  {
    imageUrl: "/images/portfolio/ai-powered-analytics.png",
    imageHint: "data analytics",
    title: "AI-Powered Analytics Dashboard",
    description: "Developed an intuitive dashboard that uses AI to provide actionable insights from complex datasets, driving data-informed decisions.",
    tags: ["AI Automation", "Python", "Data Visualization", "SaaS"],
    projectUrl: "#",
  },
  {
    imageUrl: "/images/portfolio/targeted-lead-generation.png",
    imageHint: "digital marketing",
    title: "Targeted Lead Generation Campaign",
    description: "Executed a multi-channel lead generation campaign for a B2B client, resulting in a 150% increase in qualified leads.",
    tags: ["Lead Generation", "SEO", "PPC", "Content Marketing"],
    projectUrl: "#",
  },
   {
    imageUrl: "/images/portfolio/ecommerce-store-overhaul.png",
    imageHint: "online shopping",
    title: "E-commerce Store Overhaul",
    description: "Revamped an existing e-commerce platform, improving user experience, conversion rates, and integrating AI for personalized recommendations.",
    tags: ["Web Development", "E-commerce", "AI Automation", "UX/UI"],
    projectUrl: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-16 md:py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Briefcase className="w-8 h-8 mr-3 text-primary" />
            Our Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses like yours achieve their goals through innovative solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.title}
              imageUrl={item.imageUrl}
              imageHint={item.imageHint}
              title={item.title}
              description={item.description}
              tags={item.tags}
              projectUrl={item.projectUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
