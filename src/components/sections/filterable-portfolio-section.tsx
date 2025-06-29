'use client';

import { useState } from 'react';
import PortfolioCard from "@/components/common/portfolio-card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { cn } from '@/lib/utils';

const portfolioItems = [
  {
    title: "E-commerce Store for Fashion Brand",
    description: "A sleek and modern e-commerce platform built on Shopify, featuring custom theme development, app integrations, and a streamlined checkout process to boost sales.",
    tags: ["Web Development", "E-commerce"],
    projectUrl: "https://saasnext-ecom.vercel.app/",
    imageUrl: "/saasnext ecom 1.png",
  },
  {
    title: "B2B Portal for Tiles Industry Leader",
    description: "A comprehensive B2B platform for a leading tiles manufacturer, featuring a dynamic product catalog, real-time inventory, and an exclusive dealer ordering system.",
    tags: ["Web Development", "Tiles Industry", "B2B"],
    projectUrl: "#",
    imageUrl: "/saasnextp2.png",
  },
    {
    title: "AI-Powered Customer Service Chatbot",
    description: "An intelligent chatbot integrated into a client's existing website to handle customer queries 24/7, reducing support tickets and improving user satisfaction.",
    tags: ["AI Automation", "SaaS"],
    projectUrl: "https://dbsaasnext.vercel.app/",
    imageUrl: "/saasnextp1.png",
  },
  {
    title: "High-Intent Lead Generation for Real Estate",
    description: "Executed a targeted Google Ads and social media campaign that generated a 200% increase in qualified leads for a local real estate agency.",
    tags: ["Lead Generation", "Real Estate"],
    projectUrl: "#",
    imageUrl: "/saasnextp2.png",
  },
  {
    title: "Custom Booking System for Hospitality Chain",
    description: "Developed a bespoke web application for a restaurant group to manage online reservations, table availability, and customer data, integrated with their POS system.",
    tags: ["Web Development", "Hospitality", "Web Application"],
    projectUrl: "#",
    imageUrl: "/saasnextp1.png",
  },
  {
    title: "AI WordPress Blog Automation Tool",
    description: "A smart SaaS solution leveraging AI to automate WordPress blog creation, content scheduling, and SEO optimization for efficient content marketing.",
    tags: ["AI Automation", "SaaS", "Content Management"],
    projectUrl: "https://dbwp.vercel.app/",
    imageUrl: "/saasnextp2.png",
  },
];

// Extract all unique tags for filter buttons
const allTags = ['All', ...Array.from(new Set(portfolioItems.flatMap(item => item.tags)))];

export default function FilterablePortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.tags.includes(activeFilter));

  return (
    <section id="portfolio-demo" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Briefcase className="w-8 h-8 mr-3 text-primary" />
            Our Work in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of our projects. See how we've helped businesses across various industries succeed.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={activeFilter === tag ? 'default' : 'outline'}
              onClick={() => setActiveFilter(tag)}
              className={cn(
                "transition-colors duration-200",
                activeFilter !== tag && "text-foreground border-primary hover:bg-primary/10 hover:text-primary"
              )}
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <PortfolioCard
              key={item.title}
              imageUrl={item.imageUrl}
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
