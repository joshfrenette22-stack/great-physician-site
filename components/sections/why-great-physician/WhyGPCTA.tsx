import Image from 'next/image';
import Link from 'next/link';

export function WhyGPCTA() {
  return (
    <section className="px-5 md:px-10" style={{ maxWidth: 1240, margin: '0 auto', paddingTop: 56, paddingBottom: 72 }} data-reveal>
      <div className="relative rounded-[28px] overflow-hidden text-center text-white p-10 md:p-[84px_56px]">
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
            background: 'linear-gradient(120deg, rgba(18,46,66,0.94) 28%, rgba(44,130,93,0.86) 100%)',
          }}
        />
        {/* Decorative ring */}
        <span
          className="absolute pointer-events-none"
          style={{
            left: -130,
            bottom: -160,
            width: 360,
            height: 360,
            borderRadius: '50%',
            border: '40px solid rgba(255,255,255,0.08)',
            display: 'block',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <h2
            className="font-display font-extrabold text-white mx-auto text-[1.875rem] md:text-[2.5rem] lg:text-[3rem]"
            style={{ lineHeight: 1.07, letterSpacing: '-0.03em', margin: '0 auto 18px', maxWidth: 700 }}
          >
            Let&apos;s find out if we can help.
          </h2>
          <p
            className="text-white/90 mx-auto text-base md:text-lg"
            style={{ lineHeight: 1.55, margin: '0 auto 34px', maxWidth: 560 }}
          >
            A consultation is the honest first step, with no pressure and no obligation.
          </p>
          <div className="inline-flex gap-[14px] items-center flex-wrap justify-center">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-7 h-[52px] rounded-[12px] font-semibold tracking-[0.01em] text-white bg-teal-600 border-[1.5px] border-transparent hover:bg-teal-700 transition-colors duration-200"
              style={{ fontSize: 16 }}
            >
              Schedule a Visit
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-[9px] font-semibold text-white/92 hover:text-white transition-colors duration-200"
              style={{ fontSize: 16 }}
            >
              Meet Dr. Hric &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
