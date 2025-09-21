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
import { cn } from '@/lib/utils';
import { AuthProvider } from '@/contexts/auth-context';


function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // The login page and the client/admin dashboards are considered "app views"
  const isAppView = pathname.startsWith('/client-dashboard') || pathname.startsWith('/login') || pathname.startsWith('/saasnext-admin');

  return (
    <>
      {!isAppView && <Preloader />}
      {!isAppView && <Header />}
      <main className={cn('flex-grow', isAppView ? 'contents' : 'w-full')}>
        {children}
      </main>
      {!isAppView && <Footer />}
      <Toaster />
      {!isAppView && <Chatbot />}
    </>
  );
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
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
        <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased flex flex-col min-h-screen`}>
           <AuthProvider>
                <RootLayoutContent>
                    {children}
                </RootLayoutContent>
           </AuthProvider>
        </body>
      </html>
  );
}
