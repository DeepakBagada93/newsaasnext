
'use client';

import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Chatbot from '@/components/common/chatbot';
import Preloader from '@/components/common/preloader';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isClientDashboard = pathname.startsWith('/client-dashboard');
  const isAdminPortal = pathname.startsWith('/saasnextdbadmin');
  const isAppView = isClientDashboard || isAdminPortal;

  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <head>
          {/*
            The 'metadata' object can't be exported from a client component.
            To solve the build error, the export was removed and essential meta tags
            are placed here manually. This is a valid approach for static metadata.
          */}
          <title>Web Development Company & AI Solutions in Junagadh | SaaSnext</title>
          <meta name="description" content="SaaSnext is a web development company in Junagadh, offering AI solutions, lead generation, and digital marketing services in Gujarat. Partner with our IT company in Junagadh for custom web and AI development." />
          <link rel="icon" href="/saasnext-site-icon.png" type="image/png" />
          <link rel="apple-touch-icon" href="/saasnext-site-icon.png" type="image/png" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
          {!isAppView && <Preloader />}
          {!isAppView && <Header />}
          <main className={cn('flex-grow', (isClientDashboard || isAdminPortal) && 'contents', !isAppView && 'w-full')}>
            {children}
          </main>
          {!isAppView && <Footer />}
          <Toaster />
          {!isAppView && <Chatbot />}
        </body>
      </html>
    </ClerkProvider>
  );
}
