// components/sections/shared/SectionCTA.tsx
import Link from 'next/link';
import { Button } from '@/components/ui';
import type { ReactNode } from 'react';

interface SectionCTAProps {
  title: string;
  subtitle?: string;
  variant?: 'dark' | 'gradient';
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  children?: ReactNode;
}

export function SectionCTA({
  title,
  subtitle,
  variant = 'dark',
  primaryLabel = 'Schedule a Visit',
  primaryHref = '/schedule',
  secondaryLabel,
  secondaryHref,
  children,
}: SectionCTAProps) {
  const bg = variant === 'gradient'
    ? 'bg-gradient-to-r from-teal-800 via-teal-600 to-green-500'
    : 'bg-teal-900';

  return (
    <section className={`${bg} text-white`}>
      <div className="max-w-[1280px] mx-auto px-10 py-20 md:py-28 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-lg text-teal-200 max-w-xl mx-auto">{subtitle}</p>}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryHref}>
            <Button variant="accent" size="lg">{primaryLabel}</Button>
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="text-sm font-medium text-teal-200 hover:text-white transition-colors">
              {secondaryLabel} &rarr;
            </Link>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
