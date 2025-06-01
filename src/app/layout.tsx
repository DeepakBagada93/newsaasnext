
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Chatbot from '@/components/common/chatbot'; // Import the Chatbot component

// --- FAVICON GUIDANCE ---
// To use an icon from your `public` directory (e.g., /public/icon.png),
// reference it directly in the `metadata.icons` object below (e.g., icon: '/icon.png').
// For apple-touch-icon, ensure `public/apple-icon.png` exists and uncomment its line in `metadata.icons`.
// A `favicon.ico` file in the root of the `public` directory is often picked up automatically by browsers.
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
    default: 'SaaSnext: Website Development, AI SaaS & Lead Generation Company',
    template: '%s | SaaSnext',
  },
  description: 'SaaSnext is a leading website development, AI SaaS development, and lead generation company. Igniting your digital success with expert solutions.',
  // --- ICON METADATA ---
  icons: {
    icon: '/icon.png', // Assumes icon.png is in the public directory
    // apple: '/apple-icon.png', // Uncomment if you have public/apple-icon.png
    // You can add more specific icons here if needed, e.g., different sizes
    // shortcut: { url: "/favicon.ico", type: "image/x-icon" }, // If you want to explicitly link a /public/favicon.ico
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
