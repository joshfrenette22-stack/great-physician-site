// components/sections/shared/SubpageHero.tsx
import type { ReactNode } from 'react';

interface SubpageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function SubpageHero({ title, subtitle, children }: SubpageHeroProps) {
  return (
    <section className="relative bg-teal-900 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(46,168,78,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(35,90,124,0.20)_0%,transparent_70%)] pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-10 py-24 md:py-32">
        <h1 className="font-display text-[clamp(2.5rem,5vw,4.75rem)] font-extrabold tracking-tight leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-teal-200 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
