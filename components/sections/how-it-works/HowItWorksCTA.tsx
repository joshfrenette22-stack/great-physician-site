import Link from 'next/link';

export function HowItWorksCTA() {
  return (
    <section className="w-full py-10 px-10" data-reveal>
      <div
        className="relative max-w-[1240px] mx-auto rounded-[28px] overflow-hidden text-center text-white"
        style={{
          background: 'var(--gradient-brand)',
          padding: '80px 56px',
        }}
      >
        {/* Decorative rings */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: -100,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: '50%',
            border: '56px solid rgba(255,255,255,0.08)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: -80,
            left: -60,
            width: 320,
            height: 320,
            borderRadius: '50%',
            border: '44px solid rgba(255,255,255,0.06)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[640px] mx-auto">
          <h2
            className="font-display font-black text-white mb-5"
            style={{ fontSize: 44, letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Ready for a straight answer?
          </h2>
          <p
            className="text-white/80 mb-10"
            style={{ fontSize: 18, lineHeight: 1.6 }}
          >
            Schedule a consultation and Dr. Hric will tell you exactly what he thinks — including whether we&apos;re the right fit.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 px-8 h-[52px] rounded-[12px] font-semibold tracking-[0.01em] text-teal-900 bg-green-500 border-[1.5px] border-transparent hover:bg-green-600 transition-colors duration-200"
            style={{ fontSize: 16 }}
          >
            Schedule a Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
