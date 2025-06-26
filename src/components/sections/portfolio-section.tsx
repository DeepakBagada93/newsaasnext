
import PortfolioCard from "@/components/common/portfolio-card";
import { Briefcase } from "lucide-react";

const portfolioItems = [
  {
    title: "AI WordPress Blog Management Software",
    description: "A smart software solution leveraging AI to automate WordPress blog creation, content scheduling, SEO optimization, and performance tracking for efficient content marketing.",
    tags: ["AI Automation", "WordPress", "Content Management", "SaaS"],
    projectUrl: "https://dbwp.vercel.app/",
    imageUrl: "/saasnextweb.png",
    imageHint: "AI software interface",
  },
  {
    title: "AI Powered Grammar & Content Suggestion Webapp",
    description: "A sophisticated web application that leverages AI to provide real-time grammar checking and intelligent content suggestions, helping users create polished and effective written material.",
    tags: ["AI Automation", "NLP", "Web Application", "SaaS", "Content Creation"],
    projectUrl: "https://deepakgramai.vercel.app/",
    imageUrl: "/saasnextp1.png",
    imageHint: "writing assistant AI",
  },
  {
    title: "AI Powered Social Media Post Creation Webapp",
    description: "An innovative web application that utilizes AI to help users generate engaging social media posts, suggest relevant hashtags, and schedule content across multiple platforms.",
    tags: ["AI Automation", "Social Media", "Content Creation", "SaaS", "Web Application"],
    projectUrl: "https://dbsaasnext.vercel.app/",
    imageUrl: "/saasnextp2.png",
    imageHint: "AI social media",
  },
   {
    title: "E-commerce Store Overhaul",
    description: "Revamped an existing e-commerce platform, improving user experience, conversion rates, and integrating AI for personalized recommendations.",
    tags: ["Web Development", "E-commerce", "AI Automation", "UX/UI"],
    projectUrl: "https://dbwp.vercel.app/",
    imageUrl: "/saasnextai.png",
    imageHint: "online shopping",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"> {/* Simplified grid classes */}
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
