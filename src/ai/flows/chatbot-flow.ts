
'use server';
/**
 * @fileOverview A chatbot AI agent for SaaSnext.
 *
 * - askChatbot - A function that handles the chatbot conversation.
 * - ChatbotInput - The input type for the askChatbot function.
 * - ChatbotOutput - The return type for the askChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import type {MessageData} from 'genkit';

const ChatbotInputSchema = z.object({
  userInput: z.string().describe('The user\'s message to the chatbot.'),
  history: z.array(z.object({
    user: z.string().optional(),
    model: z.string().optional(),
  })).optional().describe('The conversation history. Each object should have a user or model key, representing actual prior turns.'),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

const ChatbotOutputSchema = z.object({
  botResponse: z.string().describe('The chatbot\'s response to the user.'),
});
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

export async function askChatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}

const systemInstruction = `You are "SaaSnext Catalyst AI Assistant", a friendly and helpful virtual assistant for SaaSnext.
SaaSnext is a company that provides Web Development, AI Automation, Lead Generation, and Email Marketing services.
Their mission is to ignite digital success for businesses.
Key services offered by SaaSnext:
- Web Development: Creating modern, responsive, and user-friendly websites tailored to client needs, including e-commerce platforms, CMS customization, API development, and PWA development.
- AI Automation: Automating business processes using artificial intelligence to improve efficiency and reduce costs. This includes AI-powered chatbots, custom machine learning models, workflow automation (RPA), Natural Language Processing (NLP) solutions, and data analysis.
- Lead Generation: Identifying and attracting potential customers through targeted marketing strategies like SEO, PPC advertising, Conversion Rate Optimization (CRO), and social media marketing.
- Email Marketing: Crafting and executing effective email campaigns to nurture leads, engage customers, and drive conversions. This includes strategy, design, automation, and analytics.

Your role is to:
- Answer user questions about SaaSnext, its services (Web Development, AI Automation, Lead Generation, Email Marketing), mission, and general company information.
- Provide brief explanations of services if asked.
- Be concise, professional,and helpful.
- If you don't know the answer to a specific question or if it's too complex, politely say so and suggest the user contact SaaSnext directly through the contact page or by emailing info@saasnext.com.
- Do not make up information or answer questions outside the scope of SaaSnext and its offerings.
- Keep your answers relatively short and easy to understand.
- If the user asks how to get a quote or discuss pricing, direct them to the contact page to request a custom quote as pricing is individualized.
- If the user asks for service recommendations, you can suggest they try the "AI Recommender" tool on the website or describe their needs so you can give a general suggestion based on the main service categories.
`;

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: ChatbotInputSchema},
  output: {schema: ChatbotOutputSchema},
  system: systemInstruction,
  prompt: (input: ChatbotInput): (string | MessageData)[] => {
    const messagesForModel: (string | MessageData)[] = [];
    // Process history: User messages become strings, model messages become structured objects.
    if (input.history) {
      for (const item of input.history) {
        if (item.user) {
          messagesForModel.push(item.user); // User messages as simple strings
        }
        if (item.model) {
          // Model messages must be structured objects
          messagesForModel.push({role: 'model', content: [{text: item.model}]});
        }
      }
    }
    // Add current user input as a simple string
    messagesForModel.push(input.userInput);
    return messagesForModel;
  },
  config: {
    model: 'googleai/gemini-1.5-flash-latest',
  }
});

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async (input) => {
    const llmResponse = await prompt(input);
    // Ensure output is consistently accessed, prioritizing structured output then raw text.
    const responseText = llmResponse.output?.botResponse ?? 
                         (llmResponse.text ? llmResponse.text : null) ??
                         "I'm sorry, I couldn't generate a response at this moment.";
    return { botResponse: responseText };
  }
);

