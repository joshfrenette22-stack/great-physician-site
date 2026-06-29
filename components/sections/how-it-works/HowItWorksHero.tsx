export function HowItWorksHero() {
  return (
    <section
      className="w-full text-center relative overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 18% 62%, rgba(88,205,153,0.22), transparent 46%), radial-gradient(circle at 78% 38%, rgba(35,87,122,0.18), transparent 52%), radial-gradient(circle at 52% 92%, rgba(156,124,102,0.13), transparent 46%), white',
        paddingTop: 160,
        paddingBottom: 150,
      }}
    >
      <div className="max-w-[1240px] mx-auto px-10 flex flex-col items-center">
        {/* Eyebrow */}
        <p className="gp-eyebrow mb-6">How it works</p>

        {/* Headline */}
        <h1
          data-reveal
          className="font-display font-black text-gray-900 mb-6"
          style={{
            fontSize: 68,
            letterSpacing: '-0.04em',
            lineHeight: 1.04,
            maxWidth: 760,
          }}
        >
          How does Great Physician work?
          <br />
          <span className="gp-text-gradient">Simple, honest, conservative-first.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-gray-500 mb-14"
          style={{ fontSize: 20, maxWidth: 560, lineHeight: 1.6 }}
        >
          No upsell, no pressure, the least you need, performed by a physician who tells you the truth.
        </p>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-3 opacity-60">
          <p
            className="font-semibold uppercase tracking-[0.18em] text-gray-400"
            style={{ fontSize: 11 }}
          >
            Scroll
          </p>
          <div
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
            style={{
              animation: 'gpBounce 1.8s ease-in-out infinite',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M7 2v10M2 7l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gpBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}
