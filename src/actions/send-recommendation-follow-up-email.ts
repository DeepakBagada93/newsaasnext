
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const SendRecommendationFollowUpInputSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  whatsapp: z.string().optional(),
  projectDetails: z.string().min(10, { message: "Project details must be at least 10 characters." }),
  aiRecommendedServices: z.array(z.string()).min(1, { message: "AI recommended services cannot be empty."}),
  aiReasoning: z.string().min(1, { message: "AI reasoning cannot be empty."}),
});

export type SendRecommendationFollowUpInput = z.infer<typeof SendRecommendationFollowUpInputSchema>;

export async function sendRecommendationFollowUpEmail(data: SendRecommendationFollowUpInput): Promise<{ success: boolean; message: string; errors?: z.typeToFlattenedError<SendRecommendationFollowUpInput, string>['fieldErrors'] }> {
  try {
    const validatedData = SendRecommendationFollowUpInputSchema.parse(data);

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const contactFormRecipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL;
    // For Gmail, sender email should typically be the authenticated user.
    const contactFormSenderEmail = process.env.GMAIL_USER;

    if (!gmailUser || !gmailAppPassword || !contactFormRecipientEmail || !contactFormSenderEmail) {
      console.error('Missing Gmail SMTP configuration in .env. Ensure GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_FORM_RECIPIENT_EMAIL are set.');
      return { success: false, message: 'Server configuration error. Email functionality is not available.' };
    }
    
    if (gmailUser === "your-gmail-address@gmail.com" || gmailAppPassword === "your-16-character-app-password" || contactFormSenderEmail === "your-gmail-address@gmail.com") {
      const errMsg = 'Critical: Gmail SMTP settings in .env are still placeholders. GMAIL_USER and CONTACT_FORM_SENDER_EMAIL must be your Gmail address, and GMAIL_APP_PASSWORD must be a valid App Password.';
      console.error(errMsg);
      return { success: false, message: 'Email server configuration incomplete. Please contact the site administrator.' };
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const mailOptions = {
      from: `"${validatedData.name} (SaaSnext AI Recommender)" <${contactFormSenderEmail}>`,
      replyTo: validatedData.email,
      to: contactFormRecipientEmail,
      subject: `Project Inquiry from AI Recommender: ${validatedData.name}`,
      text:
        `You have a new project inquiry via the AI Service Recommender.\n\n` +
        `Contact Details:\n` +
        `Name: ${validatedData.name}\n` +
        `Email: ${validatedData.email}\n` +
        `${validatedData.whatsapp ? `WhatsApp: ${validatedData.whatsapp}\n` : ''}\n` +
        `AI Recommendation:\n` +
        `Recommended Services: ${validatedData.aiRecommendedServices.join(', ')}\n` +
        `Reasoning: ${validatedData.aiReasoning}\n\n` +
        `User's Project Details:\n${validatedData.projectDetails}`,
      html:
        `<p>You have a new project inquiry via the AI Service Recommender.</p>` +
        `<h3>Contact Details:</h3>` +
        `<p><strong>Name:</strong> ${validatedData.name}</p>` +
        `<p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>` +
        `${validatedData.whatsapp ? `<p><strong>WhatsApp:</strong> ${validatedData.whatsapp}</p>` : ''}` +
        `<h3>AI Recommendation:</h3>` +
        `<p><strong>Recommended Services:</strong> ${validatedData.aiRecommendedServices.join(', ')}</p>` +
        `<p><strong>Reasoning:</strong></p><p style="white-space: pre-wrap;">${validatedData.aiReasoning}</p>` +
        `<h3>User's Project Details:</h3>` +
        `<p style="white-space: pre-wrap;">${validatedData.projectDetails.replace(/\n/g, '<br>')}</p>`,
    };

    await transporter.verify();
    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Your project details have been sent successfully! We will get back to you shortly.' };
  } catch (error) {
    console.error('Error sending recommendation follow-up email via Gmail:', error);
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Invalid form data. Please check your input.', errors: error.flatten().fieldErrors };
    }
    
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    if (errorMessage.includes('Invalid login') || errorMessage.includes('Username and Password not accepted')) {
      console.error('Gmail Authentication Error: Check GMAIL_USER and GMAIL_APP_PASSWORD in .env. Ensure 2-Step Verification is ON and the App Password is correct.');
      return { success: false, message: 'Failed to send message. Authentication error with email server.' };
    }
    
    console.error(`Nodemailer error details: ${errorMessage}`, error);
    
    return { success: false, message: 'Failed to send message. An unexpected error occurred. Please try again later or contact us directly if the issue persists.' };
  }
}

    