
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ImageWithTextSectionProps {
  id?: string;
  imageUrl: string | StaticImageData; // Updated to accept StaticImageData
  imageHint: string;
  altText: string;
  title: string;
  paragraphs: string[];
  imagePosition?: 'left' | 'right';
  ctaText?: string;
  ctaLink?: string;
  bgColor?: string;
  titleIcon?: LucideIcon;
}

export default function ImageWithTextSection({
  id,
  imageUrl,
  imageHint,
  altText,
  title,
  paragraphs,
  imagePosition = 'left',
  ctaText,
  ctaLink,
  bgColor = 'bg-background',
  titleIcon: TitleIcon,
}: ImageWithTextSectionProps) {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${bgColor}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center`}>
          <div className={`relative aspect-[4/3] md:aspect-video rounded-lg overflow-hidden shadow-xl ${imagePosition === 'right' ? 'md:order-2' : ''}`}>
            <Image
              src={imageUrl}
              alt={altText}
              data-ai-hint={imageHint}
              fill
              style={{objectFit: 'cover'}}
              className="transform transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={`${imagePosition === 'right' ? 'md:order-1' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center">
              {TitleIcon && <TitleIcon className="w-9 h-9 mr-3 text-primary icon-glow-primary" />}
              {title}
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              {paragraphs.map((p, i) => <p key={i} className="text-base md:text-lg">{p}</p>)}
            </div>
            {ctaText && ctaLink && (
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform duration-300 hover:scale-105">
                <Link href={ctaLink}>
                  {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
