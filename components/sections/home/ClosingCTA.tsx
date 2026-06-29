import Link from 'next/link';

export function ClosingCTA() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-5 md:px-10 py-24">
      <div
        className="relative rounded-[28px] overflow-hidden text-center text-white shadow-xl"
        style={{
          padding: '80px 56px',
          background: 'var(--gradient-brand)',
        }}
      >
        {/* Decorative rings */}
        <span className="absolute rounded-full pointer-events-none" style={{ left: '-130px', bottom: '-160px', width: '360px', height: '360px', border: '40px solid rgba(255,255,255,0.08)' }} />
        <span className="absolute rounded-full pointer-events-none" style={{ right: '-90px', top: '-120px', width: '260px', height: '260px', border: '32px solid rgba(255,255,255,0.07)' }} />

        <div className="relative">
          {/* Location badge */}
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.04em] rounded-full" style={{ background: 'rgba(255,255,255,0.16)', padding: '7px 16px' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
            Now seeing patients in Northern Colorado
          </span>

          {/* Headline */}
          <h2
            className="text-[36px] md:text-[46px] font-extrabold text-white max-w-[720px] mx-auto"
            style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1, letterSpacing: '-0.025em', margin: '22px auto 14px' }}
          >
            Ready to feel like yourself again?
          </h2>

          {/* Body */}
          <p className="text-[19px] leading-[1.55] max-w-[580px] mx-auto mb-[18px]" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Conveniently located within Dr. Tyler Wood&apos;s office. Schedule a visit and we&apos;ll talk through what&apos;s going on and whether we can help.
          </p>
          <p className="text-sm max-w-[560px] mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.72)' }}>
            We&apos;ll start with the least invasive, least expensive option that can realistically help, and tell you honestly if surgery is the better path.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[18px] flex-wrap">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-7 h-[52px] rounded-[12px] bg-green-500 text-teal-900 text-lg font-semibold tracking-[0.01em] border-[1.5px] border-transparent hover:bg-green-600 active:bg-green-700 shadow-sm transition-all duration-200"
            >
              Schedule a Visit
            </Link>
            <span className="inline-flex items-center gap-[9px] text-base font-semibold text-white">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
              or call (970) 555-0142
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
