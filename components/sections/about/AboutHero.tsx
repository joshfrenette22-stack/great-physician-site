import Image from 'next/image';

const facePhotos = [
  { src: '/images/stock/photo-1599566150163-29194dcaad36.jpg', objectPosition: 'center center' },
  { src: '/images/stock/photo-1573497019940-1c28c88b4f3e.jpg', objectPosition: 'center center' },
  { src: '/images/stock/photo-1472099645785-5658abf4ff4e.jpg', objectPosition: 'center 20%' },
];

export function AboutHero() {
  return (
    <section className="bg-teal-900 text-white w-full">
      <div
        className="relative max-w-[1240px] mx-auto"
        style={{ padding: '96px 40px 0' }}
      >
        {/* Headline */}
        <h1
          className="font-display font-extrabold text-white"
          style={{
            fontSize: 104,
            letterSpacing: '-0.04em',
            lineHeight: 0.98,
            maxWidth: 920,
            margin: 0,
          }}
        >
          Real care.<br />Real
          {/* Overlapping face avatars — inline with text */}
          <span
            className="inline-flex items-center"
            style={{
              verticalAlign: 'middle',
              margin: '0 18px',
              transform: 'translateY(-6px)',
            }}
            aria-hidden="true"
          >
            {facePhotos.map((photo, i) => (
              <span
                key={i}
                className="inline-block rounded-full overflow-hidden border-[4px] border-teal-900 relative flex-shrink-0"
                style={{
                  width: 82,
                  height: 82,
                  marginRight: i < facePhotos.length - 1 ? -22 : 0,
                }}
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="82px"
                  style={{ objectPosition: photo.objectPosition }}
                />
              </span>
            ))}
          </span>
          restoration.
        </h1>

        {/* Right-side body copy */}
        <p
          className="absolute hidden lg:block"
          style={{
            right: 40,
            top: 168,
            width: 320,
            fontSize: 19,
            lineHeight: 1.5,
            color: 'rgba(255,255,255,0.82)',
            margin: 0,
          }}
        >
          We&apos;re building a different kind of regenerative medicine, conservative-first, physician-performed, and rooted in honest, whole-person care you can trust.
        </p>

        {/* Hero image container */}
        <div
          className="relative overflow-hidden"
          style={{
            marginTop: 64,
            borderRadius: '28px 28px 0 0',
            height: 540,
            boxShadow: '0 -30px 80px rgba(0,0,0,0.25)',
          }}
        >
          <Image
            src="/images/stock/photo-1486218119243-13883505764c.jpg"
            alt="An active patient back on the road"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 35%' }}
            priority
            sizes="(max-width: 1280px) 100vw, 1240px"
          />

          {/* Floating caption card */}
          <div
            className="absolute rounded-[16px]"
            style={{
              left: 36,
              bottom: 32,
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              padding: '16px 22px',
              maxWidth: 300,
            }}
          >
            <p
              className="font-display font-extrabold text-gray-900"
              style={{ fontSize: 18, margin: 0 }}
            >
              Back to the things you love
            </p>
            <p style={{ fontSize: 14, color: 'var(--text-muted, #6B7280)', marginTop: 3, marginBottom: 0 }}>
              Not just out of pain, back to full function.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
