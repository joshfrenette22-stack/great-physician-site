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
    <section className="w-full max-w-[1240px] mx-auto px-5 md:px-10 py-16">
      {/* Section heading */}
      <div className="text-center mb-10">
        <p className="gp-eyebrow mb-3">Our approach</p>
        <h2 className="text-[28px] md:text-[40px] font-extrabold tracking-tight text-gray-900">
          A different kind of regenerative medicine
        </h2>
      </div>

      {/* Dark card */}
      <div
        className="relative rounded-[30px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #102A3B 0%, #16384C 50%, #1C485F 100%)',
          boxShadow: '0 32px 80px rgba(16,42,59,0.40)',
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
          <div className="md:border-r border-b md:border-b-0 border-white/10 p-6 md:p-10 flex flex-col">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-6"
              style={{ color: 'rgba(130,209,149,0.95)' }}
            >
              Three principles
            </p>
            <div className="flex flex-col gap-3 flex-1">
              {principles.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.number}
                    onClick={() => select(i)}
                    className="relative text-left rounded-[14px] px-5 py-4 transition-all duration-200 overflow-hidden"
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                      border: isActive ? '1px solid rgba(255,255,255,0.14)' : '1px solid transparent',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="text-[11px] font-mono font-bold mt-0.5"
                        style={{ color: isActive ? '#82D195' : 'rgba(255,255,255,0.30)' }}
                      >
                        {p.number}
                      </span>
                      <p
                        className="text-[18px] font-bold leading-snug"
                        style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.50)' }}
                      >
                        {p.title}
                      </p>
                    </div>

                    {/* Progress bar */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
                        <div
                          className="h-full"
                          style={{
                            width: `${progress}%`,
                            background: 'linear-gradient(90deg, #2EA84E, #82D195)',
                          }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: detail panel */}
          <div
            className="p-6 md:p-12 flex flex-col justify-between transition-opacity duration-250"
            style={{ opacity: fading ? 0 : 1 }}
          >
            {/* Ghost number */}
            <div
              className="text-[168px] font-extrabold leading-none select-none"
              style={{ color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}
            >
              {principle.number}
            </div>

            <div className="-mt-16">
              {/* Icon chip */}
              <div
                className="w-14 h-14 rounded-[16px] flex items-center justify-center mb-6"
                style={{
                  background: 'linear-gradient(135deg, #235A7C, #2EA84E)',
                  boxShadow: '0 14px 26px -10px rgba(46,168,78,0.6)',
                }}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-[30px] font-extrabold text-white leading-snug tracking-tight mb-4">
                {principle.title}
              </h3>
              <p
                className="leading-relaxed text-[17px] mb-8"
                style={{ color: 'rgba(220,232,239,0.86)' }}
              >
                {principle.body}
              </p>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 border border-white/14">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-xs font-semibold" style={{ color: '#B4E4C0' }}>{principle.badge}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
