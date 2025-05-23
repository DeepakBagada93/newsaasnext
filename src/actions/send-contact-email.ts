
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

    if (brevoSmtpUser === "your-brevo-login-email@example.com") {
      const errMsg = 'Critical: BREVO_SMTP_USER in .env is still the placeholder "your-brevo-login-email@example.com". This must be updated to your actual Brevo login email for email sending to work.';
      console.error(errMsg);
      return { success: false, message: 'Email server configuration incomplete. Please contact the site administrator.' };
    }

    if (contactFormSenderEmail === "noreply@your-verified-domain.com") {
      const errMsg = 'Critical: CONTACT_FORM_SENDER_EMAIL in .env is still the placeholder "noreply@your-verified-domain.com". This must be updated to an email address from a domain verified within your Brevo account.';
      console.error(errMsg);
      return { success: false, message: 'Email server configuration incomplete. Please contact the site administrator.' };
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false, 
      auth: {
        user: brevoSmtpUser,
        pass: brevoSmtpKey,
      },
    });

    const mailOptions = {
      from: `"${validatedData.name}" <${contactFormSenderEmail}>`,
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

    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Message sent successfully! We will get back to you shortly.' };
  } catch (error) {
    console.error('Error sending contact email:', error); 
    if (error instanceof z.ZodError) {
        return { success: false, message: 'Invalid form data. Please check your input.', errors: error.flatten().fieldErrors };
    }
    
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    console.error(`Nodemailer error details: ${errorMessage}`, error); 
    
    return { success: false, message: 'Failed to send message. An unexpected error occurred. Please try again later or contact us directly if the issue persists.' };
  }
}
