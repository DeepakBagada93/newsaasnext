
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, BotIcon as Bot, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';

interface QnaPair {
  id: string;
  question: string;
  answer: React.ReactNode; // Answer can be a string or JSX for links
}

const qnaList: QnaPair[] = [
  {
    id: 'q1',
    question: 'What services does SaaSnext offer?',
    answer: 'SaaSnext specializes in Web Development (custom sites, e-commerce, CMS, PWAs), AI Automation (chatbots, machine learning, RPA, NLP, data analysis), Lead Generation (SEO, PPC, CRO, social media marketing), and Email Marketing (strategy, design, automation, analytics).',
  },
  {
    id: 'q2',
    question: "What is SaaSnext's mission?",
    answer: 'Our mission is to ignite digital success for businesses by providing cutting-edge web development, intelligent AI automation, and effective lead generation strategies.',
  },
  {
    id: 'q3',
    question: 'How can I get a price quote for my project?',
    answer: (
      <>
        Pricing is individualized for each project. Please visit our{' '}
        <Link href="/contact" className="text-primary hover:underline">Contact page</Link>
        {' '}to request a custom quote, and we&apos;ll be happy to discuss your specific needs.
      </>
    ),
  },
  {
    id: 'q4',
    question: 'Do you have a tool to help recommend services?',
    answer: (
      <>
        Yes! You can try our AI Service Recommender on the{' '}
        <Link href="/recommendation" className="text-primary hover:underline">AI Recommender page</Link>
        . It helps suggest services based on your business needs.
      </>
    ),
  },
  {
    id: 'q5',
    question: 'What kind of web development solutions do you provide?',
    answer: 'We offer a range of web development services, from CMS-based sites like WordPress for smaller budgets and simpler content management needs, to highly custom, scalable applications using modern frameworks like Next.js or Laravel for complex and performance-intensive projects.',
  },
  {
    id: 'q6',
    question: 'How does AI Automation help my business?',
    answer: 'AI Automation can streamline repetitive tasks, provide data-driven insights, enhance customer service through chatbots, optimize processes for efficiency, and reduce operational costs, allowing your team to focus on more strategic activities.'
  },
  {
    id: 'q7',
    question: 'What lead generation strategies do you use?',
    answer: 'Our lead generation strategies include Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising on platforms like Google Ads and Meta Ads, Conversion Rate Optimization (CRO), social media marketing, and content marketing designed to attract and convert your target audience.'
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-xl z-50 bg-primary hover:bg-primary/90 text-primary-foreground"
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label="Open FAQ"
      >
        <HelpCircle className="h-7 w-7" />
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-[400px] sm:w-[540px] flex flex-col p-0" side="right">
          <SheetHeader className="p-6 border-b border-border">
            <SheetTitle className="flex items-center">
              <Bot className="mr-2 h-6 w-6 text-primary" />
              Frequently Asked Questions
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-grow p-6" ref={scrollAreaRef}>
            <Accordion type="single" collapsible className="w-full">
              {qnaList.map((qna) => (
                <AccordionItem value={qna.id} key={qna.id}>
                  <AccordionTrigger className="text-left hover:no-underline text-base text-foreground">
                    {qna.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pt-1 pb-4">
                    {qna.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>
          <SheetFooter className="p-4 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              Can&apos;t find your answer?{' '}
              <Link href="/contact" className="text-primary hover:underline" onClick={() => setIsOpen(false)}>
                Contact us
              </Link>
              .
            </p>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
