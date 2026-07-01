'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

/* ── Animated bar ring ──────────────────────────────────────── */
const BAR_COUNT = 64;
const BAR_RADIUS = 166;

function rnd(i: number): number {
  const x = Math.sin(i * 12.9898 + 7.13) * 43758.5453;
  return x - Math.floor(x);
}

// Pre-compute per-bar constants
const bars = Array.from({ length: BAR_COUNT }, (_, i) => ({
  angle: (i / BAR_COUNT) * 360,
  baseLen: Math.round(11 + rnd(i) * 17),
  isGray: rnd(i + 200) > 0.84,
  speed: 0.6 + rnd(i + 50) * 1.4,       // random oscillation speed
  phase: rnd(i + 100) * Math.PI * 2,     // random phase offset
  amplitude: 4 + rnd(i + 150) * 10,      // random bounce amplitude
}));

function BarRing({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight;
      // 0 when top of element hits bottom of viewport, 1 when top hits top
      const scrollT = Math.max(0, Math.min(1, 1 - rect.top / viewH));
      const now = performance.now() / 1000;

      bars.forEach((bar, i) => {
        const el = barRefs.current[i];
        if (!el) return;
        // Idle oscillation that dampens as scroll progresses
        const idle = Math.sin(now * bar.speed + bar.phase) * bar.amplitude;
        const dampen = 1 - scrollT * 0.85;
        // Scroll drives bars outward (grows height)
        const scrollGrow = scrollT * 8;
        const h = bar.baseLen + idle * dampen + scrollGrow;
        el.style.height = `${Math.max(4, h)}px`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <div
      ref={containerRef}
      data-reveal
      style={{
        position: 'relative',
        width: 320,
        height: 320,
        margin: '48px auto 0',
        zIndex: 3,
      }}
    >
      {bars.map((bar, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 4,
            height: BAR_RADIUS + bar.baseLen,
            transformOrigin: '50% 100%',
            transform: `translate(-50%, -100%) rotate(${bar.angle}deg)`,
          }}
        >
          <div
            ref={(el) => { barRefs.current[i] = el; }}
            style={{
              width: 4,
              height: bar.baseLen,
              borderRadius: 2,
              background: bar.isGray ? '#d9ddda' : '#7cba8b',
              transition: 'height 0.05s linear',
            }}
          />
        </div>
      ))}
      {/* Center photo */}
      <Image
        src={src}
        alt={alt}
        width={320}
        height={320}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          objectFit: 'cover',
          boxShadow: 'var(--shadow-md)',
        }}
        sizes="320px"
      />
    </div>
  );
}

/* ── Step badge ─────────────────────────────────────────────── */
function StepBadge({ n }: { n: number }) {
  return (
    <div
      style={{
        width: 52,
        height: 52,
        borderRadius: 14,
        background: 'var(--gray-900)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 22,
        boxShadow: 'var(--shadow-md)',
        position: 'sticky',
        top: 96,
        zIndex: 1,
        margin: '0 auto',
      }}
    >
      {n}
    </div>
  );
}

/* ── Step connector line ─────────────────────────────────────── */
function StepLine() {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: -110,
        bottom: 0,
        width: 2,
        transform: 'translateX(-50%)',
        background: 'linear-gradient(to bottom, transparent 0%, var(--border-default) 24%, var(--border-default) 92%, transparent 100%)',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}

/* ── Step heading shared style ──────────────────────────────── */
const stepH2Style: React.CSSProperties = {
  position: 'relative',
  zIndex: 3,
  background: 'var(--white)',
  padding: '18px 0',
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: 36,
  lineHeight: 1.14,
  letterSpacing: '-0.02em',
  color: 'var(--text-strong)',
  maxWidth: 760,
  margin: '-52px auto 0',
};

/* ── Main component ─────────────────────────────────────────── */
export function StepJourney() {
  return (
    <section style={{ background: 'var(--white)' }}>
      <div
        style={{
          position: 'relative',
          maxWidth: 1100,
          margin: '0 auto',
          padding: '40px 40px 0',
        }}
      >

        {/* ── STEP 1 ── */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingBottom: 110 }}>
          <div style={{ position: 'relative', height: 300 }}>
            <StepLine />
            <StepBadge n={1} />
          </div>
          <div style={{ position: 'relative' }}>
            <h2 data-reveal style={stepH2Style}>
              It starts with a simple{' '}
              <span style={{ color: 'var(--color-accent-strong)' }}>conversation</span>
            </h2>
            <BarRing
              src="/images/stock/photo-1599566150163-29194dcaad36.jpg"
              alt="Patient"
            />
          </div>
          <p
            data-reveal
            style={{
              position: 'relative',
              zIndex: 2,
              fontSize: 17,
              lineHeight: 1.6,
              color: 'var(--text-body)',
              maxWidth: 520,
              margin: '36px auto 0',
            }}
          >
            Schedule a visit through our secure portal or a quick call. Tell us about the pain you&apos;re dealing with and what you&apos;ve already tried.
          </p>
        </div>

        {/* ── STEP 2 ── */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingBottom: 110 }}>
          <div style={{ position: 'relative', height: 300 }}>
            <StepLine />
            <StepBadge n={2} />
          </div>
          <h2 data-reveal style={stepH2Style}>
            Tell us what&apos;s going on,{' '}
            <span style={{ color: 'var(--color-primary)' }}>body and lifestyle</span>
          </h2>

          {/* Large image card with floating tags */}
          <div
            data-reveal
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 24,
              minHeight: 520,
              margin: '48px 0 0',
              zIndex: 2,
              background: "linear-gradient(to right, rgba(20,28,33,0.58) 0%, rgba(20,28,33,0.14) 44%, rgba(20,28,33,0) 72%), url('/images/stock/photo-1581056771107-24ca5f033842.jpg') center 30%/cover",
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 12,
                padding: 36,
                maxWidth: '70%',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#fff', boxShadow: 'var(--shadow-md)', padding: '11px 18px', borderRadius: 999, fontSize: 15, fontWeight: 500, color: 'var(--text-strong)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>
                Knee, hip &amp; shoulder pain
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#fff', boxShadow: 'var(--shadow-md)', padding: '11px 18px', borderRadius: 999, fontSize: 15, fontWeight: 500, color: 'var(--text-strong)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19c4-1 7-4 8-8M14 5c5 0 9 4 9 9"/></svg>
                Tendon &amp; ligament injuries
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#fff', boxShadow: 'var(--shadow-md)', padding: '11px 18px', borderRadius: 999, fontSize: 15, fontWeight: 500, color: 'var(--text-strong)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13C4 7 11 4 20 4c0 9-3 16-9 16z"/></svg>
                Arthritis &amp; joint stiffness
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#fff', boxShadow: 'var(--shadow-md)', padding: '11px 18px', borderRadius: 999, fontSize: 15, fontWeight: 500, color: 'var(--text-strong)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="4" x2="12" y2="20"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
                Back &amp; neck pain
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#fff', boxShadow: 'var(--shadow-md)', padding: '11px 18px', borderRadius: 999, fontSize: 15, fontWeight: 500, color: 'var(--text-strong)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>
                Sports &amp; overuse injuries
              </span>
            </div>
          </div>
        </div>

        {/* ── STEP 3 ── */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingBottom: 110 }}>
          <div style={{ position: 'relative', height: 300 }}>
            <StepLine />
            <StepBadge n={3} />
          </div>
          <h2 data-reveal style={stepH2Style}>
            Get a clear picture of{' '}
            <span style={{ color: 'var(--color-accent-strong)' }}>what&apos;s going on</span>
          </h2>

          {/* 3-col feature cards */}
          <div
            data-reveal
            style={{
              position: 'relative',
              zIndex: 3,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 32,
              margin: '48px 0 0',
              textAlign: 'left',
            }}
          >
            <div>
              <span style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: 12, background: 'var(--green-50)', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>
              </span>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text-strong)', margin: '0 0 5px' }}>Hands-on exam</h4>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>Dr. Hric examines the problem himself, in person, not a form.</p>
            </div>
            <div>
              <span style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: 12, background: 'var(--green-50)', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>
              </span>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text-strong)', margin: '0 0 5px' }}>Imaging, only if needed</h4>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>We order tests when they&apos;ll change the plan, never to pad a bill.</p>
            </div>
            <div>
              <span style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: 12, background: 'var(--green-50)', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              </span>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text-strong)', margin: '0 0 5px' }}>Plain-language results</h4>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>You&apos;ll understand exactly what&apos;s happening, and your options.</p>
            </div>
          </div>

          {/* Bento grid */}
          <div
            data-reveal
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 18,
              margin: '36px 0 0',
            }}
          >
            {/* Card 1: gradient brand */}
            <div
              style={{
                borderRadius: 22,
                background: 'var(--gradient-brand)',
                padding: 28,
                textAlign: 'left',
                color: '#fff',
                minHeight: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 26, height: 26, borderRadius: '50%', background: '#fff', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>1</span>
                <span style={{ fontSize: 14, fontWeight: 600 }}>Your assessment</span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, lineHeight: 1.18 }}>A diagnosis in plain language</div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', margin: '10px 0 0' }}>No jargon, just what&apos;s going on and what we&apos;d do about it.</p>
              </div>
            </div>

            {/* Card 2: image */}
            <div
              style={{
                position: 'relative',
                borderRadius: 22,
                overflow: 'hidden',
                minHeight: 300,
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <Image
                src="/images/stock/photo-1581056771107-24ca5f033842.jpg"
                alt="Doctor speaking with patient in clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 33vw, 360px"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,42,58,0.55) 0%, rgba(13,42,58,0) 36%)' }} />
              <div style={{ position: 'absolute', top: 20, left: 20, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 26, height: 26, borderRadius: '50%', background: '#fff', color: 'var(--text-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>2</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>Hands-on exam</span>
              </div>
            </div>

            {/* Card 3: your plan */}
            <div
              style={{
                borderRadius: 22,
                background: 'var(--white)',
                border: '1px solid var(--border-default)',
                padding: 22,
                textAlign: 'left',
                minHeight: 300,
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--gray-900)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>3</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>Your plan</span>
              </div>
              <div style={{ background: 'var(--gray-50)', borderRadius: 14, padding: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>Conservative first</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-accent-strong)', background: 'var(--green-100)', padding: '3px 9px', borderRadius: 999 }}>Recommended</span>
                </div>
                <div style={{ height: 8, borderRadius: 999, background: 'var(--gray-200)', overflow: 'hidden' }}>
                  <span style={{ display: 'block', height: '100%', width: '38%', background: 'var(--gradient-brand)' }} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--text-body)', padding: '9px 12px', background: 'var(--gray-50)', borderRadius: 10 }}>
                  Shockwave therapy<span style={{ color: 'var(--text-subtle)' }}>›</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--text-body)', padding: '9px 12px', background: 'var(--gray-50)', borderRadius: 10 }}>
                  PRP / Prolotherapy<span style={{ color: 'var(--text-subtle)' }}>›</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── STEP 4 ── */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingBottom: 110 }}>
          <div style={{ position: 'relative', height: 300 }}>
            <StepLine />
            <StepBadge n={4} />
          </div>
          <div style={{ position: 'relative' }}>
            <h2 data-reveal style={stepH2Style}>
              Physician-performed treatment,{' '}
              <span style={{ color: 'var(--color-primary)' }}>done in person</span>
            </h2>

            {/* Treatment photo cards */}
            <div
              data-reveal
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 18,
                margin: '48px 0 0',
              }}
            >
              {[
                {
                  label: 'PRP therapy',
                  src: '/images/services/prp-therapy.jpg',
                  alt: 'PRP therapy vials and preparation',
                },
                {
                  label: 'Prolotherapy',
                  src: '/images/services/prototherapy.jpg',
                  alt: 'Prolotherapy injection treatment',
                },
                {
                  label: 'Focused shockwave',
                  src: '/images/services/shockwave.jpg',
                  alt: 'Focused shockwave therapy device in use',
                },
              ].map((card) => (
                <div
                  key={card.label}
                  style={{ position: 'relative', borderRadius: 22, minHeight: 360, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 33vw, 360px"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,42,58,0.78) 0%, rgba(13,42,58,0) 52%)' }} />
                  <div style={{ position: 'absolute', left: 22, bottom: 22, fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', fontSize: 19 }}>
                    {card.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p
            data-reveal
            style={{
              position: 'relative',
              zIndex: 2,
              fontSize: 17,
              lineHeight: 1.6,
              color: 'var(--text-body)',
              maxWidth: 540,
              margin: '36px auto 0',
            }}
          >
            Dr. Hric performs your treatment himself, including every focused-shockwave session, right here in Northern Colorado.
          </p>
        </div>

        {/* ── STEP 5 ── */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingBottom: 110 }}>
          <div style={{ position: 'relative', height: 300 }}>
            <StepLine />
            <StepBadge n={5} />
          </div>
          <div style={{ position: 'relative' }}>
            <h2 data-reveal style={stepH2Style}>
              Ongoing guidance,{' '}
              <span style={{ color: 'var(--color-accent-strong)' }}>whenever you need it</span>
            </h2>

            {/* Dr. Hric photo */}
            <div
              data-reveal
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '56px 0 0',
              }}
            >
              <div style={{ position: 'relative', width: 210, height: 210 }}>
                <span style={{ position: 'absolute', inset: -6, borderRadius: '50%', border: '3px solid var(--green-300)' }} />
                <div style={{ position: 'relative', width: 210, height: 210, borderRadius: '50%', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                  <Image
                    src="/images/hric-headshot.jpg"
                    alt="Dr. Jerry Hric"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center top' }}
                    sizes="210px"
                  />
                </div>
                <span style={{ position: 'absolute', right: 10, bottom: 10, width: 26, height: 26, borderRadius: '50%', background: 'var(--green-500)', border: '3px solid #fff', display: 'block' }} />
              </div>
            </div>
          </div>
          <p
            data-reveal
            style={{
              position: 'relative',
              zIndex: 2,
              fontSize: 17,
              lineHeight: 1.6,
              color: 'var(--text-body)',
              maxWidth: 540,
              margin: '40px auto 0',
            }}
          >
            We stay with you, pairing treatment with guidance on movement, nutrition, sleep and weight, plus follow-ups, so the relief holds.
          </p>
        </div>

      </div>
    </section>
  );
}
