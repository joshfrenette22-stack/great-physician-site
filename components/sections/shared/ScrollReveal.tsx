// components/sections/shared/ScrollReveal.tsx
import type { HTMLAttributes } from 'react';

export function ScrollReveal({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-reveal className={className} {...props}>
      {children}
    </div>
  );
}
