import Link from 'next/link';
import { ScrollReveal } from '@/components/sections/shared/ScrollReveal';

export function HowItWorksCTA() {
  return (
    <ScrollReveal as="section" className="max-w-[1240px] mx-auto px-5 py-16 md:px-10 md:py-24">
      <div
        data-reveal="scale"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 28,
          background: 'var(--gradient-brand)',
          padding: 'clamp(40px, 6vw, 80px) clamp(24px, 5vw, 56px)',
          textAlign: 'center',
          color: '#fff',
          boxShadow: 'var(--shadow-xl)',
        }}
      >
        {/* Decorative rings — matching design positions exactly */}
        <span
          style={{
            position: 'absolute',
            width: 360,
            height: 360,
            borderRadius: '50%',
            border: '40px solid rgba(255,255,255,0.08)',
            left: -130,
            bottom: -160,
            pointerEvents: 'none',
          }}
        />
        <span
          style={{
            position: 'absolute',
            width: 260,
            height: 260,
            borderRadius: '50%',
            border: '32px solid rgba(255,255,255,0.07)',
            right: -90,
            top: -120,
            pointerEvents: 'none',
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative' }}>
          <h2
            className="font-display"
            style={{
              fontWeight: 800,
              fontSize: 'clamp(28px, 5vw, 44px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: '#fff',
              margin: '0 auto 14px',
              maxWidth: 660,
            }}
          >
            Ready for a straight answer?
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.9)',
              maxWidth: 560,
              margin: '0 auto 32px',
            }}
          >
            Schedule a visit and we&apos;ll talk through what&apos;s going on, and whether we can help.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 font-semibold hover:opacity-90 transition-opacity duration-200"
            style={{
              fontSize: 16,
              padding: '14px 28px',
              borderRadius: 12,
              background: 'var(--color-accent-strong)',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Schedule a Visit
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
}
