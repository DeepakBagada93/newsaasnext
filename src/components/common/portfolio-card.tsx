import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

interface PortfolioCardProps {
  imageUrl: string;
  imageHint?: string; // For AI image search
  title: string;
  description: string;
  tags: string[];
  projectUrl?: string;
}

export default function PortfolioCard({ imageUrl, imageHint, title, description, tags, projectUrl }: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full bg-card/50 hover:shadow-primary/20 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative w-full">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold text-foreground mb-2">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full flex items-center">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      {projectUrl && (
        <CardFooter className="p-6 pt-0">
          <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
