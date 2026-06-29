import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Listen',
    description:
      "We start with a real conversation about what's going on, your history, your goals, and what you've already tried. No forms in place of a physician.",
  },
  {
    number: '02',
    title: 'Plan',
    description:
      "If we think we can help, we'll tell you exactly what and why. If we can't, we'll say that too — and point you somewhere better.",
  },
  {
    number: '03',
    title: 'Treat & recover',
    description:
      "Dr. Hric performs your treatment personally. We stay in touch through your recovery, adjusting the plan if needed.",
  },
];

export function ProcessStrip() {
  return (
    <section className="w-full py-20 border-t border-gray-100" data-reveal>
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Left column: heading */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <p className="gp-eyebrow">The path</p>
            <h2
              className="font-display font-bold text-teal-900"
              style={{ fontSize: 32, letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              A simple, honest process.
            </h2>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              See how it works
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* Step cards */}
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[18px] bg-gray-50 p-[26px] flex flex-col gap-3"
            >
              <p
                className="font-bold text-green-600"
                style={{ fontSize: 17, fontFamily: 'var(--font-display)' }}
              >
                {step.number}
              </p>
              <p
                className="font-bold text-teal-900"
                style={{ fontSize: 19, fontFamily: 'var(--font-display)' }}
              >
                {step.title}
              </p>
              <p className="text-gray-500 leading-relaxed" style={{ fontSize: 14.5 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
