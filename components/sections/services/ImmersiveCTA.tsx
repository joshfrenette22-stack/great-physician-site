import Image from 'next/image';
import Link from 'next/link';

export function ImmersiveCTA() {
  return (
    <section className="w-full py-10 px-10" data-reveal>
      <div
        className="relative max-w-[1240px] mx-auto rounded-[28px] overflow-hidden"
        style={{ padding: '84px 56px' }}
      >
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
            We&apos;ll tell you when we&apos;re not the answer.
          </h2>
          <p
            className="text-white/80 mb-10"
            style={{ fontSize: 19, lineHeight: 1.6, maxWidth: 560, margin: '0 auto 40px' }}
          >
            If surgery or another path would serve you better, we&apos;ll say so. Start with an honest consultation, no obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 px-7 h-[52px] rounded-[12px] font-semibold tracking-[0.01em] text-teal-900 bg-green-500 border-[1.5px] border-transparent hover:bg-green-600 transition-colors duration-200"
              style={{ fontSize: 16 }}
            >
              Schedule a Visit
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 font-semibold text-white/80 hover:text-white transition-colors duration-200"
              style={{ fontSize: 15 }}
            >
              Read the FAQ <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
