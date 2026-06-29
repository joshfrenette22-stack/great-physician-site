import Link from 'next/link';

export function HowItWorksCTA() {
  return (
    <section style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 40px' }}>
      <div
        data-reveal
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 28,
          background: 'var(--gradient-brand)',
          padding: '80px 56px',
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
              fontSize: 44,
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
    </section>
  );
}
