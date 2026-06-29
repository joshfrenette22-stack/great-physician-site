export function HowItWorksHero() {
  return (
    <section
      className="w-full text-center relative overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 18% 62%, rgba(88,205,153,0.22), transparent 46%), radial-gradient(circle at 78% 38%, rgba(35,87,122,0.18), transparent 52%), radial-gradient(circle at 52% 92%, rgba(156,124,102,0.13), transparent 46%), var(--white)',
        paddingTop: 160,
        paddingBottom: 150,
      }}
    >
      <div className="max-w-[1240px] mx-auto px-10 flex flex-col items-center">
        {/* Headline */}
        <h1
          data-reveal
          className="font-display font-extrabold"
          style={{
            fontSize: 56,
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
            color: 'var(--text-strong)',
            margin: 0,
          }}
        >
          How does Great Physician work?
          <br />
          <span className="gp-text-gradient">Simple, honest, conservative-first.</span>
        </h1>

        {/* Subtitle */}
        <p
          data-reveal
          style={{
            fontSize: 20,
            lineHeight: 1.55,
            color: 'var(--text-muted)',
            maxWidth: 560,
            margin: '24px auto 0',
          }}
        >
          No upsell, no pressure, the least you need, performed by a physician who tells you the truth.
        </p>

        {/* Scroll indicator */}
        <div
          data-reveal
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            marginTop: 56,
            color: 'var(--text-muted)',
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </span>
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '1.5px solid var(--border-strong)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'gpBounce 1.8s ease-in-out infinite',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="6 13 12 19 18 13" />
            </svg>
          </span>
        </div>
      </div>

      <style>{`
        @keyframes gpBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(7px); }
        }
      `}</style>
    </section>
  );
}
