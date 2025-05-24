
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Chatbot from '@/components/common/chatbot'; // Import the Chatbot component

// --- BEGIN FAVICON IMPORTS ---
// Please ensure you create these files in your src/public/ directory.
// For example, src/public/icon.png.
// The apple-icon.png import has been temporarily removed. Add it back once src/public/apple-icon.png exists.
// For favicon.ico, it's best placed in the root `public` folder (e.g., /public/favicon.ico).
// import siteIconPng from '@/public/icon.png'; 
// import appleSiteIconPng from '@/public/apple-icon.png'; // Add this back when src/public/apple-icon.png is available
// --- END FAVICON IMPORTS ---

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
    default: 'SaaSnext: Website Development, AI SaaS & Lead Generation in Junagadh',
    template: '%s | SaaSnext Junagadh',
  },
  description: 'SaaSnext is a leading website development, AI SaaS development, and lead generation company in Junagadh. Igniting your digital success with expert solutions.',
  // --- BEGIN ICON METADATA ---
  icons: {
    // icon: siteIconPng.src, // Next.js will use the imported image's path
    // apple: appleSiteIconPng.src, // Add this back when src/public/apple-icon.png is available
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
