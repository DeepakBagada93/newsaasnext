
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const sendContactEmailSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters."}),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type SendContactEmailInput = z.infer<typeof sendContactEmailSchema>;

export async function sendContactEmail(data: SendContactEmailInput): Promise<{ success: boolean; message: string; errors?: z.typeToFlattenedError<SendContactEmailInput, string>['fieldErrors'] }> {
  try {
    const validatedData = sendContactEmailSchema.parse(data);

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const contactFormRecipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL;
    // For Gmail, sender email should typically be the authenticated user.
    const contactFormSenderEmail = process.env.GMAIL_USER; 

    if (!gmailUser || !gmailAppPassword || !contactFormRecipientEmail || !contactFormSenderEmail) {
      console.error('Missing Gmail SMTP configuration in .env. Ensure GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_FORM_RECIPIENT_EMAIL are set.');
      return { success: false, message: 'Server configuration error. Email functionality is not available.' };
    }

    if (gmailUser === "your-gmail-address@gmail.com" || gmailAppPassword === "your-16-character-app-password") {
      const errMsg = 'Critical: Gmail SMTP settings in .env are still placeholders. GMAIL_USER must be your Gmail address and GMAIL_APP_PASSWORD must be a valid App Password.';
      console.error(errMsg);
      return { success: false, message: 'Email server configuration incomplete. Please contact the site administrator.' };
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465, // Standard SSL port for Gmail SMTP
      secure: true, // Use SSL
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const mailOptions = {
      from: `"${validatedData.name}" <${contactFormSenderEmail}>`, // Gmail might override the 'name' part but sender email must be the authenticated user.
      replyTo: validatedData.email,
      to: contactFormRecipientEmail, 
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      text: `You have received a new message from your website contact form.\n\n` +
            `Name: ${validatedData.name}\n` +
            `Email: ${validatedData.email}\n` +
            `Subject: ${validatedData.subject}\n\n` +
            `Message:\n${validatedData.message}`,
      html: `<p>You have received a new message from your website contact form.</p>` +
            `<p><strong>Name:</strong> ${validatedData.name}</p>` +
            `<p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>` +
            `<p><strong>Subject:</strong> ${validatedData.subject}</p>` +
            `<p><strong>Message:</strong></p>` +
            `<p>${validatedData.message.replace(/\n/g, '<br>')}</p>`,
    };

    await transporter.verify(); // Verify connection configuration
    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Message sent successfully! We will get back to you shortly.' };
  } catch (error) {
    console.error('Error sending contact email via Gmail:', error); 
    if (error instanceof z.ZodError) {
        return { success: false, message: 'Invalid form data. Please check your input.', errors: error.flatten().fieldErrors };
    }
    
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    // Check for common Gmail auth errors
    if (errorMessage.includes('Invalid login') || errorMessage.includes('Username and Password not accepted')) {
        console.error('Gmail Authentication Error: Check GMAIL_USER and GMAIL_APP_PASSWORD in .env. Ensure 2-Step Verification is ON and the App Password is correct. Also, "Less secure app access" might need to be enabled if not using App Passwords (not recommended).');
        return { success: false, message: 'Failed to send message. Authentication error with email server.' };
    }
    
    console.error(`Nodemailer error details: ${errorMessage}`, error); 
    
    return { success: false, message: 'Failed to send message. An unexpected error occurred. Please try again later or contact us directly if the issue persists.' };
  }
}
