import Image from 'next/image';
import Link from 'next/link';

export function WhyGPCTA() {
  return (
    <section className="w-full py-10 px-10" data-reveal>
      <div className="relative max-w-[1240px] mx-auto rounded-[28px] overflow-hidden" style={{ padding: '84px 56px' }}>
        {/* Background image */}
        <Image
          src="/images/stock/photo-1476480862126-209bfaa8edc8.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1240px"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(120deg, rgba(18,46,66,0.94) 30%, rgba(44,130,93,0.86) 100%)',
          }}
        />
        {/* Decorative ring */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: -120,
            left: -80,
            width: 500,
            height: 500,
            borderRadius: '50%',
            border: '60px solid rgba(255,255,255,0.07)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-[780px] mx-auto">
          <h2
            className="font-display font-black text-white mb-6"
            style={{ fontSize: 50, letterSpacing: '-0.03em', lineHeight: 1.08 }}
          >
            Let&apos;s find out if we can help.
          </h2>
          <p
            className="text-white/80 mb-10"
            style={{ fontSize: 19, lineHeight: 1.6, maxWidth: 560, margin: '0 auto 40px' }}
          >
            A consultation starts with listening. No obligation — just an honest conversation about what&apos;s going on and whether we&apos;re the right fit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors duration-200"
              style={{ fontSize: 16 }}
            >
              Schedule a Visit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 font-semibold text-white/80 hover:text-white transition-colors duration-200"
              style={{ fontSize: 15 }}
            >
              Contact us &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
