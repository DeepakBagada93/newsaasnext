
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles, Lightbulb, Send } from 'lucide-react';
import { recommendServices, type ServiceRecommendationOutput } from '@/ai/flows/service-recommendation';
import { sendRecommendationFollowUpEmail, type SendRecommendationFollowUpInput } from '@/actions/send-recommendation-follow-up-email';
import { useToast } from "@/hooks/use-toast";

const recommendationSchema = z.object({
  needsDescription: z.string().min(20, { message: "Please describe your needs in at least 20 characters." }).max(1000),
});
type RecommendationFormValues = z.infer<typeof recommendationSchema>;

const followUpSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  whatsapp: z.string().optional(),
  projectDetails: z.string().min(10, { message: "Please provide some details about your project (min 10 characters)." }),
});
type FollowUpFormValues = z.infer<typeof followUpSchema>;

export default function RecommendationSection() {
  const [isRecommending, setIsRecommending] = useState(false);
  const [isSendingFollowUp, setIsSendingFollowUp] = useState(false);
  const [recommendationResult, setRecommendationResult] = useState<ServiceRecommendationOutput | null>(null);
  const [recommendationError, setRecommendationError] = useState<string | null>(null);
  const { toast } = useToast();

  const recommendationForm = useForm<RecommendationFormValues>({
    resolver: zodResolver(recommendationSchema),
    defaultValues: {
      needsDescription: '',
    },
  });

  const followUpForm = useForm<FollowUpFormValues>({
    resolver: zodResolver(followUpSchema),
    defaultValues: {
      name: '',
      email: '',
      whatsapp: '',
      projectDetails: '',
    },
  });

  const handleRecommendationSubmit: SubmitHandler<RecommendationFormValues> = async (data) => {
    setIsRecommending(true);
    setRecommendationResult(null);
    setRecommendationError(null);
    try {
      const result = await recommendServices({ needsDescription: data.needsDescription });
      setRecommendationResult(result);
      toast({
        title: "Recommendation Generated!",
        description: "Check out your personalized service suggestions below.",
      });
    } catch (err) {
      console.error("Error fetching recommendation:", err);
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
      setRecommendationError(`Failed to get recommendation: ${errorMessage}`);
      toast({
        variant: "destructive",
        title: "Recommendation Error",
        description: `Could not generate recommendation. ${errorMessage}`,
      });
    } finally {
      setIsRecommending(false);
    }
  };

  const handleFollowUpSubmit: SubmitHandler<FollowUpFormValues> = async (data) => {
    if (!recommendationResult) {
      toast({ variant: "destructive", title: "Error", description: "No recommendation to send." });
      return;
    }
    setIsSendingFollowUp(true);
    try {
      const inputData: SendRecommendationFollowUpInput = {
        ...data,
        aiRecommendedServices: recommendationResult.recommendedServices,
        aiReasoning: recommendationResult.reasoning,
      };
      const result = await sendRecommendationFollowUpEmail(inputData);
      if (result.success) {
        toast({
          title: "Information Sent!",
          description: result.message,
        });
        followUpForm.reset();
        // Optionally, could hide the follow-up form or clear recommendationResult to "reset" the page
        // setRecommendationResult(null); 
      } else {
        toast({
          variant: "destructive",
          title: "Error Sending Information",
          description: result.message || "An unexpected error occurred.",
        });
      }
    } catch (err) {
      console.error("Error sending follow-up email:", err);
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: `Could not send your information. ${errorMessage}`,
      });
    } finally {
      setIsSendingFollowUp(false);
    }
  };

  return (
    <section id="recommendation" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Lightbulb className="w-8 h-8 mr-3 text-primary" />
            AI-Powered Service Recommendation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not sure which service is right for you? Describe your business needs, and our AI will suggest the best solutions.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card/50 shadow-xl">
          <CardHeader>
            <CardTitle>Find Your Perfect Service Match</CardTitle>
            <CardDescription>Tell us about your goals and challenges.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...recommendationForm}>
              <form onSubmit={recommendationForm.handleSubmit(handleRecommendationSubmit)} className="space-y-6">
                <FormField
                  control={recommendationForm.control}
                  name="needsDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="needsDescription" className="text-base">Your Business Needs</FormLabel>
                      <FormControl>
                        <Textarea
                          id="needsDescription"
                          placeholder="E.g., 'I want to launch a new e-commerce store and attract more customers online.' or 'My team spends too much time on manual data entry, and I need to improve efficiency.'"
                          rows={5}
                          className="bg-background focus:ring-primary"
                          {...field}
                          disabled={isRecommending || !!recommendationResult}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isRecommending || !!recommendationResult}>
                  {isRecommending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Getting Recommendation...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Get AI Recommendation
                    </>
                  )}
                </Button>
              </form>
            </Form>

            {recommendationError && !recommendationResult && (
              <Alert variant="destructive" className="mt-6">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{recommendationError}</AlertDescription>
              </Alert>
            )}

            {recommendationResult && (
              <div className="mt-8 p-6 border border-primary/30 rounded-lg bg-card">
                <h3 className="text-xl font-semibold text-primary mb-4">Our AI Recommends:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground">Recommended Services:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                      {recommendationResult.recommendedServices.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Reasoning:</h4>
                    <p className="text-muted-foreground whitespace-pre-wrap">{recommendationResult.reasoning}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          {recommendationResult && (
            <CardFooter className="flex-col items-start p-6 mt-4 border-t border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Ready to Discuss Further?</h3>
              <p className="text-muted-foreground mb-6">Provide your details below, and we'll get in touch to discuss how we can tailor these recommendations to your project.</p>
              <Form {...followUpForm}>
                <form onSubmit={followUpForm.handleSubmit(handleFollowUpSubmit)} className="w-full space-y-6">
                  <FormField
                    control={followUpForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="followUpName">Full Name</FormLabel>
                        <FormControl>
                          <Input id="followUpName" placeholder="John Doe" {...field} disabled={isSendingFollowUp} className="bg-background focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={followUpForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="followUpEmail">Email Address</FormLabel>
                        <FormControl>
                          <Input id="followUpEmail" type="email" placeholder="you@example.com" {...field} disabled={isSendingFollowUp} className="bg-background focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={followUpForm.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="followUpWhatsapp">WhatsApp Number (Optional)</FormLabel>
                        <FormControl>
                          <Input id="followUpWhatsapp" placeholder="+1234567890" {...field} disabled={isSendingFollowUp} className="bg-background focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={followUpForm.control}
                    name="projectDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="followUpProjectDetails">Additional Project Details</FormLabel>
                        <FormControl>
                          <Textarea id="followUpProjectDetails" placeholder="Tell us more about your specific requirements, timeline, or any questions you have..." rows={4} {...field} disabled={isSendingFollowUp} className="bg-background focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSendingFollowUp}>
                    {isSendingFollowUp ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Details...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Project Details
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}

    