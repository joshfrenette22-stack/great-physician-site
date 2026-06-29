'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.classList.add('is-ready');
    }, 50);
    const failsafe = setTimeout(() => {
      if (el) {
        el.style.opacity = '1';
        const children = el.querySelectorAll<HTMLElement>('.gp-hero-child');
        children.forEach((c) => { c.style.opacity = '1'; c.style.transform = 'none'; });
      }
    }, 1500);
    return () => { clearTimeout(timer); clearTimeout(failsafe); };
  }, []);

  return (
    <>
      <style>{`
        .gp-hero .gp-hero-child {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .gp-hero.is-ready .gp-hero-child:nth-child(1) { opacity: 1; transform: none; transition-delay: 0ms; }
        .gp-hero.is-ready .gp-hero-child:nth-child(2) { opacity: 1; transform: none; transition-delay: 100ms; }
        .gp-hero.is-ready .gp-hero-child:nth-child(3) { opacity: 1; transform: none; transition-delay: 200ms; }
        .gp-hero.is-ready .gp-hero-child:nth-child(4) { opacity: 1; transform: none; transition-delay: 320ms; }
      `}</style>
      <section className="bg-white w-full">
        <div
          ref={ref}
          className="gp-hero max-w-[1240px] mx-auto px-5 md:px-10 pt-[48px] md:pt-[72px] pb-0 text-center flex flex-col items-center"
        >
          {/* Badge */}
          <div className="gp-hero-child mb-6">
            <Badge variant="green" dot>
              Regenerative medicine · Northern Colorado
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="gp-hero-child text-[38px] sm:text-[52px] md:text-[68px] font-black tracking-[-0.03em] leading-[1.06] max-w-[880px] text-gray-900 mb-6">
            Restore function. Avoid surgery.
            <br />
            <span className="gp-text-gradient">Reclaim your life.</span>
          </h1>

          {/* Subhead */}
          <p className="gp-hero-child text-[17px] md:text-[20px] text-gray-500 max-w-[620px] leading-relaxed mb-10">
            Evidence-based regenerative medicine in Northern Colorado, built on honest guidance, conservative care, and treatments that actually have the science behind them.
          </p>

          {/* CTA Buttons */}
          <div className="gp-hero-child flex flex-col sm:flex-row items-center gap-4 mb-12">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-7 py-3.5 text-lg font-medium rounded-lg bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 shadow-sm transition-all duration-200"
            >
              Schedule a Visit
            </Link>
            <Link
              href="#treat"
              className="inline-flex items-center justify-center px-7 py-3.5 text-lg font-medium rounded-lg bg-white text-teal-600 border border-gray-200 hover:bg-gray-50 active:bg-gray-100 transition-all duration-200"
            >
              See what we treat
            </Link>
          </div>

          {/* Social proof */}
          <div className="gp-hero-child flex items-center gap-3 pb-16">
            <div className="flex -space-x-2">
              {[
                '/images/stock/photo-1599566150163-29194dcaad36.jpg',
                '/images/stock/photo-1472099645785-5658abf4ff4e.jpg',
                '/images/stock/photo-1573497019940-1c28c88b4f3e.jpg',
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative"
                  style={{ zIndex: 3 - i }}
                >
                  <Image
                    src={src}
                    alt="Patient avatar"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-left max-w-[260px]">
              Now welcoming new patients, conservative care, honestly explained.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
