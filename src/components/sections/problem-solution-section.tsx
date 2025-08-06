
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Target, Users, BrainCircuit, Lightbulb, MessageSquare, CheckCircle, AlertTriangle, ShieldCheck, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ChallengeSolution {
  id: string;
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
  // features?: string[]; // Features are integrated into solution text for now
  hook: string;
}

const challenges: ChallengeSolution[] = [
  {
    id: "webapp",
    icon: Zap,
    title: "Web Development Company in Junagadh",
    problem: "Generic websites fail to capture the local Junagadh market, leading to poor user engagement and lost opportunities in Gujarat.",
    solution: "As the best web development company in Junagadh, SaaSnext creates custom responsive websites (WordPress, e-commerce) and full-stack web applications. We tailor solutions to connect with your target audience in Junagadh effectively.",
    hook: "Ready to dominate the Junagadh market with a custom web solution?"
  },
  {
    id: "leadgen",
    icon: Target,
    title: "Lead Generation Company in Junagadh",
    problem: "Ineffective marketing wastes resources and makes it hard to find new customers in the competitive Junagadh market.",
    solution: "As the top lead generation company in Junagadh, we use data-driven digital marketing and B2B lead generation strategies to attract high-potential local customers, boosting your revenue and ROI.",
    hook: "Why settle for low returns? Our lead generation services deliver high-value leads in Junagadh."
  },
  {
    id: "socialmedia",
    icon: MessageSquare,
    title: "Digital Marketing Agency in Junagadh",
    problem: "A weak social media presence makes your brand invisible to potential customers in Junagadh.",
    solution: "Our digital marketing agency in Junagadh offers premier social media marketing services. We craft campaigns that increase visibility and engagement, turning followers into loyal customers.",
    hook: "Want your brand to shine in Junagadh? Let’s make it happen!"
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "AI Solutions Company in Junagadh",
    problem: "Outdated processes hinder scalability and competitiveness for businesses in Gujarat.",
    solution: "As an innovative AI development company in Junagadh, we integrate AI to optimize operations. From chatbot development to data analytics services, our AI solutions empower your business to thrive.",
    hook: "Ready to revolutionize your business with our AI services in Junagadh?"
  },
  {
    id: "delivery",
    icon: ShieldCheck,
    title: "Reliable Project Delivery in Junagadh",
    problem: "Project delays and miscommunication can derail digital projects, causing budget overruns.",
    solution: "Our IT company in Junagadh prioritizes transparency. Our streamlined processes ensure your projects are delivered on time and within budget, keeping your business on track for success.",
    hook: "Tired of project delays? Trust our web development company for seamless execution!"
  },
  {
    id: "localgrowth",
    icon: Handshake,
    title: "Supporting Junagadh's Local Growth",
    problem: "Local businesses in Junagadh often struggle to compete with larger players online.",
    solution: "As a company committed to the Junagadh community, we empower businesses with affordable, high-quality digital solutions. Partnering with our web development company means investing in your local economy's future.",
    hook: "Let’s grow together in Junagadh—partner with SaaSnext today!"
  }
];

export default function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="w-full py-16 md:py-24 bg-card/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Lightbulb className="w-8 h-8 mr-3 text-primary icon-glow-primary" />
            Solving Challenges for Junagadh Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our web development, AI, and lead generation company works to address your pain points with targeted strategies for the Junagadh market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="bg-card/50 hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <challenge.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground mt-1">{challenge.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div>
                  <h4 className="font-semibold text-destructive mb-1 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2"/> Problem:
                  </h4>
                  <p className="text-sm text-muted-foreground">{challenge.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1 flex items-center">
                     <CheckCircle className="w-4 h-4 mr-2"/> Solution:
                  </h4>
                  <p className="text-sm text-muted-foreground">{challenge.solution}</p>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-medium text-accent italic">&quot;{challenge.hook}&quot;</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
