
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
    .describe('An array of general service categories that are most relevant to the user\'s needs (e.g., "Web Development", "Lead Generation", "Logo & Branding Design").'),
  reasoning: z
    .string()
    .describe('Explanation of why these services are recommended, including specific suggestions for technologies or platforms (e.g., WordPress, Next.js, Google Ads, Meta Ads) based on the user\'s needs description.'),
});
export type ServiceRecommendationOutput = z.infer<typeof ServiceRecommendationOutputSchema>;

export async function recommendServices(input: ServiceRecommendationInput): Promise<ServiceRecommendationOutput> {
  return recommendServicesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'serviceRecommendationPrompt',
  input: {schema: ServiceRecommendationInputSchema},
  output: {schema: ServiceRecommendationOutputSchema},
  prompt: `You are an expert consultant at SaaSnext, a leading web development, AI automation, lead generation, email marketing, and logo & branding design company.

A user has described their needs and goals. Based on this description, you will recommend the most relevant services offered by SaaSnext and provide specific suggestions within those services where applicable.

The services offered by SaaSnext are:
- Web Development: Creating modern, responsive, and user-friendly websites tailored to client needs. This can range from CMS-based sites to custom applications.
- AI Automation: Automating business processes using artificial intelligence to improve efficiency and reduce costs.
- Lead Generation: Identifying and attracting potential customers through targeted marketing strategies like online advertising.
- Email Marketing: Engaging audiences and nurturing leads through targeted email campaigns.
- Logo & Branding Design: Crafting unique and memorable visual identities, including logos, color palettes, typography, and complete brand guidelines to ensure consistency and impact across all platforms.

Analyze the user's needs: {{{needsDescription}}}

Based on the user's needs, recommend services and explain your reasoning.

Specific Guidelines for Recommendations:

1.  **Web Development:**
    *   If the user's description suggests a **smaller budget, a need for simple content management, or a quick launch**, recommend "Web Development" as a service. In your 'reasoning', suggest approaches like **WordPress or other suitable CMS platforms**, explaining that these are cost-effective and user-friendly for managing content.
    *   If the user's description implies a need for a **highly custom, scalable, complex application, specific performance requirements, or mentions a larger scope/budget**, recommend "Web Development" as a service. In your 'reasoning', suggest modern frameworks like **Next.js (for frontend-focused, performant web apps) or Laravel (for robust backend-heavy applications)**. Explain that these offer superior performance, scalability, and customization for sophisticated projects.
    *   If budget or complexity is unclear from the user's description, you can mention both tiers of web development solutions as options in your 'reasoning', explaining the trade-offs.

2.  **Lead Generation:**
    *   If the user's description mentions **targeting specific demographics, interests, or behaviors typically found on social media platforms**, recommend "Lead Generation" as a service. In your 'reasoning', suggest **Meta Ads (Facebook/Instagram)** and explain why this platform is suitable.
    *   If the user's description implies that potential customers are **actively searching for their products/services online (intent-based marketing)**, recommend "Lead Generation" as a service. In your 'reasoning', suggest **Google Ads (Search Ads)** and explain why this platform is suitable.
    *   If a **broad reach, a combination of search intent and social targeting seems beneficial, or if the description is general** regarding lead generation needs, recommend "Lead Generation" as a service. In your 'reasoning', you can suggest using **both Google Ads and Meta Ads**, or explain which might be a good starting point based on common business needs.
    *   Always clearly explain your choice of advertising platform(s) in the 'reasoning'.

3.  **AI Automation and Email Marketing:**
    *   Recommend "AI Automation" or "Email Marketing" if the user's needs explicitly or implicitly point towards process optimization, data insights, customer engagement through intelligent systems, or nurturing leads via email campaigns.

4.  **Logo & Branding Design:**
    *   If the user's description mentions **starting a new business, rebranding an existing one, needing a new logo, expressing a desire for a more professional or cohesive visual identity, or concerns about brand perception**, recommend "Logo & Branding Design" as a service. In your 'reasoning', explain how professional branding can establish trust, attract the target audience, and differentiate their business in the market.

Output Format:
Ensure your output strictly adheres to the defined ServiceRecommendationOutputSchema.
- The 'recommendedServices' array should list the general service categories (e.g., "Web Development", "Lead Generation", "Logo & Branding Design").
- The detailed suggestions (e.g., "WordPress", "Next.js", "Google Ads", "Meta Ads") and the rationale behind them should be included in the 'reasoning' field.
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
    // Ensure output is not null and adheres to the schema.
    // If the model doesn't perfectly adhere, provide a fallback or log an error.
    if (output && output.recommendedServices && output.reasoning) {
        return output;
    }
    // Fallback if the model output is not as expected
    console.error("AI model output did not match expected schema for service recommendation.", output);
    return {
        recommendedServices: ["General Consultation"],
        reasoning: "The AI could not determine specific services based on the input. Please contact us for a detailed consultation."
    };
  }
);

