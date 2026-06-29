export function GospelVideo() {
  return (
    <section
      className="relative"
      style={{ background: 'var(--gradient-brand)' }}
      data-reveal
    >
      {/* Decorative ring */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: -80,
          right: -80,
          width: 480,
          height: 480,
          borderRadius: '50%',
          border: '60px solid rgba(255,255,255,0.06)',
        }}
      />

      <div className="relative max-w-[1080px] mx-auto px-10 py-24 text-center text-white">
        <p className="gp-eyebrow text-green-300 mb-5">The most important thing we can share</p>
        <h2
          className="font-display font-black text-white tracking-tight leading-tight mb-5"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.875rem)' }}
        >
          The good news of Jesus Christ.
        </h2>
        <p className="text-teal-200 text-lg max-w-xl mx-auto leading-relaxed mb-12">
          We care about your body, and we care about your soul. This is the most important thing we know, and we want to share it with you.
        </p>

        {/* 16:9 YouTube embed */}
        <div
          className="relative w-full mx-auto overflow-hidden"
          style={{
            maxWidth: 820,
            borderRadius: 22,
            paddingBottom: 'calc(820px * 9 / 16)',
            height: 0,
            boxShadow: '0 32px 80px rgba(0,0,0,0.40)',
          }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/hHx5Bctu9X0"
            title="The Good News of Jesus Christ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <p className="mt-6 text-teal-300 text-sm">
          Placeholder video. Send us your link and we&apos;ll drop it in.
        </p>
      </div>
    </section>
  );
}
