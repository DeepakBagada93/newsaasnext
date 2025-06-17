
import { Palette, Bot, LineChart, MailCheck, Layers } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: "Web Development",
    description: "Crafting digital experiences that captivate and convert.",
    animationWrapperClass: "animate-subtle-rotate",
    iconClass: "icon-glow-primary",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Intelligent solutions to streamline and innovate.",
    animationWrapperClass: "animate-gentle-pulse",
    iconClass: "icon-glow-primary",
  },
  {
    icon: LineChart,
    title: "Lead Generation",
    description: "Targeted strategies to attract and grow your customer base.",
    animationWrapperClass: "animate-pulse", // Tailwind's standard opacity pulse
    iconClass: "icon-glow-primary",
  },
  {
    icon: MailCheck,
    title: "Email Marketing",
    description: "Engaging campaigns that nurture leads and drive action.",
    animationWrapperClass: "animate-gentle-bounce",
    iconClass: "icon-glow-primary",
  },
];

export default function AnimatedServicesShowcaseSection() {
  return (
    <section id="animated-services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Layers className="w-9 h-9 mr-3 text-primary icon-glow-primary" />
            Our Services in Motion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore how our core services dynamically adapt to power your business growth and digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="flex flex-col items-center text-center p-6 bg-card/30 rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1.5"
            >
              <div className={`p-4 rounded-full bg-primary/10 text-primary mb-5 ${service.animationWrapperClass}`}>
                <service.icon className={`h-12 w-12 ${service.iconClass}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
