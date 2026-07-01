'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    eyebrow: 'Back & neck pain',
    conditionLabel: 'Back & neck pain',
    title: 'Calm the source, not just the symptom.',
    body: 'When neck and back pain hasn\'t responded to rest or therapy, targeted regenerative treatment can address the irritated tissue itself, helping the area settle and heal.',
    bg: '/images/joint-spine.png',
  },
  {
    eyebrow: 'Shoulder & joint pain',
    conditionLabel: 'Shoulder & joint pain',
    title: 'Rebuild the joint, not replace it.',
    body: 'Rotator cuff, tendon and ligament damage often respond to PRP, prolotherapy or focused shockwave, a conservative path worth exploring before you ever consider surgery.',
    bg: '/images/joint-shoulder.png',
  },
  {
    eyebrow: 'Knee & arthritis',
    conditionLabel: 'Knee & arthritis',
    title: 'Ease arthritis, keep moving.',
    body: 'For worn, arthritic knees, regenerative options can calm inflammation and support the joint, helping you stay active without rushing toward a replacement.',
    bg: '/images/joint-knee.png',
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
    <section className="w-full max-w-[1240px] mx-auto px-5 md:px-10 pt-7 pb-0">
      <div
        className="relative rounded-[28px] min-h-[480px] md:min-h-[620px] overflow-hidden shadow-xl"
        style={{ background: 'linear-gradient(100deg, #16384C 0%, #235A7C 42%, #2EA84E 100%)' }}
        onMouseEnter={() => { hoverRef.current = true; }}
        onMouseLeave={() => { hoverRef.current = false; }}
      >
        {/* Background images — crossfade with soft-light blend */}
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === active ? 0.6 : 0, mixBlendMode: 'soft-light' }}
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
          style={{ background: 'linear-gradient(90deg, rgba(18,46,66,0.62) 0%, rgba(18,46,66,0.28) 38%, rgba(18,46,66,0) 62%)' }}
        />

        {/* Decorative ring — bottom left, thick border */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: '-160px',
            bottom: '-180px',
            width: '420px',
            height: '420px',
            border: '44px solid rgba(255,255,255,0.06)',
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 max-w-[520px] min-h-[480px] md:min-h-[620px] flex flex-col justify-center transition-opacity duration-300 px-7 py-10 md:px-16 md:py-16"
          style={{ opacity: fading ? 0 : 1 }}
        >
          {/* Eyebrow */}
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.72)', marginBottom: 6 }}>
            Conditions we treat
          </p>

          {/* Active pill */}
          <div>
            <span className="inline-flex items-center gap-2 bg-white/16 rounded-full" style={{ padding: '7px 14px' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green-400)' }} />
              <span className="text-[13px] font-semibold text-white">{slide.conditionLabel}</span>
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-extrabold leading-[1.08] text-[30px] md:text-[44px]" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.025em', margin: '18px 0 16px', color: '#fff' }}>
            {slide.title}
          </h2>

          {/* Body */}
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: 0, maxWidth: 440 }}>
            {slide.body}
          </p>

          {/* CTA + dots */}
          <div className="flex items-center" style={{ gap: 22, marginTop: 32 }}>
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-6 h-[52px] rounded-[12px] text-base font-semibold tracking-[0.01em] border-[1.5px] border-transparent transition-colors"
              style={{ background: '#2EA84E', color: '#fff' }}
            >
              Schedule a Visit
            </Link>

            {/* Dot pagination — elongated pills when active */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? '30px' : '9px',
                    height: '9px',
                    background: i === active ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.30)',
                  }}
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
