import Image from 'next/image';
import Link from 'next/link';

export function ImmersiveCTA() {
  return (
    <section
      className="w-full max-w-[1240px] mx-auto"
      style={{ padding: '80px 40px' }}
      data-reveal
    >
      <div
        className="relative rounded-[28px] overflow-hidden text-center"
        style={{ padding: '84px 56px', color: '#fff' }}
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
        <span
          className="absolute pointer-events-none"
          style={{
            width: 360,
            height: 360,
            borderRadius: '50%',
            border: '40px solid rgba(255,255,255,0.08)',
            left: -130,
            bottom: -160,
          }}
        />

        {/* Content */}
        <div className="relative" style={{ zIndex: 1 }}>
          <h2
            className="font-display font-extrabold text-white"
            style={{
              fontSize: 50,
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              margin: '0 auto 18px',
              maxWidth: 720,
            }}
          >
            We&apos;ll tell you when we&apos;re not the answer.
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.9)',
              margin: '0 auto 34px',
              maxWidth: 580,
            }}
          >
            If surgery or another path would serve you better, we&apos;ll say so. Start with an honest consultation, no obligation.
          </p>
          <div
            className="inline-flex flex-wrap items-center justify-center"
            style={{ gap: 14 }}
          >
            <Link
              href="/schedule"
              className="inline-flex items-center text-decoration-none"
              style={{
                display: 'inline-flex',
                background: 'var(--color-primary)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 16,
                padding: '14px 28px',
                borderRadius: 999,
                textDecoration: 'none',
              }}
            >
              Schedule a Visit
            </Link>
            <Link
              href="/faq"
              className="hover:text-white transition-colors duration-200"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                fontSize: 16,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.92)',
                textDecoration: 'none',
              }}
            >
              Read the FAQ →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
