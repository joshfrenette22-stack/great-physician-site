'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    eyebrow: 'Active lifestyles',
    conditionLabel: 'Sports & overuse',
    title: "Your weekend shouldn't end with a heating pad.",
    body: "We help active adults in Northern Colorado get back to golf, hiking, pickleball and the things that define a good weekend, without surgery and without pretending a cortisone shot is a long-term answer.",
    bg: '/images/stock/photo-1476480862126-209bfaa8edc8.jpg',
  },
  {
    eyebrow: 'Chronic conditions',
    conditionLabel: 'Ongoing & unresolved',
    title: "Pain that won't quit deserves more than a prescription.",
    body: "If you've been told there's nothing left to try, we'd like a second look. Regenerative medicine isn't a miracle, but for the right patient it can change the trajectory.",
    bg: '/images/stock/photo-1504052434569-70ad5836ab65.jpg',
  },
];

const INTERVAL = 5200;

export function RotatingStoryPanel() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverRef = useRef(false);

  const goTo = useCallback((idx: number) => {
    if (idx === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 300);
  }, [active]);

  const advance = useCallback(() => {
    if (!hoverRef.current) {
      goTo((active + 1) % slides.length);
    }
  }, [active, goTo]);

  useEffect(() => {
    timerRef.current = setTimeout(advance, INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [advance]);

  const slide = slides[active];

  return (
    <section className="w-full max-w-[1240px] mx-auto px-10 py-8">
      <div
        className="relative rounded-[28px] min-h-[620px] overflow-hidden shadow-xl flex items-center"
        style={{ background: 'linear-gradient(100deg, #16384C 0%, #235A7C 42%, #2EA84E 100%)' }}
        onMouseEnter={() => { hoverRef.current = true; }}
        onMouseLeave={() => { hoverRef.current = false; }}
      >
        {/* Background images — crossfade */}
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={s.bg}
              alt=""
              fill
              className="object-cover"
              sizes="1240px"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Scrim */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(16,42,59,0.88) 0%, rgba(16,42,59,0.60) 55%, transparent 100%)' }}
        />

        {/* Decorative ring */}
        <div
          className="absolute -right-24 -top-24 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        />

        {/* Content */}
        <div
          className="relative z-10 max-w-[520px] px-16 py-16 transition-opacity duration-300"
          style={{ opacity: fading ? 0 : 1 }}
        >
          {/* Eyebrow */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-green-300 mb-4">
            Conditions we treat
          </p>

          {/* Active pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-xs font-medium text-white">{slide.conditionLabel}</span>
          </div>

          {/* Headline */}
          <h2 className="text-[44px] font-black leading-[1.08] tracking-tight text-white mb-5">
            {slide.title}
          </h2>

          {/* Body */}
          <p className="text-white/75 leading-relaxed mb-8 text-[17px]">
            {slide.body}
          </p>

          {/* CTA + dots */}
          <div className="flex items-center gap-6">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-teal-800 text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              See all conditions
            </Link>

            {/* Dot pagination */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{ background: i === active ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.30)' }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
