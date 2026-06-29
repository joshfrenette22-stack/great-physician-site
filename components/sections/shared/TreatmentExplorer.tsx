'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { treatments } from '@/lib/data/treatments';

const INTERVAL = 5200;

export function TreatmentExplorer() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
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
      const elapsed = now - startRef.current;
      const pct = Math.min((elapsed / INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    timerRef.current = setTimeout(() => {
      const next = (fromIdx + 1) % treatments.length;
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

  const selectTab = (idx: number) => {
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

  const treatment = treatments[active];

  return (
    <section
      className="w-full max-w-[1240px] mx-auto"
      style={{ padding: '90px 40px 30px', scrollMarginTop: 90 }}
      id="explorer"
    >
      {/* Heading */}
      <div style={{ maxWidth: 760, marginBottom: 44 }}>
        <p
          className="gp-eyebrow"
          style={{ marginBottom: 14 }}
        >
          Treatment explorer
        </p>
        <h2
          className="font-display font-extrabold text-teal-900"
          style={{ fontSize: 46, lineHeight: 1.04, letterSpacing: '-0.03em', margin: 0 }}
        >
          Three therapies, chosen for the evidence behind them.
        </h2>
      </div>

      {/* 2-col layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 30, alignItems: 'stretch' }}>
        {/* Tab rail */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {treatments.map((t, i) => {
            const isActive = i === active;
            return (
              <button
                key={t.id}
                onClick={() => selectTab(i)}
                className="text-left transition-colors duration-200"
                style={{
                  cursor: 'pointer',
                  border: `1px solid ${isActive ? 'var(--color-primary)' : 'var(--border-default)'}`,
                  background: isActive ? 'var(--green-50)' : 'var(--white)',
                  borderRadius: 18,
                  padding: '22px 24px',
                  display: 'block',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--color-primary)' : 'var(--text-subtle)',
                    marginBottom: 8,
                  }}
                >
                  {t.tagline}
                </span>
                <span
                  className="font-display"
                  style={{
                    display: 'block',
                    fontWeight: 700,
                    fontSize: 22,
                    color: 'var(--teal-900)',
                  }}
                >
                  {t.name}
                </span>
              </button>
            );
          })}

          {/* Progress bar below all tabs */}
          <div style={{ marginTop: 6, height: 4, borderRadius: 999, background: 'var(--gray-100)', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'var(--color-primary)',
                transition: 'width .15s linear',
              }}
            />
          </div>
        </div>

        {/* Panel */}
        <div
          className="transition-opacity"
          style={{
            position: 'relative',
            minHeight: 470,
            borderRadius: 24,
            overflow: 'hidden',
            border: '1px solid var(--border-default)',
            boxShadow: 'var(--shadow-md)',
            opacity: fading ? 0 : 1,
            transition: 'opacity .5s ease',
          }}
          aria-live="polite"
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%' }}>
            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src={treatment.image}
                alt={treatment.name}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 50vw, 600px"
              />
            </div>

            {/* Description */}
            <div
              className="bg-white flex flex-col justify-center"
              style={{ padding: '44px 40px' }}
            >
              <h3
                className="font-display"
                style={{
                  fontWeight: 800,
                  fontSize: 30,
                  letterSpacing: '-0.02em',
                  color: 'var(--teal-900)',
                  margin: '0 0 14px',
                }}
              >
                {treatment.name}
              </h3>
              <p
                style={{
                  fontSize: 16.5,
                  lineHeight: 1.62,
                  color: 'var(--text-body)',
                  margin: '0 0 22px',
                }}
              >
                {treatment.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, color: 'var(--color-primary)', fontWeight: 700 }}>✓</span>
                  <span style={{ fontSize: 15, color: 'var(--text-muted)' }}>
                    <strong style={{ color: 'var(--teal-900)' }}>Best for:</strong> {treatment.bestFor.join(', ')}.
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, color: 'var(--color-primary)', fontWeight: 700 }}>✓</span>
                  <span style={{ fontSize: 15, color: 'var(--text-muted)' }}>
                    <strong style={{ color: 'var(--teal-900)' }}>Visit:</strong> {treatment.visitNote}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
