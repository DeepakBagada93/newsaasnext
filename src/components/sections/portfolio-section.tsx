
import PortfolioCard from "@/components/common/portfolio-card";
import { Briefcase } from "lucide-react";
import Image from "next/image"; // Import next/image here
import webfile from '@/public/saasnextweb.png'; 
import webfile2 from '@/public/saasnextai.png';

const portfolioItems = [
  {
    // imageUrl: "/saasnextweb.png", // Removed
    // imageHint: "modern office", // Removed
    title: "Enterprise Web Platform",
    description: "A scalable web platform for a multinational corporation, enhancing their global online presence and operational efficiency.",
    tags: ["Web Development", "React", "Node.js", "Enterprise"],
    projectUrl: "#",
    imageElement: (
      <Image
        src={webfile} // Path relative to the public folder
        alt="Enterprise Web Platform"
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        data-ai-hint="modern office"
      />
    ),
  },
  {
    // imageUrl: "/ai-powered-analytics.png", // Removed
    // imageHint: "data analytics", // Removed
    title: "AI-Powered Analytics Dashboard",
    description: "Developed an intuitive dashboard that uses AI to provide actionable insights from complex datasets, driving data-informed decisions.",
    tags: ["AI Automation", "Python", "Data Visualization", "SaaS"],
    projectUrl: "#",
    imageElement: (
      <Image
        src={webfile2} // Path relative to the public folder
        alt="AI-Powered Analytics Dashboard"
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        data-ai-hint="data analytics"
      />
    ),
  },
  {
    // imageUrl: "/targeted-lead-generation.png", // Removed
    // imageHint: "digital marketing", // Removed
    title: "Targeted Lead Generation Campaign",
    description: "Executed a multi-channel lead generation campaign for a B2B client, resulting in a 150% increase in qualified leads.",
    tags: ["Lead Generation", "SEO", "PPC", "Content Marketing"],
    projectUrl: "#",
    imageElement: (
      <Image
        src={webfile} // Path relative to the public folder
        alt="Targeted Lead Generation Campaign"
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        data-ai-hint="digital marketing"
      />
    ),
  },
   {
    // imageUrl: "/ecommerce-store-overhaul.png", // Removed
    // imageHint: "online shopping", // Removed
    title: "E-commerce Store Overhaul",
    description: "Revamped an existing e-commerce platform, improving user experience, conversion rates, and integrating AI for personalized recommendations.",
    tags: ["Web Development", "E-commerce", "AI Automation", "UX/UI"],
    projectUrl: "#",
    imageElement: (
      <Image
        src={webfile2} // Path relative to the public folder
        alt="E-commerce Store Overhaul"
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        data-ai-hint="online shopping"
      />
    ),
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
              imageElement={item.imageElement} // Pass the constructed Image component
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
