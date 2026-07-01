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
    <section
      className="w-full bg-gray-50"
      style={{ marginTop: 80, borderTop: '1px solid var(--border-default)' }}
      data-reveal
    >
      <div className="max-w-[1240px] mx-auto px-5 py-12 md:px-10 md:py-[84px]">
        {/* Heading */}
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 44px' }}>
          <p className="gp-eyebrow" style={{ marginBottom: 14 }}>Find your fit</p>
          <h2
            className="font-display font-extrabold text-teal-900"
            style={{ fontSize: 'clamp(28px, 5vw, 42px)', letterSpacing: '-0.03em', margin: '0 0 14px' }}
          >
            What&apos;s bothering you?
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>
            Tap an area to see how we&apos;d typically approach it. A consultation confirms the right path for you.
          </p>
        </div>

        {/* 2-col layout — stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-start">
          {/* Condition chips — 2×2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {conditions.map((c, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="text-left transition-all duration-200"
                  style={{
                    background: 'var(--white)',
                    border: `1.5px solid ${isActive ? 'var(--color-primary)' : 'var(--border-default)'}`,
                    borderRadius: 16,
                    padding: 20,
                    cursor: 'pointer',
                    transition: 'transform .18s ease, box-shadow .2s ease, border-color .2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.transform = 'none';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--color-primary)' : 'var(--text-subtle)',
                      marginBottom: 8,
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    className="font-display"
                    style={{ fontWeight: 700, fontSize: 19, color: 'var(--teal-900)' }}
                  >
                    {c.category}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Result card */}
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: 22, minHeight: 320, boxShadow: 'var(--shadow-md)' }}
          >
            {/* Image with crossfade */}
            <div key={active} className="absolute inset-0">
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
                background: 'linear-gradient(to top, rgba(18,46,66,0.92) 18%, rgba(18,46,66,0.25) 100%)',
              }}
            />

            {/* Text overlay */}
            <div
              className="absolute text-white"
              style={{ left: 0, right: 0, bottom: 0, padding: '32px 34px' }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  padding: '6px 13px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.18)',
                  fontSize: 12.5,
                  fontWeight: 600,
                  marginBottom: 14,
                }}
              >
                Recommended approach
              </div>
              <h3
                className="font-display"
                style={{
                  fontWeight: 800,
                  fontSize: 26,
                  letterSpacing: '-0.02em',
                  margin: '0 0 10px',
                  color: '#fff',
                }}
              >
                {result.title}
              </h3>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.55,
                  color: 'rgba(255,255,255,0.9)',
                  margin: 0,
                }}
              >
                {result.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
