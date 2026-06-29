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
            background: 'linear-gradient(120deg, #102A3B 38%, rgba(18,46,66,0.7) 100%)',
          }}
        />
        {/* Decorative radial glow top-right */}
        <div
          className="absolute"
          style={{
            top: -120,
            right: -80,
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(46,168,78,0.18) 0%, transparent 68%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto px-10 py-28 md:py-36">
        {/* Eyebrow */}
        <p
          className="font-semibold uppercase tracking-[0.04em] text-green-300 mb-6"
          style={{ fontSize: 14 }}
        >
          What we do
        </p>

        {/* Headline */}
        <h1
          className="font-display font-black text-white mb-7"
          style={{
            fontSize: 80,
            lineHeight: 0.99,
            letterSpacing: '-0.04em',
            maxWidth: 900,
          }}
        >
          Regenerative options between rest and surgery.
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/85 mb-10"
          style={{
            fontSize: 21,
            maxWidth: 660,
            lineHeight: 1.55,
          }}
        >
          A focused set of evidence-based treatments, performed by Dr. Hric, that help your body heal its own joints, tendons, and ligaments.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="#treatments"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-teal-900 bg-white hover:bg-gray-100 transition-colors duration-200"
            style={{ fontSize: 16 }}
          >
            Explore treatments
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/50 hover:border-white hover:bg-white/10 transition-all duration-200"
            style={{ fontSize: 16 }}
          >
            Schedule a visit
          </Link>
        </div>
      </div>
    </section>
  );
}
