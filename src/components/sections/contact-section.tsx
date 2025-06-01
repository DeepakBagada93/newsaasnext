
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Send, Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, type SendContactEmailInput } from '@/actions/send-contact-email';
import Link from 'next/link';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters."}),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error Sending Message",
          description: result.message || "An unexpected error occurred.",
        });
        // If there are specific field errors from Zod on the server
        if (result.errors) {
          Object.entries(result.errors).forEach(([fieldName, fieldErrors]) => {
            if (fieldErrors && fieldErrors.length > 0) {
              form.setError(fieldName as keyof ContactFormValues, {
                type: 'server',
                message: fieldErrors.join(', '),
              });
            }
          });
        }
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "An unexpected error occurred while submitting the form.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Our Web & AI Experts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project for website development, AI SaaS, or lead generation? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="bg-card/50 shadow-xl">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form and our team will respond as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="name">Full Name</FormLabel>
                        <FormControl>
                          <Input id="name" placeholder="John Doe" {...field} disabled={isLoading} className="bg-background focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <FormControl>
                          <Input id="email" type="email" placeholder="you@example.com" {...field} disabled={isLoading} className="bg-background focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="subject">Subject</FormLabel>
                        <FormControl>
                          <Input id="subject" placeholder="Project Inquiry (e.g., Website Development for My Business)" {...field} disabled={isLoading} className="bg-background focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="message">Your Message</FormLabel>
                        <FormControl>
                          <Textarea id="message" placeholder="Tell us about your project or question..." rows={5} {...field} disabled={isLoading} className="bg-background focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8 pt-0 md:pt-10">
            <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:saasnextdb@gmail.com" className="hover:text-primary">saasnextdb@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:7016179234" className="hover:text-primary">7016179234</a>
              </div>
            </div>
            <div>
               <h4 className="text-lg font-medium text-foreground mb-2">Business Hours</h4>
               <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p> 
               <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="SaaSnext on Facebook">
                  <Facebook size={24} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="SaaSnext on Instagram">
                  <Instagram size={24} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="SaaSnext on X (formerly Twitter)">
                  <Twitter size={24} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="SaaSnext on LinkedIn">
                  <Linkedin size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
