
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, Layers, Rocket, Handshake, BrainCircuit, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: BrainCircuit,
    title: "Discovery & Strategy",
    description: "We dive deep to understand your vision, goals, and challenges. Through meticulous research and strategic planning, we lay a solid foundation for success, ensuring our solutions are perfectly aligned with your objectives.",
  },
  {
    icon: Layers,
    title: "Innovative Design & Development",
    description: "Our creative team crafts intuitive user experiences and compelling designs. Our skilled developers then build robust, scalable, and cutting-edge solutions using the latest technologies and agile practices.",
  },
  {
    icon: Rocket,
    title: "Launch & Iterate",
    description: "We ensure a smooth project launch, then continuously monitor performance, gather feedback, and iterate. This data-driven approach allows us to optimize results and maximize your return on investment.",
  },
  {
    icon: Handshake,
    title: "Growth & Partnership",
    description: "Beyond initial delivery, we aim to be your long-term digital partner. We provide ongoing support, strategic insights, and scalable solutions to help your business adapt, grow, and thrive in the evolving digital landscape.",
  },
];

export default function WorkProcessSection() {
  return (
    <section id="work-process" className="w-full py-16 md:py-24 bg-card/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Collaborative Work Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From initial idea to final launch and beyond, we follow a structured yet flexible process to ensure your project's success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="bg-card/50 hover:shadow-primary/20 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full">
              <CardHeader className="flex flex-col items-center text-center pb-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <step.icon className="h-10 w-10" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="mt-16 text-center p-8 bg-primary/5 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-6">What Sets Our Process Apart?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Tailored Solutions</h4>
                <p className="text-muted-foreground text-sm">Every strategy is customized to your unique business needs and market position.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Transparent Collaboration</h4>
                <p className="text-muted-foreground text-sm">We maintain open communication, keeping you involved and informed at every stage.</p>
              </div>
            </div>
             <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Focus on ROI</h4>
                <p className="text-muted-foreground text-sm">Our methodologies are geared towards delivering tangible results and a strong return on your investment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
