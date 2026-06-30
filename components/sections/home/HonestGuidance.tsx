import Link from 'next/link';

const cautionItems = [
  {
    label: 'Stem cell injections',
    note: 'heavily promoted, often very expensive, evidence frequently thin for most patients.',
  },
  {
    label: 'Exosomes & fat-derived products',
    note: 'high cost that rarely matches the documented benefit.',
  },
];

export function HonestGuidance() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-5 md:px-10 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--color-accent-strong)' }}>Education as care</span>
          <h2
            className="text-[32px] md:text-[40px] font-extrabold leading-[1.12] tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-strong)' }}
          >
            Straight answers about what works
          </h2>
          <p className="text-[17px] leading-[1.65] mb-4" style={{ color: 'var(--text-body)' }}>
            The regenerative medicine field is full of bold promises — stem cells, exosomes, fat-derived injections — often at steep prices and with thin evidence. We take a different approach.
          </p>
          <p className="text-[17px] leading-[1.65] mb-7" style={{ color: 'var(--text-body)' }}>
            We&apos;ll tell you what the research actually supports, what we&apos;d recommend for your situation, and what we&apos;d steer you away from — even when steering you away costs us a sale. That honesty is the point.
          </p>
          <Link
            href="/resources"
            className="inline-flex items-center justify-center px-7 h-[52px] rounded-[12px] bg-white text-teal-600 border-[1.5px] border-gray-300 hover:bg-teal-50 text-lg font-semibold tracking-[0.01em] transition-colors shadow-[0_1px_2px_rgba(18,46,66,0.06)]"
          >
            Read our patient resources
          </Link>
        </div>

        {/* Right: dark teal card */}
        <div
          className="rounded-[24px] shadow-lg"
          style={{ background: 'linear-gradient(165deg, var(--teal-900), var(--teal-800))', border: '1px solid rgba(255,255,255,0.08)', padding: '36px' }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300 mb-[18px]">
            What we&apos;re cautious about
          </div>

          <div className="flex flex-col gap-4">
            {cautionItems.map((item) => (
              <div key={item.label} className="flex items-start gap-[14px]">
                <span
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
                    <line x1="6" y1="12" x2="18" y2="12" />
                  </svg>
                </span>
                <p className="text-[15px] leading-[1.55] m-0" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  <strong className="text-white">{item.label}</strong>, {item.note}
                </p>
              </div>
            ))}
          </div>

          {/* Horizontal divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.12)', margin: '6px 0' }} />

          <div className="flex items-start gap-[14px]">
            <span
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: 'var(--green-500)',
                boxShadow: '0 0 0 4px rgba(58,161,118,0.18)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="5 12 10 17 19 7" />
              </svg>
            </span>
            <p className="text-[15px] leading-[1.55] m-0" style={{ color: 'rgba(255,255,255,0.92)' }}>
              <strong className="block mb-0.5" style={{ color: 'var(--green-300)' }}>What we recommend instead</strong>
              Treatments with a genuine evidence base — PRP, prolotherapy and focused shockwave — chosen for your situation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
