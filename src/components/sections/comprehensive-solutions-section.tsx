
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Share2, BrainCircuit, CheckCircle } from "lucide-react";

export default function ComprehensiveSolutionsSection() {
  const solutions = [
    {
      icon: Target,
      title: "Expert Lead Generation Company",
      description: "Struggling to attract quality leads? As a premier local lead generation company, we use data-driven strategies to connect you with high-potential customers. Our services include:",
      points: [
        "Targeted SEO and PPC campaigns.",
        "CRM integration for seamless lead management.",
        "Analytics to optimize your conversion pipeline.",
      ],
    },
    {
      icon: Share2, 
      title: "Dynamic Social Media Marketing",
      description: "Elevate your brand with Saasnext, a top local social media marketing company. We create engaging content and run strategic campaigns to grow your online presence. Our services include:",
      points: [
        "Tailored social media strategies.",
        "Ad management for maximum ROI.",
        "Audience engagement to build brand loyalty.",
      ],
    },
    {
      icon: BrainCircuit,
      title: "Innovative AI Solution Company",
      description: "Embrace the future with Saasnext, a trusted local AI solutions company. We integrate artificial intelligence into your business to enhance efficiency and innovation. Our offerings include:",
      points: [
        "AI Chatbots for 24/7 customer support.",
        "Predictive analytics for smarter decisions.",
        "Process automation to streamline operations.",
      ],
    },
  ];

  return (
    <section id="comprehensive-solutions" className="w-full py-16 md:py-24 bg-card/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Leading Web, AI, and Lead Generation Company
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Saasnext, we go beyond standard web development. Our expertise as an AI solution company and lead generation company helps your business thrive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"> {/* Added items-stretch */}
          {solutions.map((solution) => (
            <Card key={solution.title} className="bg-card/50 hover:shadow-primary/20 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-3 mb-3"> {/* Changed to items-start */}
                  <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0"> {/* Added flex-shrink-0 */}
                    <solution.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground mt-1">{solution.title}</CardTitle>
                </div>
                <CardDescription className="text-sm text-muted-foreground">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {solution.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
