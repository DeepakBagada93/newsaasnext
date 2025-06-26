import Image from 'next/image';
import type { HTMLAttributes } from 'react';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  // You can add specific props here if needed in the future
}

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn("relative", className)} {...props} style={{ width: 144, height: 36 }}> {/* Increased size */}
      <Image
        src="/saasnextnewlogo.png"
        alt="SaaSnext Logo"
        fill
        sizes="150px" // Adjusted sizes attribute
        style={{ objectFit: 'contain' }}
        priority 
      />
    </div>
  );
}

// Helper function, assuming you might want to use cn for consistency
// If not using elsewhere, you can inline it or simplify.
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ');
}
