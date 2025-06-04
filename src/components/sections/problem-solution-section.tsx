
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
    title: "Webapp Development: Custom Digital Foundations",
    problem: "Generic web solutions often fail to address the specific needs of diverse industries, leading to lost opportunities and poor user engagement.",
    solution: "SaaSnext creates modern, responsive, and high-performing web applications. As a local webapp development company, we tailor solutions to your brand and goals, with features like custom designs, seamless performance, and local market expertise to ensure they connect with your target audience and enhance customer engagement effectively.",
    hook: "Ready to dominate your market with a custom webapp designed for success?"
  },
  {
    id: "leadgen",
    icon: Target,
    title: "Data-Driven Lead Generation Strategies",
    problem: "Ineffective marketing wastes resources and delivers poor results.",
    solution: "As a top local lead generation company, we use advanced analytics and targeting to attract high-potential leads. Our strategies ensure you connect with customers who are ready to buy, boosting your revenue.",
    hook: "Why settle for low returns when SaaSnext can deliver high-value leads?"
  },
  {
    id: "socialmedia",
    icon: MessageSquare,
    title: "Social Media That Builds Your Brand",
    problem: "A weak social media presence leaves your brand invisible to potential customers.",
    solution: "As a premier local social media marketing company, we craft campaigns that increase visibility and engagement. Our creative content and targeted ads turn followers into loyal customers.",
    hook: "Want your brand to shine? Let’s make it happen!"
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "AI-Powered Business Transformation",
    problem: "Outdated processes hinder scalability and competitiveness.",
    solution: "As an innovative local AI solutions company, we integrate AI to optimize operations and provide insights. From chatbots to predictive analytics, our solutions empower your business to thrive.",
    hook: "Ready to revolutionize your business with AI?"
  },
  {
    id: "delivery",
    icon: ShieldCheck,
    title: "Seamless Project Delivery",
    problem: "Delays and miscommunication derail digital projects.",
    solution: "At SaaSnext, we prioritize transparency and efficiency. Our streamlined processes ensure your webapps, marketing campaigns, and AI solutions are delivered on time and within budget, keeping your business on track.",
    hook: "Tired of project delays? Trust SaaSnext for seamless execution!"
  },
  {
    id: "localgrowth",
    icon: Handshake,
    title: "Supporting Local Growth",
    problem: "Local businesses often struggle to compete with larger players in the digital space.",
    solution: "As a company committed to local communities, we empower businesses with affordable, high-quality digital solutions. By partnering with SaaSnext, you’re investing in your local economy's future while growing your business.",
    hook: "Let’s grow locally together—partner with SaaSnext today!"
  }
];

export default function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="w-full py-16 md:py-24 bg-card/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Lightbulb className="w-8 h-8 mr-3 text-primary icon-glow-primary" />
            Solving Your Business Challenges with SaaSnext
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We understand the hurdles businesses face in today's evolving market. Here’s how SaaSnext addresses your pain points with expert solutions:
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
