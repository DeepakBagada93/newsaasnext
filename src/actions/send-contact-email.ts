
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

    const brevoSmtpKey = process.env.BREVO_SMTP_KEY;
    const brevoSmtpUser = process.env.BREVO_SMTP_USER;
    const contactFormRecipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL;
    const contactFormSenderEmail = process.env.CONTACT_FORM_SENDER_EMAIL;

    if (!brevoSmtpKey || !brevoSmtpUser || !contactFormRecipientEmail || !contactFormSenderEmail) {
      console.error('Missing Brevo SMTP configuration in .env. Ensure BREVO_SMTP_KEY, BREVO_SMTP_USER, CONTACT_FORM_RECIPIENT_EMAIL, and CONTACT_FORM_SENDER_EMAIL are set.');
      return { success: false, message: 'Server configuration error. Email functionality is not available.' };
    }
     if (brevoSmtpUser === "your-brevo-login-email@example.com" || contactFormSenderEmail === "noreply@your-verified-domain.com") {
      console.warn('Using placeholder email configuration. Please update .env with actual Brevo credentials and a verified sender domain.');
      // Optionally, you could prevent sending emails with placeholder values here for production.
      // For now, we'll log a warning and proceed if the user still has placeholder values.
    }


    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false, // Brevo uses STARTTLS on port 587
      auth: {
        user: brevoSmtpUser, // Your Brevo account email
        pass: brevoSmtpKey,   // Your Brevo SMTP key (API v3 key)
      },
      tls: {
        ciphers:'SSLv3'
      }
    });

    const mailOptions = {
      from: `"${validatedData.name}" <${contactFormSenderEmail}>`, // Display name is user's name, email is your verified sender
      replyTo: validatedData.email, // User's actual email for easy reply
      to: contactFormRecipientEmail, // Your email address to receive messages
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

    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Message sent successfully! We will get back to you shortly.' };
  } catch (error) {
    console.error('Error sending contact email:', error);
    if (error instanceof z.ZodError) {
        return { success: false, message: 'Invalid form data. Please check your input.', errors: error.flatten().fieldErrors };
    }
    // Log the specific error for server-side debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Nodemailer error details: ${errorMessage}`);
    
    return { success: false, message: 'Failed to send message. An unexpected error occurred. Please try again later or contact us directly if the issue persists.' };
  }
}
