export function GospelVideo() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--gradient-brand)' }}
    >
      {/* Decorative ring */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: -170,
          top: -190,
          width: 460,
          height: 460,
          borderRadius: '50%',
          border: '46px solid rgba(255,255,255,0.07)',
          display: 'block',
          pointerEvents: 'none',
        }}
      />

      <div className="relative max-w-[1080px] mx-auto text-center text-white" style={{ padding: '92px 40px' }}>
        <div className="max-w-[720px] mx-auto mb-11" data-reveal>
          <p
            className="font-semibold uppercase text-white/72 mb-4"
            style={{ fontSize: 13, letterSpacing: '0.16em' }}
          >
            The most important thing we can share
          </p>
          <h2
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 46, lineHeight: 1.08, letterSpacing: '-0.03em', margin: '0 0 18px' }}
          >
            The good news of Jesus Christ
          </h2>
          <p className="text-white/90 mx-auto" style={{ fontSize: 19, lineHeight: 1.6, margin: 0 }}>
            We care about your body, but even more about your soul. Take a few minutes to hear the message that changes everything.
          </p>
        </div>

        {/* 16:9 YouTube embed */}
        <div
          className="relative w-full mx-auto overflow-hidden bg-black"
          style={{
            maxWidth: 920,
            borderRadius: 22,
            paddingTop: `${(9 / 16) * 100}%`,
            boxShadow: '0 30px 70px rgba(0,0,0,0.34)',
          }}
          data-reveal
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/hHx5Bctu9X0"
            title="The good news of Jesus Christ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <p className="text-white/60 mt-4" style={{ fontSize: 14 }} data-reveal>
          Placeholder video. Send us your link and we&apos;ll drop it in.
        </p>
      </div>
    </section>
  );
}
