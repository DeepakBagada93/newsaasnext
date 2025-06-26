
import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  // You can add specific props here if needed in the future
}

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)} {...props}>
      <Image
        src="/saasnextnewlogo.png"
        alt="SaaSnext Logo"
        width={144}
        height={36}
        style={{ objectFit: 'contain' }}
        priority 
      />
    </div>
  );
}
