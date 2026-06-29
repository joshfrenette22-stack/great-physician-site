import Image from 'next/image';
import Link from 'next/link';

export function EmotionalBand() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-5 md:px-10 pt-24 md:pt-[96px] pb-0">
      <div className="relative rounded-[28px] overflow-hidden min-h-[560px] shadow-xl">
        {/* Background image */}
        <Image
          src="/images/stock/photo-1452626038306-9aae5e071dd3.jpg"
          alt="Active lifestyle"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 32%' }}
          sizes="1240px"
        />

        {/* Left gradient scrim */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(11,28,40,0.82) 0%, rgba(11,28,40,0.6) 34%, rgba(11,28,40,0.18) 64%, rgba(11,28,40,0) 100%)' }}
        />

        {/* Content */}
        <div className="relative z-10 min-h-[560px] flex flex-col justify-center max-w-[620px]" style={{ padding: '64px' }}>
          <h2
            className="text-[36px] md:text-[46px] font-extrabold text-white mb-8"
            style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            You know your own body. When something&apos;s off, you deserve straight answers.
          </h2>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-[10px] rounded-full bg-white text-[17px] font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{ color: 'var(--text-strong)', padding: '16px 28px' }}
            >
              Find my treatment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
            </Link>
          </div>

          <div className="flex items-center gap-[9px] mt-[26px] text-[15px] font-medium" style={{ color: 'rgba(255,255,255,0.86)' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
            Now welcoming patients across Northern Colorado
          </div>
        </div>
      </div>
    </section>
  );
}
