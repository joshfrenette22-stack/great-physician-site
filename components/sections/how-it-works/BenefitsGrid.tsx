const benefits = [
  {
    title: 'Conservative first',
    description:
      'We start with the least invasive option that fits your situation. We escalate only when evidence supports it.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Physician-performed',
    description:
      'Dr. Hric performs every treatment personally. You are never handed off to a tech or assistant.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
        <path d="M12 12h.01"/>
        <path d="M8 12h.01"/>
        <path d="M16 12h.01"/>
      </svg>
    ),
  },
  {
    title: 'Evidence-based',
    description:
      "We only offer treatments backed by meaningful clinical evidence. If it's unproven, we don't sell it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    title: 'Whole-person care',
    description:
      'We look at your body, your lifestyle, and your goals together. Healing is rarely just about one joint.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
      </svg>
    ),
  },
];

export function BenefitsGrid() {
  return (
    <section className="w-full bg-gray-50 border-t border-gray-100 py-24" data-reveal>
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="gp-eyebrow mb-3">Why it works</p>
          <h2
            className="font-display font-bold text-gray-900"
            style={{ fontSize: 42, letterSpacing: '-0.03em' }}
          >
            Care the way it should be
          </h2>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white border border-gray-200 rounded-[20px] p-7 flex flex-col gap-4"
            >
              {/* Icon chip */}
              <div
                className="w-12 h-12 rounded-[13px] flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--gradient-brand)' }}
              >
                {b.icon}
              </div>

              <div>
                <h3
                  className="font-display font-bold text-gray-900 mb-2"
                  style={{ fontSize: 17 }}
                >
                  {b.title}
                </h3>
                <p className="text-gray-500 leading-relaxed" style={{ fontSize: 14.5 }}>
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
