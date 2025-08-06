
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Chatbot from '@/components/common/chatbot'; // Import the Chatbot component
import Preloader from '@/components/common/preloader';

// --- FAVICON GUIDANCE ---
// The 'icons' object below configures various icon links for your site.
// Ensure your icon files are in the 'public' directory (e.g., /public/saasnext-site-icon.png).
// --- END FAVICON GUIDANCE ---

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Web Development Company & AI Solutions in Junagadh | SaaSnext',
    template: '%s | SaaSnext - Junagadh',
  },
  description: 'SaaSnext is a top web development company in Junagadh, offering AI solutions, lead generation, and digital marketing services in Gujarat. Partner with the best IT company in Junagadh for custom web and AI development.',
  // --- ICON METADATA ---
  // The 'icons' object configures various icon links for your site.
  // Ensure your icon files are in the 'public' directory.
  icons: {
    // Default icon for browsers (often used for favicons in tabs)
    // Pointing to your new site icon file.
    icon: { url: '/saasnext-site-icon.png', type: 'image/png' },

    // Apple touch icon (for when users add your site to their iOS home screen)
    // Using your new site icon file. For best results, create a dedicated 'apple-icon.png'
    // (e.g., 180x180px, square, no transparency) in your /public folder and update the URL.
    apple: { url: '/saasnext-site-icon.png', type: 'image/png' },

    // Shortcut icon (typically for older browsers, often favicon.ico)
    // If you have a 'public/favicon.ico', you can explicitly link it like this:
    // shortcut: { url: '/favicon.ico', type: 'image/x-icon' },
    // Note: Browsers often automatically detect /favicon.ico in the public root even without this.
  },
  // --- END ICON METADATA ---
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Preloader />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Chatbot /> {/* Add the Chatbot component here */}
      </body>
    </html>
  );
}
