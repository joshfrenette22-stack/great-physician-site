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
    <section className="w-full max-w-[1240px] mx-auto px-5 md:px-10 py-20">
      {/* Heading */}
      <div className="mb-12">
        <p className="gp-eyebrow mb-3">Treatment explorer</p>
        <h2 className="text-[28px] md:text-[46px] font-black tracking-tight leading-[1.08] text-gray-900 max-w-[640px]">
          Three therapies, chosen for the evidence behind them.
        </h2>
      </div>

      {/* 2-col layout — stacks on mobile */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Tab rail */}
        <div className="w-full md:w-[340px] flex-shrink-0 flex flex-col gap-3">
          {treatments.map((t, i) => {
            const isActive = i === active;
            return (
              <button
                key={t.id}
                onClick={() => selectTab(i)}
                className="w-full text-left rounded-[14px] border px-5 py-4 transition-all duration-200 relative overflow-hidden"
                style={{
                  background: isActive ? '#EFF9F1' : '#fff',
                  borderColor: isActive ? '#2EA84E' : '#DEE4EA',
                }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green-600 mb-1">
                  {t.tagline}
                </p>
                <p className="text-[15px] font-bold text-gray-900">{t.name}</p>

                {/* Progress bar */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gray-100">
                    <div
                      className="h-full bg-teal-500 transition-none"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          className="flex-1 border border-gray-200 rounded-[20px] overflow-hidden transition-opacity duration-250"
          style={{ opacity: fading ? 0 : 1 }}
          aria-live="polite"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="relative h-[320px] md:h-auto min-h-[280px]">
              <Image
                src={treatment.image}
                alt={treatment.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Description */}
            <div className="p-8 flex flex-col justify-center bg-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green-600 mb-2">
                {treatment.tagline}
              </p>
              <h3 className="text-[22px] font-bold text-gray-900 mb-4">{treatment.name}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{treatment.description}</p>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="#1C7A39" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-0.5">Best for</p>
                    <p className="text-sm text-gray-600">{treatment.bestFor.join(', ')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="#1C7A39" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-0.5">Visit</p>
                    <p className="text-sm text-gray-600">{treatment.visitNote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
