// This file is machine-generated - edit with caution!
'use server';
/**
 * @fileOverview An AI agent that recommends services based on user needs.
 *
 * - recommendServices - A function that handles the service recommendation process.
 * - ServiceRecommendationInput - The input type for the recommendServices function.
 * - ServiceRecommendationOutput - The return type for the recommendServices function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceRecommendationInputSchema = z.object({
  needsDescription: z
    .string()
    .describe('A description of the user\'s needs and goals.'),
});
export type ServiceRecommendationInput = z.infer<typeof ServiceRecommendationInputSchema>;

const ServiceRecommendationOutputSchema = z.object({
  recommendedServices: z
    .array(z.string())
    .describe('An array of service names that are most relevant to the user\'s needs.'),
  reasoning: z
    .string()
    .describe('Explanation of why these services are recommended for the specified needs.'),
});
export type ServiceRecommendationOutput = z.infer<typeof ServiceRecommendationOutputSchema>;

export async function recommendServices(input: ServiceRecommendationInput): Promise<ServiceRecommendationOutput> {
  return recommendServicesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'serviceRecommendationPrompt',
  input: {schema: ServiceRecommendationInputSchema},
  output: {schema: ServiceRecommendationOutputSchema},
  prompt: `You are an expert consultant at SaaSnext, a leading web development, AI automation, and lead generation company.

  A user has described their needs and goals. Based on this description, you will recommend the most relevant services offered by SaaSnext.

  The services offered by SaaSnext are:
  - Web Development: Creating modern, responsive, and user-friendly websites tailored to client needs.
  - AI Automation: Automating business processes using artificial intelligence to improve efficiency and reduce costs.
  - Lead Generation: Identifying and attracting potential customers through targeted marketing strategies.

  Analyze the user's needs and recommend the services that would best help them achieve their goals. Explain your reasoning for each recommendation.

  User Needs: {{{needsDescription}}}
  `,
});

const recommendServicesFlow = ai.defineFlow(
  {
    name: 'recommendServicesFlow',
    inputSchema: ServiceRecommendationInputSchema,
    outputSchema: ServiceRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
