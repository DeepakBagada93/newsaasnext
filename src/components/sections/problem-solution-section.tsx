
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Target, Users, BrainCircuit, Lightbulb, MessageSquare, CheckCircle, AlertTriangle } from "lucide-react";

interface ChallengeSolution {
  id: string;
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
  features: string[];
  hook: string;
}

const challenges: ChallengeSolution[] = [
  {
    id: "webapp",
    icon: Zap,
    title: "Webapp Development: Build a Strong Digital Foundation",
    problem: "Your website is slow, outdated, or fails to engage customers, leading to lost opportunities.",
    solution: "As a top local webapp development company, Saasnext creates modern, responsive, and high-performing web applications.",
    features: [
      "Custom Designs: Apps tailored to your brand and goals.",
      "Seamless Performance: Fast, secure, and scalable solutions.",
      "Market Expertise: We understand local markets to deliver apps that connect with your audience."
    ],
    hook: "Imagine a webapp that works flawlessly and keeps your customers coming back for more!"
  },
  {
    id: "leadgen",
    icon: Target,
    title: "Lead Generation: Turn Prospects into Loyal Customers",
    problem: "You’re spending on marketing but getting low-quality leads or no results at all.",
    solution: "Saasnext, a trusted local lead generation company, uses data-driven strategies to attract high-value leads.",
    features: [
      "Targeted Campaigns: Reach the right audience with precision.",
      "CRM Integration: Streamline lead tracking and follow-ups.",
      "Optimized Results: Boost conversions with actionable insights."
    ],
    hook: "Stop chasing leads—let them find you with Saasnext’s proven strategies!"
  },
  {
    id: "socialmedia",
    icon: MessageSquare,
    title: "Social Media Marketing: Amplify Your Brand",
    problem: "Your social media posts get ignored, and your brand struggles to gain traction online.",
    solution: "As a leading local social media marketing company, Saasnext crafts engaging campaigns to grow your presence.",
    features: [
      "Creative Content: Posts that resonate with your audience.",
      "Strategic Ads: Maximize ROI with targeted advertising.",
      "Community Building: Foster loyalty and engagement."
    ],
    hook: "Ready to turn likes into sales? Let’s make your brand the talk of the town!"
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "AI Solutions: Stay Ahead with Smart Technology",
    problem: "Manual processes waste time, and you’re missing out on data-driven insights.",
    solution: "Saasnext, an innovative local AI solutions company, integrates artificial intelligence to supercharge your business.",
    features: [
      "Smart Chatbots: Provide 24/7 customer support.",
      "Predictive Analytics: Make informed decisions with ease.",
      "Automation: Save time and reduce costs."
    ],
    hook: "Unlock efficiency and innovation with AI tailored for your business!"
  }
];

export default function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="w-full py-16 md:py-24 bg-card/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Lightbulb className="w-8 h-8 mr-3 text-primary" />
            Solving Your Business Challenges with Saasnext
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We understand the hurdles businesses face in today's evolving market. Here’s how Saasnext addresses your pain points with expert solutions:
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
                <ul className="space-y-1 text-sm text-muted-foreground pl-1">
                  {challenge.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-3.5 w-3.5 mr-2 mt-0.5 text-primary/80 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
