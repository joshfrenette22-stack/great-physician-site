import Image from 'next/image';

const facePhotos = [
  '/images/stock/photo-1599566150163-29194dcaad36.jpg',
  '/images/stock/photo-1573497019940-1c28c88b4f3e.jpg',
  '/images/stock/photo-1472099645785-5658abf4ff4e.jpg',
];

export function AboutHero() {
  return (
    <section className="bg-teal-900 text-white w-full">
      <div
        className="relative max-w-[1240px] mx-auto"
        style={{ padding: '96px 40px 0' }}
      >
        {/* Right-side body copy */}
        <p
          className="absolute text-white/82 leading-relaxed hidden lg:block"
          style={{
            right: 40,
            top: 168,
            width: 320,
            fontSize: 19,
            color: 'rgba(255,255,255,0.82)',
          }}
        >
          We&apos;re building a different kind of regenerative medicine practice — one that starts with honesty, leads with conservative care, and never oversells. A place where your physician actually performs your treatment, and your goals actually drive the plan.
        </p>

        {/* Headline */}
        <h1
          className="font-display font-black text-white"
          style={{
            fontSize: 104,
            letterSpacing: '-0.04em',
            lineHeight: 0.98,
            maxWidth: 700,
          }}
        >
          Real care.
          <br />
          <span className="inline-flex items-end gap-0 flex-wrap">
            Real{' '}
            {/* Overlapping face avatars */}
            <span
              className="inline-flex items-center mx-4"
              style={{ verticalAlign: 'middle' }}
              aria-hidden="true"
            >
              {facePhotos.map((src, i) => (
                <span
                  key={i}
                  className="inline-block rounded-full overflow-hidden border-[4px] border-teal-900 relative"
                  style={{
                    width: 82,
                    height: 82,
                    marginRight: i < facePhotos.length - 1 ? -22 : 0,
                    zIndex: facePhotos.length - i,
                  }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="82px"
                  />
                </span>
              ))}
            </span>
            {' '}restoration.
          </span>
        </h1>

        {/* Hero image container */}
        <div
          className="relative mt-12 overflow-hidden"
          style={{
            borderRadius: '28px 28px 0 0',
            height: 540,
          }}
        >
          <Image
            src="/images/stock/photo-1486218119243-13883505764c.jpg"
            alt="Active patient cycling on a road — Great Physician Regenerative Medicine"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 35%' }}
            priority
            sizes="(max-width: 1280px) 100vw, 1240px"
          />

          {/* Floating caption card */}
          <div
            className="absolute bottom-6 left-6 rounded-[16px] p-5"
            style={{
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              maxWidth: 280,
            }}
          >
            <p
              className="font-semibold text-gray-900 mb-1"
              style={{ fontSize: 15 }}
            >
              Back to the things you love
            </p>
            <p className="text-gray-500" style={{ fontSize: 13, margin: 0 }}>
              Not just out of pain, back to full function.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
