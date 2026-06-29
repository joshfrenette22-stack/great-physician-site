import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Listen',
    description: 'We review your history, imaging, and goals together, unhurried.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'You get an honest recommendation and clear pricing before anything.',
  },
  {
    number: '03',
    title: 'Treat & recover',
    description: 'Dr. Hric performs your treatment, then guides your recovery.',
  },
];

export function ProcessStrip() {
  return (
    <section
      className="w-full max-w-[1240px] mx-auto"
      style={{ padding: '88px 40px 20px' }}
      data-reveal
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}>
        {/* Left column: heading */}
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--text-subtle)',
              marginBottom: 14,
            }}
          >
            The path
          </div>
          <h2
            className="font-display"
            style={{
              fontWeight: 800,
              fontSize: 32,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--teal-900)',
              margin: '0 0 14px',
            }}
          >
            A simple, honest process.
          </h2>
          <Link
            href="/how-it-works"
            className="hover:underline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: 'var(--color-primary)',
              fontWeight: 600,
              fontSize: 15.5,
              textDecoration: 'none',
            }}
          >
            See how it works →
          </Link>
        </div>

        {/* Step cards */}
        {steps.map((step) => (
          <div
            key={step.number}
            style={{ background: 'var(--gray-50)', borderRadius: 18, padding: 26 }}
          >
            <div
              className="font-display"
              style={{ fontWeight: 800, fontSize: 17, color: 'var(--green-600)', marginBottom: 12 }}
            >
              {step.number}
            </div>
            <div
              className="font-display"
              style={{ fontWeight: 700, fontSize: 19, color: 'var(--teal-900)', marginBottom: 8 }}
            >
              {step.title}
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
