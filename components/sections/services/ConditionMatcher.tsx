'use client';

import { useState } from 'react';
import Image from 'next/image';

const conditions = [
  {
    label: 'Knee · Hip · Shoulder',
    category: 'Joint pain',
  },
  {
    label: 'Tendon & ligament',
    category: 'Soft-tissue injury',
  },
  {
    label: 'Back & spine',
    category: 'Spine & pelvis',
  },
  {
    label: 'Sports & overuse',
    category: 'Active injuries',
  },
];

const results = [
  {
    title: 'PRP, or focused shockwave',
    text: 'For worn or arthritic joints, PRP is often our first regenerative step. We confirm the right fit at your consultation.',
    img: '/images/stock/photo-1576765608866-5b51046452be.jpg',
  },
  {
    title: 'Focused shockwave, or PRP',
    text: 'For stubborn tendon and ligament injuries, shockwave and PRP both encourage real healing without surgery.',
    img: '/images/stock/photo-1530549387789-4c1017266635.jpg',
  },
  {
    title: 'Prolotherapy',
    text: 'When instability drives back or pelvis pain, prolotherapy helps rebuild the ligament support around the joint.',
    img: '/images/stock/photo-1521119989659-a83eee488004.jpg',
  },
  {
    title: 'PRP, or shockwave',
    text: 'For overuse and nagging sports injuries, we match the therapy to the tissue so you can get back to training.',
    img: '/images/stock/photo-1486218119243-13883505764c.jpg',
  },
];

export function ConditionMatcher() {
  const [active, setActive] = useState(0);

  const result = results[active];

  return (
    <section className="w-full bg-gray-50 border-t border-gray-100 py-24" data-reveal>
      <div className="max-w-[1240px] mx-auto px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="gp-eyebrow mb-3">Find your fit</p>
          <h2
            className="font-display font-black text-gray-900 mb-4"
            style={{ fontSize: 42, letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            What&apos;s bothering you?
          </h2>
          <p className="text-gray-500 max-w-[480px] mx-auto" style={{ fontSize: 16 }}>
            Select what feels closest. We&apos;ll show you which treatment we typically reach for first.
          </p>
        </div>

        {/* 2-col layout */}
        <div className="grid gap-8 items-start" style={{ gridTemplateColumns: '1.1fr 1fr' }}>
          {/* Condition chips — 2×2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {conditions.map((c, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="text-left rounded-[16px] border p-5 transition-all duration-200"
                  style={{
                    borderColor: isActive ? 'var(--color-primary)' : '#DEE4EA',
                    background: isActive ? '#F0F6F9' : '#fff',
                    transform: isActive ? 'none' : undefined,
                    boxShadow: isActive ? '0 4px 12px rgba(18,46,66,0.08)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(18,46,66,0.10)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.transform = 'none';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }
                  }}
                >
                  <p
                    className="font-semibold uppercase tracking-[0.06em] mb-1"
                    style={{
                      fontSize: 11,
                      color: isActive ? 'var(--color-primary)' : '#9BA8B3',
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    className="font-bold text-gray-900"
                    style={{ fontSize: 16, fontFamily: 'var(--font-display)' }}
                  >
                    {c.category}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Result card */}
          <div
            className="relative rounded-[22px] overflow-hidden"
            style={{ minHeight: 360 }}
          >
            {/* Image with crossfade via opacity on key */}
            <div key={active} className="absolute inset-0 transition-opacity duration-400">
              <Image
                src={result.img}
                alt={result.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 50vw, 620px"
              />
            </div>

            {/* Gradient overlay from bottom */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(10,28,42,0.92) 0%, rgba(10,28,42,0.5) 50%, transparent 100%)',
              }}
            />

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white z-10">
              {/* Pill tag */}
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-white/20 text-white mb-3 backdrop-blur-sm"
                style={{ letterSpacing: '0.04em' }}
              >
                Recommended approach
              </span>
              <h3
                className="font-display font-bold text-white mb-2"
                style={{ fontSize: 22, lineHeight: 1.2 }}
              >
                {result.title}
              </h3>
              <p className="text-white/80 leading-relaxed" style={{ fontSize: 14 }}>
                {result.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
