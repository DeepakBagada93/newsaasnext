'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles, Lightbulb } from 'lucide-react';
import { recommendServices, type ServiceRecommendationOutput } from '@/ai/flows/service-recommendation';
import { useToast } from "@/hooks/use-toast";

const recommendationSchema = z.object({
  needsDescription: z.string().min(20, { message: "Please describe your needs in at least 20 characters." }).max(1000),
});

type RecommendationFormValues = z.infer<typeof recommendationSchema>;

export default function RecommendationSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendationResult, setRecommendationResult] = useState<ServiceRecommendationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(recommendationSchema),
    defaultValues: {
      needsDescription: '',
    },
  });

  const onSubmit: SubmitHandler<RecommendationFormValues> = async (data) => {
    setIsLoading(true);
    setRecommendationResult(null);
    setError(null);
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
      setError(`Failed to get recommendation: ${errorMessage}`);
      toast({
        variant: "destructive",
        title: "Error",
        description: `Could not generate recommendation. ${errorMessage}`,
      });
    } finally {
      setIsLoading(false);
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
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
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
                  {isLoading ? (
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

            {error && (
              <Alert variant="destructive" className="mt-6">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
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
        </Card>
      </div>
    </section>
  );
}
