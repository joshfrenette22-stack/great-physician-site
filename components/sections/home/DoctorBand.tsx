import Image from 'next/image';

export function DoctorBand() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-5 md:px-10 pt-24 md:pt-[96px] pb-0">
      <div className="relative rounded-[28px] overflow-hidden min-h-[560px] shadow-lg">
        {/* Background image */}
        <Image
          src="/images/hric-band.jpg"
          alt="Dr. Jerry Hric"
          fill
          className="object-cover object-top"
          sizes="1240px"
        />

        {/* Left gradient scrim */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(10,28,40,0.8) 0%, rgba(10,28,40,0.46) 32%, rgba(10,28,40,0.06) 58%, rgba(10,28,40,0) 100%)' }}
        />

        {/* Top-left headline */}
        <div
          className="absolute z-10 top-7 left-5 right-5 md:top-14 md:left-14 md:right-auto md:max-w-[46%]"
        >
          <h2
            className="text-[20px] md:text-[36px] font-extrabold text-white tracking-tight"
            style={{ fontFamily: 'var(--font-display)', lineHeight: 1.18, letterSpacing: '-0.02em' }}
          >
            Great Physician is led by a physician who{' '}
            <span
              style={{ background: 'rgba(88,205,153,0.34)', padding: '0 10px', borderRadius: '8px', WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' as never }}
            >
              tells you the truth
            </span>
            , even when it costs him a sale.
          </h2>
        </div>

        {/* Doctor info — bottom left */}
        <div
          className="absolute z-10 left-5 bottom-5 md:left-14 md:bottom-[52px]"
        >
          <div className="text-[24px] md:text-[34px] font-extrabold text-white leading-[1.08]" style={{ fontFamily: 'var(--font-display)' }}>Dr. Jerry Hric</div>
          <div className="text-sm md:text-base mt-1" style={{ color: 'rgba(255,255,255,0.82)' }}>Founder &amp; Regenerative Physician</div>
          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="text-[13px] font-semibold text-white rounded-full" style={{ background: 'rgba(255,255,255,0.18)', padding: '6px 13px' }}>
              MD
            </span>
            <span className="text-[13px] font-semibold text-white rounded-full" style={{ background: 'rgba(255,255,255,0.18)', padding: '6px 13px' }}>
              Regenerative Medicine
            </span>
          </div>
        </div>

        {/* White card — bottom right, hidden on mobile to prevent overflow */}
        <div
          className="hidden md:block absolute z-10 bg-white rounded-[18px] shadow-lg"
          style={{ right: '40px', bottom: '40px', width: '320px', padding: '22px' }}
        >
          <div className="flex items-center gap-[11px] mb-3">
            <span
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '11px',
                background: 'var(--gradient-brand)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v5c0 4.5-3 7-7 8-4-1-7-3.5-7-8V6z" />
                <polyline points="9 11.5 11.5 14 15 9.5" />
              </svg>
            </span>
            <span className="text-base font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-strong)' }}>
              Physician-performed
            </span>
          </div>
          <div className="text-[15px] font-bold mb-1" style={{ color: 'var(--text-strong)' }}>Every treatment, done personally</div>
          <p className="text-sm leading-[1.55] m-0" style={{ color: 'var(--text-muted)' }}>
            Dr. Hric performs each treatment himself, including every focused-shockwave session. Never handed to a technician.
          </p>
        </div>
      </div>
    </section>
  );
}
