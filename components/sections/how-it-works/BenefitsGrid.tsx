const benefits = [
  {
    title: 'Conservative first',
    description:
      'The least invasive, least expensive option that can work, before anything aggressive.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="4 8 8 8 8 4"/>
        <line x1="20" y1="20" x2="8" y2="8"/>
        <polyline points="4 20 12 20"/>
      </svg>
    ),
  },
  {
    title: 'Physician-performed',
    description:
      'Dr. Hric performs every treatment himself, including each shockwave session.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-3 7-7 8-4-1-7-3.5-7-8V6z"/>
        <polyline points="9 11.5 11.5 14 15 9.5"/>
      </svg>
    ),
  },
  {
    title: 'Evidence-based',
    description:
      'Treatments chosen for what the research actually supports, never the hype.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  {
    title: 'Whole-person care',
    description:
      'Treatment paired with stewardship, movement, nutrition, sleep, so results last.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 20A7 7 0 0 1 4 13C4 7 11 4 20 4c0 9-3 16-9 16z"/>
        <path d="M4 20c3-3 6-5 10-7"/>
      </svg>
    ),
  },
];

export function BenefitsGrid() {
  return (
    <section
      style={{
        background: 'var(--surface-subtle)',
        borderTop: '1px solid var(--border-default)',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 40px' }}>
        {/* Heading */}
        <div data-reveal style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-strong)',
            }}
          >
            Why it works
          </span>
          <h2
            className="font-display"
            style={{
              fontWeight: 800,
              fontSize: 42,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text-strong)',
              margin: '12px 0 0',
            }}
          >
            Care the way it should be
          </h2>
        </div>

        {/* 4-column grid */}
        <div
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 18,
          }}
        >
          {benefits.map((b) => (
            <div
              key={b.title}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 20,
                padding: 28,
              }}
            >
              {/* Icon chip */}
              <span
                style={{
                  display: 'inline-flex',
                  width: 48,
                  height: 48,
                  borderRadius: 13,
                  background: 'var(--gradient-brand)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  marginBottom: 16,
                }}
              >
                {b.icon}
              </span>

              <h4
                className="font-display"
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  color: 'var(--text-strong)',
                  margin: '0 0 6px',
                }}
              >
                {b.title}
              </h4>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
