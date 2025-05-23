import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Flexible Pricing, Tailored to You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At SaaSnext, we believe in providing value that matches your specific needs. Our pricing is individualized because every project is unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Card className="bg-card shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <MessageSquare className="w-7 h-7 mr-3" />
                Personalized Consultation
              </CardTitle>
              <CardDescription>
                Understand your requirements, achieve your goals.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We don't offer one-size-fits-all packages. Instead, we work closely with you to understand your objectives, scope, and budget. This allows us to create a customized proposal that delivers maximum impact.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                  No hidden fees, transparent quotes.
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                  Solutions designed for your specific challenges.
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                  Scalable options as your business grows.
                </li>
              </ul>
              <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Request a Custom Quote
                </Link>
              </Button>
            </CardContent>
          </Card>

          <div className="p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4">How It Works</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mr-3">1</div>
                <p className="text-muted-foreground"><strong className="text-foreground">Discovery Call:</strong> We discuss your project, goals, and requirements in detail.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mr-3">2</div>
                <p className="text-muted-foreground"><strong className="text-foreground">Custom Proposal:</strong> We prepare a tailored proposal with a detailed scope and pricing.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mr-3">3</div>
                <p className="text-muted-foreground"><strong className="text-foreground">Project Kick-off:</strong> Upon agreement, we start working on delivering your solution.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
