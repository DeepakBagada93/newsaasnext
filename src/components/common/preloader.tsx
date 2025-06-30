'use client';

import { useState, useEffect } from 'react';
import Logo from '@/components/icons/logo';
import { cn } from '@/lib/utils';

// Array of engaging hooks/phrases to cycle through
const loadingTexts = [
  "Crafting Your Digital Foundation...",
  "Assembling Your Growth Strategy...",
  "Generating High-Quality Leads...",
  "Automating Your Success...",
  "Building Your Vision...",
  "Igniting Digital Momentum...",
];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const counterTimer = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        }
        clearInterval(counterTimer);
        return 100;
      });
    }, 25); // Controls the speed of counting (2.5 seconds total)

    const textTimer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % loadingTexts.length);
    }, 400); // Cycle text every 400ms

    return () => {
      clearInterval(counterTimer);
      clearInterval(textTimer);
      // Restore scrolling when component is done
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (counter === 100) {
      // Start fade out after a short delay
      const fadeOutTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 500);

      // Remove the preloader from the DOM after the fade out animation
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 1500); // Should be a bit longer than the transition duration

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [counter]);

  if (!loading) {
    // Restore scrolling just in case the cleanup function didn't run
     if (typeof window !== 'undefined') {
      document.body.style.overflow = '';
    }
    return null;
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000',
        isFadingOut ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div className="mb-8">
        <Logo />
      </div>
      <div className="flex items-center space-x-2 text-4xl md:text-6xl font-bold text-primary">
        <span className="font-mono tabular-nums">{counter}</span>
        <span>%</span>
      </div>
      <p className="mt-4 text-lg text-muted-foreground text-center h-7">
        <span key={currentTextIndex} className="animate-in fade-in duration-500 inline-block">
          {loadingTexts[currentTextIndex]}
        </span>
      </p>
    </div>
  );
}
