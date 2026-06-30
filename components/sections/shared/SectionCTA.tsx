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
      <div className="max-w-[1280px] mx-auto text-center" style={{ padding: '96px 40px' }}>
        <span className="inline-flex items-center gap-2 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.16)', padding: '7px 16px', fontSize: 14 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span className="font-medium text-white/90">Now seeing patients in Northern Colorado</span></span>
        <h2 className="font-display font-extrabold max-w-[720px] mx-auto" style={{ fontSize: 48, lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff' }}>
          {title}
        </h2>
        {subtitle && <p className="mt-4 max-w-xl mx-auto" style={{ fontSize: 19, color: 'rgba(255,255,255,0.9)' }}>{subtitle}</p>}
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
        <p className="mt-5" style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>or call <a href="tel:9705550142" className="font-semibold text-white hover:text-green-300 transition-colors">(970) 555-0142</a></p>
        {children}
      </div>
    </section>
  );
}
