import Image from 'next/image';

export function DoctorBand() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-5 md:px-10 py-16">
      <div className="relative rounded-[28px] overflow-hidden min-h-[560px]">
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
          style={{ background: 'linear-gradient(100deg, rgba(16,42,59,0.92) 0%, rgba(16,42,59,0.70) 45%, rgba(16,42,59,0.20) 80%, transparent 100%)' }}
        />

        {/* Top-left headline */}
        <div
          className="absolute z-10"
          style={{ top: '56px', left: '56px', width: '46%' }}
        >
          <h2 className="text-[24px] md:text-[36px] font-bold leading-snug text-white tracking-tight">
            Great Physician is led by a physician who tells you the truth,{' '}
            <mark
              className="rounded-sm px-1 not-italic"
              style={{ background: 'rgba(46,168,78,0.34)', color: 'inherit' }}
            >
              even when it costs him a sale.
            </mark>
          </h2>
        </div>

        {/* Doctor info — bottom left */}
        <div
          className="absolute z-10"
          style={{ left: '56px', bottom: '52px' }}
        >
          <p className="text-[34px] font-black text-white tracking-tight leading-tight">Dr. Jerry Hric</p>
          <p className="text-white/70 text-sm mb-4">Founder &amp; Regenerative Physician</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold">
              MD
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold">
              Regenerative Medicine
            </span>
          </div>
        </div>

        {/* White card — bottom right */}
        <div
          className="absolute z-10 bg-white rounded-[16px] p-6 shadow-xl"
          style={{ right: '40px', bottom: '40px', width: '320px' }}
        >
          {/* Gradient icon chip */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '11px',
                background: 'linear-gradient(135deg, #235A7C, #2EA84E)',
              }}
            >
              {/* Shield + check SVG */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1.5L3 4v5c0 3.31 2.57 6.41 6 7 3.43-.59 6-3.69 6-7V4L9 1.5z" fill="white" fillOpacity="0.9"/>
                <path d="M6.5 9l2 2 3.5-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600">
              Physician-performed
            </p>
          </div>
          <p className="text-[17px] font-bold text-gray-900 mb-2">Every treatment, done personally</p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Dr. Hric performs every procedure himself — not a tech, not a PA. You always know exactly who is treating you.
          </p>
        </div>
      </div>
    </section>
  );
}
