import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import logoImageFile from '@/public/saasnextnewlogo.png'; // Import the image

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  // You can add specific props here if needed in the future
}

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn("relative", className)} {...props} style={{ width: 120, height: 30 }}>
      <Image
        src={logoImageFile} // Use the imported image object
        alt="SaaSnext Logo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust sizes as needed for responsive optimization
        style={{ objectFit: 'contain' }}
        priority // Consider adding priority if the logo is LCP (Largest Contentful Paint)
      />
    </div>
  );
}

// Helper function, assuming you might want to use cn for consistency
// If not using elsewhere, you can inline it or simplify.
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ');
}
