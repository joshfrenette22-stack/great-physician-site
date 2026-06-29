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

const recommendItem = {
  label: 'What we recommend instead',
  note: 'Treatments with a genuine evidence base — PRP, prolotherapy and focused shockwave — chosen for your situation.',
};

export function HonestGuidance() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-10 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="gp-eyebrow mb-4">Education as care</p>
          <h2 className="text-[40px] font-black tracking-tight text-gray-900 leading-tight mb-6">
            Straight answers about what works
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The regenerative medicine field is full of bold promises — stem cells, exosomes, fat-derived injections — often at steep prices and with thin evidence. We take a different approach.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We&apos;ll tell you what the research actually supports, what we&apos;d recommend for your situation, and what we&apos;d steer you away from — even when steering you away costs us a sale. That honesty is the point.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-teal-600 border border-gray-200 hover:bg-gray-50 text-sm font-semibold transition-colors"
          >
            Read our patient resources
          </Link>
        </div>

        {/* Right: dark teal card */}
        <div
          className="rounded-[24px] p-9"
          style={{ background: 'linear-gradient(135deg, #102A3B 0%, #16384C 100%)' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green-300 mb-6">
            What we&apos;re cautious about
          </p>

          <div className="space-y-4 mb-6">
            {cautionItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                {/* Plain circle with minus line */}
                <span
                  className="flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                  }}
                >
                  <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
                    <rect x="0" y="0" width="12" height="2" rx="1" fill="white" fillOpacity="0.7"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-sm text-white/55 leading-relaxed mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal divider */}
          <div className="border-t border-white/10 mb-6" />

          <div className="flex items-start gap-3">
            {/* Green circle with checkmark */}
            <span
              className="flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: 'var(--green-500, #2EA84E)',
                boxShadow: '0 0 0 4px rgba(58,161,118,0.18)',
              }}
            >
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path d="M1.5 5l3.5 3.5 6.5-8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                <strong style={{ color: 'var(--green-300, #86EFAC)' }}>{recommendItem.label}</strong>
              </p>
              <p className="text-sm text-white/55 leading-relaxed mt-0.5">{recommendItem.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
