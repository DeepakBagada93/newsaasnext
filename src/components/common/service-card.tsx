import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

export default function ServiceCard({ icon: Icon, title, description, details }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full bg-card/50 hover:shadow-primary/20 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          <Icon className="h-8 w-8" />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-muted-foreground mb-4">{description}</CardDescription>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {detail}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
