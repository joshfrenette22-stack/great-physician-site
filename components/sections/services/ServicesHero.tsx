import Image from 'next/image';
import Link from 'next/link';

export function ServicesHero() {
  return (
    <section className="relative w-full bg-teal-900 overflow-hidden">
      {/* Background image at low opacity */}
      <div className="absolute inset-0">
        <Image
          src="/images/stock/photo-1452626038306-9aae5e071dd3.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.18 }}
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(120deg, var(--teal-900) 38%, rgba(18,46,66,0.7) 100%)',
          }}
        />
        {/* Decorative radial glow top-right */}
        <div
          className="absolute"
          style={{
            top: -120,
            right: -120,
            width: 460,
            height: 460,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(58,161,118,0.32), transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative max-w-[1240px] mx-auto"
        style={{ padding: '96px 40px 86px' }}
      >
        {/* Eyebrow */}
        <p
          className="font-semibold text-green-300"
          style={{ fontSize: 14, letterSpacing: '0.04em', marginBottom: 18 }}
        >
          What we do
        </p>

        {/* Headline */}
        <h1
          className="font-display font-extrabold text-white"
          style={{
            fontSize: 80,
            lineHeight: 0.99,
            letterSpacing: '-0.04em',
            maxWidth: 900,
            margin: 0,
          }}
        >
          Regenerative options between rest and surgery.
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/85"
          style={{
            fontSize: 21,
            maxWidth: 660,
            lineHeight: 1.55,
            margin: '28px 0 0',
          }}
        >
          A focused set of evidence-based treatments, performed by Dr. Hric, that help your body heal its own joints, tendons, and ligaments.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap" style={{ gap: 14, marginTop: 38 }}>
          <Link
            href="#explorer"
            className="inline-flex items-center rounded-full bg-white text-teal-900 hover:bg-gray-100 transition-colors duration-200"
            style={{ gap: 10, padding: '14px 24px', fontWeight: 700, fontSize: 16 }}
          >
            Explore treatments
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </Link>
          <Link
            href="/schedule"
            className="inline-flex items-center rounded-full text-white hover:bg-white/10 transition-all duration-200"
            style={{ gap: 10, padding: '14px 24px', fontWeight: 600, fontSize: 16, border: '1px solid rgba(255,255,255,0.4)' }}
          >
            Schedule a visit
          </Link>
        </div>
      </div>
    </section>
  );
}
