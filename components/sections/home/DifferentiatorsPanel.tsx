'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Minimize2, ShieldCheck, Leaf } from 'lucide-react';

const principles = [
  {
    number: '01',
    icon: Minimize2,
    title: 'We start with the least you need.',
    body: 'Plenty of clinics lead with their most expensive procedure. We lead with the most conservative option that still has evidence. If prolotherapy or shockwave will get you there, that\'s where we start.',
    badge: 'Conservative-first, always',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Physician-performed. Honestly explained.',
    body: 'Dr. Hric performs your treatments himself — not a tech, not a PA. You\'ll know exactly what\'s happening, why, and what to realistically expect. No bait-and-switch, no overselling.',
    badge: 'Dr. Hric, every visit',
  },
  {
    number: '03',
    icon: Leaf,
    title: 'We help you steward your health.',
    body: 'Pain is rarely just one thing. We look at the whole picture — movement, load, lifestyle — and help you build a plan that lasts, not just a treatment that gets you through the week.',
    badge: 'Whole-person care',
  },
];

const INTERVAL = 5000;

export function DifferentiatorsPanel() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const startProgress = useCallback((fromIdx: number) => {
    clearTimers();
    setProgress(0);
    startRef.current = performance.now();

    const tick = (now: number) => {
      const pct = Math.min(((now - startRef.current) / INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    timerRef.current = setTimeout(() => {
      const next = (fromIdx + 1) % principles.length;
      setFading(true);
      setTimeout(() => {
        setActive(next);
        setFading(false);
        startProgress(next);
      }, 250);
    }, INTERVAL);
  }, [clearTimers]);

  useEffect(() => {
    startProgress(0);
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const select = (idx: number) => {
    if (idx === active) return;
    clearTimers();
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
      startProgress(idx);
    }, 250);
    setProgress(0);
  };

  const principle = principles[active];
  const Icon = principle.icon;

  return (
    <section className="w-full max-w-[1240px] mx-auto px-5 md:px-10 pt-14 md:pt-24 pb-4">
      {/* Section heading */}
      <div className="text-center mx-auto mb-12" style={{ maxWidth: 760 }}>
        <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--color-accent-strong)' }}>Our approach</span>
        <h2 className="font-extrabold text-[28px] md:text-[42px]" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '12px 0 0' }}>A different kind of regenerative medicine</h2>
      </div>

      {/* Dark card */}
      <div
        className="relative rounded-[30px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #102A3B 0%, #16384C 50%, #1C485F 100%)',
          boxShadow: '0 40px 80px -32px rgba(16,42,59,0.55)',
        }}
      >
        {/* Ambient glows */}
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(46,168,78,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[350px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(53,110,145,0.15) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[0.82fr_1.18fr] min-h-[480px]">
          {/* Left: selector */}
          <div className="md:border-r border-b md:border-b-0 border-white/10 flex flex-col px-5 py-8 md:pl-11 md:pr-8 md:py-11">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: 'rgba(130,209,149,0.95)', marginBottom: 12 }}
            >
              Three principles
            </p>
            <div className="flex flex-col gap-[10px] flex-1">
              {principles.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.number}
                    onClick={() => select(i)}
                    className="relative text-left rounded-[16px] transition-all duration-200 overflow-hidden"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      width: '100%',
                      padding: '18px 16px',
                      background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      className="flex-none"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: isActive ? '#82D195' : 'rgba(255,255,255,0.34)', transition: 'color 280ms ease' }}
                    >
                      {p.number}
                    </span>
                    <span
                      className="flex-1"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, lineHeight: 1.25, color: isActive ? '#ffffff' : 'rgba(255,255,255,0.6)', transition: 'color 280ms ease' }}
                    >
                      {p.title}
                    </span>

                    {/* Progress bar */}
                    <span className="absolute left-4 right-4 bottom-2 h-[2px] rounded-sm overflow-hidden" style={{ background: 'rgba(255,255,255,0.10)' }}>
                      <span
                        className="block h-full rounded-sm"
                        style={{
                          width: isActive ? `${progress}%` : '0%',
                          background: 'linear-gradient(90deg, #2EA84E, #82D195)',
                        }}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: detail panel */}
          <div
            className="relative flex flex-col transition-opacity px-5 py-8 md:px-[52px] md:py-[52px] md:pb-12"
            style={{ opacity: fading ? 0 : 1, minHeight: 372, transition: 'opacity 620ms cubic-bezier(0.4,0,0.2,1)' }}
          >
            {/* Ghost number */}
            <span
              className="absolute select-none"
              aria-hidden="true"
              style={{ top: 18, right: 40, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 168, lineHeight: 1, color: 'rgba(255,255,255,0.05)', letterSpacing: '-0.04em' }}
            >
              {principle.number}
            </span>

            <div className="flex flex-col flex-1">
              {/* Icon chip */}
              <span
                className="inline-flex items-center justify-center"
                style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: 'linear-gradient(135deg, #235A7C, #2EA84E)',
                  boxShadow: '0 14px 26px -10px rgba(46,168,78,0.6)',
                }}
              >
                <Icon className="text-white" style={{ width: 26, height: 26 }} />
              </span>

              <h3 className="relative font-extrabold text-white" style={{ fontFamily: 'var(--font-display)', fontSize: 30, lineHeight: 1.12, margin: '26px 0 14px', maxWidth: 460 }}>
                {principle.title}
              </h3>
              <p
                className="relative"
                style={{ fontSize: 17, lineHeight: 1.62, color: 'rgba(220,232,239,0.86)', margin: 0, maxWidth: 480 }}
              >
                {principle.body}
              </p>

              {/* Badge */}
              <span className="relative mt-auto self-start inline-flex items-center gap-2 rounded-full" style={{ padding: '8px 16px', background: 'rgba(130,209,149,0.14)', border: '1px solid rgba(130,209,149,0.3)', fontSize: 13, fontWeight: 600, letterSpacing: '0.02em', color: '#B4E4C0', marginTop: 'auto' }}>
                {principle.badge}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
