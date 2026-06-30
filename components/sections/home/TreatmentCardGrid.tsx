const cards = [
  {
    eyebrow: 'Knee · Hip · Shoulder',
    title: 'Move freely',
    image: '/images/Elderly.png',
    gradient: 'linear-gradient(90deg, #123247, #1D5053)',
  },
  {
    eyebrow: 'Tendon & ligament',
    title: 'Heal the injury',
    image: '/images/Flex.png',
    gradient: 'linear-gradient(90deg, #1D5053, #276D5F)',
  },
  {
    eyebrow: 'Sports & overuse',
    title: 'Back in the game',
    image: '/images/Fit.png',
    gradient: 'linear-gradient(90deg, #276D5F, #318B6B)',
  },
  {
    eyebrow: 'Arthritis & joints',
    title: 'Ease the ache',
    image: '/images/EaseAche.png',
    gradient: 'linear-gradient(90deg, #318B6B, #3CA877)',
  },
];

export function TreatmentCardGrid() {
  return (
    <section id="treat" className="w-full max-w-[1240px] mx-auto" style={{ padding: '44px 40px 8px' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {cards.map((card) => (
          <a
            key={card.title}
            href="#conditions"
            className="gp-card group flex flex-col min-h-[400px] rounded-[22px] overflow-hidden cursor-pointer shadow-md hover:-translate-y-1 transition-transform duration-200"
            style={{ background: card.gradient, padding: 24, textDecoration: 'none' }}
          >
            {/* Top row */}
            <div className="flex justify-between items-start" style={{ gap: 10 }}>
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: 'rgba(255,255,255,0.78)' }}
              >
                {card.eyebrow}
              </span>
              <span
                className="flex-none w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.16)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="9 7 17 7 17 15" /></svg>
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[27px] font-extrabold text-white leading-[1.08]" style={{ fontFamily: 'var(--font-display)', margin: '14px 0 0' }}>
              {card.title}
            </h3>

            {/* Masked figure image */}
            <div
              className="gp-photo gp-figure relative flex-1"
              style={{
                marginTop: 12,
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'auto 200%',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to top, transparent 0%, #000 28%)',
                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, #000 28%)',
              }}
              role="img"
              aria-label={card.title}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
