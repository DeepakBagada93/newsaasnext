'use client'; 
import { usePathname } from 'next/navigation';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Chatbot from '@/components/common/chatbot';
import Preloader from '@/components/common/preloader';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en" className="dark">
        <head>
          <title>Web Development Company & AI Solutions in Junagadh | SaaSnext</title>
          <meta name="description" content="SaaSnext is a web development company in Junagadh, offering AI solutions, lead generation, and digital marketing services in Gujarat. Partner with our IT company in Junagadh for custom web and AI development." />
          <link rel="icon" href="/saasnext-site-icon.png" type="image/png" />
          <link rel="apple-touch-icon" href="/saasnext-site-icon.png" type="image/png" />
        </head>
        <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased flex flex-col min-h-screen`}>
            <Preloader />
            <Header />
            <main className='flex-grow w-full'>
                {children}
            </main>
            <Footer />
            <Toaster />
            <Chatbot />
        </body>
      </html>
  );
}
