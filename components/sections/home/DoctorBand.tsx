import Image from 'next/image';

export function DoctorBand() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-10 py-16">
      <div className="relative rounded-[28px] overflow-hidden min-h-[460px] flex flex-col justify-between">
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
        <div className="relative z-10 p-10 max-w-[560px]">
          <h2 className="text-[36px] font-bold leading-snug text-white tracking-tight">
            Great Physician is led by a physician who tells you the truth,{' '}
            <mark
              className="rounded-sm px-1 not-italic"
              style={{ background: 'rgba(46,168,78,0.34)', color: 'inherit' }}
            >
              even when it costs him a sale.
            </mark>
          </h2>
        </div>

        {/* Bottom row */}
        <div className="relative z-10 p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          {/* Doctor info */}
          <div>
            <p className="text-[34px] font-black text-white tracking-tight leading-tight">Dr. Jerry Hric</p>
            <p className="text-white/70 text-sm mb-4">Founder & Regenerative Physician</p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold">
                MD
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold">
                Regenerative Medicine
              </span>
            </div>
          </div>

          {/* Floating white card */}
          <div className="bg-white rounded-[16px] p-6 max-w-[280px] shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600 mb-2">
              Physician-performed
            </p>
            <p className="text-[17px] font-bold text-gray-900 mb-2">Every treatment, done personally</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Dr. Hric performs every procedure himself — not a tech, not a PA. You always know exactly who is treating you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
