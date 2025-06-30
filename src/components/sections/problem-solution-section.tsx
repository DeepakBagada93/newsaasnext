
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
    solution: "As a local web development company, SaaSnext creates modern, responsive, and high-performing web applications. We tailor solutions to your brand and goals, with features like custom designs and seamless performance to ensure they connect with your target audience effectively.",
    hook: "Ready to dominate your market with a custom webapp designed for success?"
  },
  {
    id: "leadgen",
    icon: Target,
    title: "Data-Driven Lead Generation Strategies",
    problem: "Ineffective marketing wastes resources and delivers poor results, making it hard to find new customers.",
    solution: "As a top local lead generation company, we use advanced analytics and targeting to attract high-potential leads. Our strategies ensure you connect with customers who are ready to buy, boosting your revenue and ROI.",
    hook: "Why settle for low returns when our lead generation company can deliver high-value leads?"
  },
  {
    id: "socialmedia",
    icon: MessageSquare,
    title: "Social Media That Builds Your Brand",
    problem: "A weak social media presence leaves your brand invisible to potential customers in a crowded digital space.",
    solution: "Our lead generation company includes premier social media marketing services. We craft campaigns that increase visibility and engagement, turning followers into loyal customers for your brand.",
    hook: "Want your brand to shine? Let’s make it happen!"
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "AI-Powered Business Transformation",
    problem: "Outdated processes hinder scalability and competitiveness in a rapidly evolving market.",
    solution: "As an innovative local AI solutions company, we integrate AI to optimize operations and provide actionable insights. From chatbots to predictive analytics, our solutions empower your business to thrive.",
    hook: "Ready to revolutionize your business with our AI solution company?"
  },
  {
    id: "delivery",
    icon: ShieldCheck,
    title: "Seamless Project Delivery",
    problem: "Delays and miscommunication can derail digital projects, causing frustration and budget overruns.",
    solution: "Our web development company prioritizes transparency and efficiency. Our streamlined processes ensure your projects are delivered on time and within budget, keeping your business on track for success.",
    hook: "Tired of project delays? Trust our web development company for seamless execution!"
  },
  {
    id: "localgrowth",
    icon: Handshake,
    title: "Supporting Local Growth",
    problem: "Local businesses often struggle to compete with larger players in the digital space.",
    solution: "As a company committed to local communities, we empower businesses with affordable, high-quality digital solutions. Partnering with our web development company means investing in your local economy's future.",
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
            Solving Business Challenges with Expert Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our web development company, AI solution company, and lead generation company work together to address your pain points with targeted strategies.
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
