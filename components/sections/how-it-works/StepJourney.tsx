import Image from 'next/image';

/* ── Static bar ring helper ─────────────────────────────────── */
const BAR_COUNT = 48;

function BarRing({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto" style={{ width: 320, height: 320 }}>
      {/* Bars */}
      {Array.from({ length: BAR_COUNT }).map((_, i) => {
        const angle = (i / BAR_COUNT) * 360;
        const height = 12 + ((i % 7) * 4);
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              width: 3,
              height,
              borderRadius: 2,
              background: i % 3 === 0 ? 'var(--green-400)' : 'var(--teal-300)',
              opacity: 0.55 + (i % 5) * 0.09,
              transformOrigin: `1.5px ${-148 + height / 2}px`,
              transform: `rotate(${angle}deg) translateY(-148px)`,
            }}
          />
        );
      })}
      {/* Center photo */}
      <div
        className="absolute rounded-full overflow-hidden border-4 border-white shadow-lg"
        style={{
          width: 220,
          height: 220,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Image src={src} alt={alt} fill className="object-cover" sizes="220px" />
      </div>
    </div>
  );
}

/* ── Step badge ─────────────────────────────────────────────── */
function StepBadge({ n }: { n: number }) {
  return (
    <div
      className="flex items-center justify-center mx-auto text-white font-display font-black shadow-md"
      style={{
        width: 52,
        height: 52,
        borderRadius: 14,
        background: '#161C21',
        fontSize: 22,
        position: 'sticky',
        top: 96,
        zIndex: 2,
      }}
    >
      {n}
    </div>
  );
}

/* ── Condition pill tags ────────────────────────────────────── */
const conditionTags = [
  { label: 'Joint pain', icon: '🦴' },
  { label: 'Tendon injury', icon: '💪' },
  { label: 'Back & spine', icon: '🔬' },
  { label: 'Sports & overuse', icon: '🏃' },
  { label: 'Chronic pain', icon: '🩺' },
];

/* ── Treatment photo cards ──────────────────────────────────── */
const treatmentCards = [
  { label: 'PRP Therapy', src: '/images/stock/photo-1573497019940-1c28c88b4f3e.jpg' },
  { label: 'Prolotherapy', src: '/images/stock/photo-1521119989659-a83eee488004.jpg' },
  { label: 'Focused Shockwave', src: '/images/stock/photo-1576765608866-5b51046452be.jpg' },
];

/* ── Main component ─────────────────────────────────────────── */
export function StepJourney() {
  return (
    <section className="w-full py-24 relative">
      {/* Center spine */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: 80,
          bottom: 80,
          width: 2,
          transform: 'translateX(-50%)',
          background: 'linear-gradient(to bottom, transparent 0%, var(--border-default) 8%, var(--border-default) 92%, transparent 100%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-10 relative z-10">

        {/* ── STEP 1 ── */}
        <div
          className="relative text-center"
          style={{ paddingBottom: 110 }}
          data-reveal
        >
          <StepBadge n={1} />
          <div className="mt-8 mb-10">
            <h2
              className="font-display font-black text-gray-900"
              style={{ fontSize: 48, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              It starts with a simple{' '}
              <span className="text-green-700">conversation</span>
            </h2>
          </div>

          {/* Bar ring + photo */}
          <div className="flex justify-center mb-8">
            <BarRing
              src="/images/stock/photo-1599566150163-29194dcaad36.jpg"
              alt="Patient consultation"
            />
          </div>

          <p
            className="text-gray-500 max-w-[520px] mx-auto"
            style={{ fontSize: 18, lineHeight: 1.65 }}
          >
            Schedule a visit online or by phone. No referral needed. Your first appointment is a real conversation with Dr. Hric about what&apos;s going on and whether we can help.
          </p>
        </div>

        {/* ── STEP 2 ── */}
        <div
          className="relative text-center"
          style={{ paddingBottom: 110 }}
          data-reveal
        >
          <StepBadge n={2} />
          <div className="mt-8 mb-10">
            <h2
              className="font-display font-black text-gray-900"
              style={{ fontSize: 48, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Tell us what&apos;s going on,{' '}
              <span className="text-teal-600">body and lifestyle</span>
            </h2>
          </div>

          {/* Large image card with floating tags */}
          <div
            className="relative mx-auto rounded-[24px] overflow-hidden"
            style={{ maxWidth: 760, minHeight: 520 }}
          >
            <Image
              src="/images/stock/photo-1581056771107-24ca5f033842.jpg"
              alt="Patient discussing lifestyle with doctor"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 80vw, 760px"
            />
            {/* Gradient overlay from left */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, rgba(10,28,42,0.72) 0%, transparent 65%)',
              }}
            />

            {/* Floating condition tags */}
            <div className="absolute left-6 bottom-6 flex flex-col gap-2 z-10">
              {conditionTags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-white/20 backdrop-blur-sm border border-white/20"
                >
                  <span>{tag.icon}</span>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <p
            className="text-gray-500 max-w-[520px] mx-auto mt-8"
            style={{ fontSize: 18, lineHeight: 1.65 }}
          >
            We want to understand the full picture — not just the painful spot. Activity level, history, what&apos;s been tried, and what&apos;s driving your goals.
          </p>
        </div>

        {/* ── STEP 3 ── */}
        <div
          className="relative text-center"
          style={{ paddingBottom: 110 }}
          data-reveal
        >
          <StepBadge n={3} />
          <div className="mt-8 mb-10">
            <h2
              className="font-display font-black text-gray-900"
              style={{ fontSize: 48, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Get a clear picture of{' '}
              <span className="text-green-700">what&apos;s going on</span>
            </h2>
          </div>

          {/* 3-col feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.76.71-1.96 0-2.72a1.93 1.93 0 0 0-2.72 0z"/>
                    <path d="M12 15l-4.5-4.5c2-3.5 5-6 9-6a6 6 0 0 1 6 6c0 4-2.5 7-6 9l-4.5-4.5z"/>
                  </svg>
                ),
                title: 'Hands-on exam',
                desc: 'Dr. Hric examines you directly — palpation, range of motion, functional testing.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <path d="M8 21h8M12 17v4"/>
                  </svg>
                ),
                title: 'Imaging only if needed',
                desc: "We order imaging when it changes the plan, not as a default intake step.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                ),
                title: 'Plain-language results',
                desc: "We explain what we found in plain English, not medical shorthand.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-[18px] p-6 text-left flex flex-col gap-3"
              >
                <div
                  className="w-10 h-10 rounded-[11px] flex items-center justify-center"
                  style={{ background: 'var(--gradient-brand)' }}
                >
                  {card.icon}
                </div>
                <p className="font-display font-bold text-gray-900" style={{ fontSize: 16 }}>
                  {card.title}
                </p>
                <p className="text-gray-500 leading-relaxed" style={{ fontSize: 14 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            {/* Card 1: gradient brand */}
            <div
              className="rounded-[20px] p-7 flex flex-col gap-4 text-white"
              style={{ background: 'var(--gradient-brand)', minHeight: 220 }}
            >
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 font-display font-black text-white"
                style={{ fontSize: 15 }}
              >
                1
              </span>
              <div>
                <p className="font-display font-bold text-white mb-1" style={{ fontSize: 18 }}>
                  Your assessment
                </p>
                <p className="text-white/75" style={{ fontSize: 14 }}>
                  A diagnosis in plain language, with no clinical ambiguity.
                </p>
              </div>
            </div>

            {/* Card 2: image */}
            <div
              className="relative rounded-[20px] overflow-hidden"
              style={{ minHeight: 220 }}
            >
              <Image
                src="/images/stock/photo-1576091160550-2173dba999ef.jpg"
                alt="Hands-on exam"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 33vw, 400px"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, rgba(10,28,42,0.48) 0%, transparent 55%)' }}
              />
              <span className="absolute top-5 left-5 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white bg-black/30 backdrop-blur-sm">
                Hands-on exam
              </span>
            </div>

            {/* Card 3: your plan */}
            <div
              className="bg-white border border-gray-200 rounded-[20px] p-7 flex flex-col gap-4"
              style={{ minHeight: 220 }}
            >
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-teal-600 bg-teal-50"
                style={{ width: 'fit-content' }}
              >
                Your plan
              </span>
              {/* Conservative-first progress bar */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Conservative-first approach
                </p>
                <div className="h-2 rounded-full bg-gray-100 overflow-hidden mb-1">
                  <div
                    className="h-full rounded-full"
                    style={{ width: '65%', background: 'var(--gradient-brand)' }}
                  />
                </div>
              </div>
              {/* Treatment option rows */}
              {['Rest & rehab first', 'Regenerative therapy', 'Referral if needed'].map((opt, i) => (
                <div key={opt} className="flex items-center gap-2.5">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: i === 0 ? 'var(--green-100)' : '#F0F6F9' }}
                  >
                    {i === 0 ? (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1.5 4L4 6.5L8.5 1.5" stroke="#1C7A39" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    )}
                  </span>
                  <p className="text-sm text-gray-700">{opt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── STEP 4 ── */}
        <div
          className="relative text-center"
          style={{ paddingBottom: 110 }}
          data-reveal
        >
          <StepBadge n={4} />
          <div className="mt-8 mb-10">
            <h2
              className="font-display font-black text-gray-900"
              style={{ fontSize: 48, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Physician-performed treatment,{' '}
              <span className="text-teal-600">done in person</span>
            </h2>
          </div>

          {/* Treatment photo cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {treatmentCards.map((card) => (
              <div
                key={card.label}
                className="relative rounded-[22px] overflow-hidden"
                style={{ minHeight: 360 }}
              >
                <Image
                  src={card.src}
                  alt={card.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 33vw, 400px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,28,42,0.80) 0%, transparent 55%)',
                  }}
                />
                <p
                  className="absolute bottom-5 left-5 font-display font-bold text-white"
                  style={{ fontSize: 17 }}
                >
                  {card.label}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-gray-500 max-w-[520px] mx-auto"
            style={{ fontSize: 18, lineHeight: 1.65 }}
          >
            Every injection and every shockwave session is guided and performed by Dr. Hric — ultrasound-guided when precision matters. Not delegated. Not rushed.
          </p>
        </div>

        {/* ── STEP 5 ── */}
        <div
          className="relative text-center"
          style={{ paddingBottom: 60 }}
          data-reveal
        >
          <StepBadge n={5} />
          <div className="mt-8 mb-10">
            <h2
              className="font-display font-black text-gray-900"
              style={{ fontSize: 48, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Ongoing guidance,{' '}
              <span className="text-green-700">whenever you need it</span>
            </h2>
          </div>

          {/* Dr. Hric photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Green ring */}
              <div
                className="rounded-full"
                style={{
                  width: 226,
                  height: 226,
                  border: '3px solid var(--green-400)',
                  padding: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  className="rounded-full overflow-hidden"
                  style={{ width: 210, height: 210 }}
                >
                  <Image
                    src="/images/stock/photo-1560250097-0b93528c311a.jpg"
                    alt="Dr. Hric"
                    width={210}
                    height={210}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              {/* Green dot indicator */}
              <div
                className="absolute rounded-full bg-green-500 border-2 border-white"
                style={{ width: 16, height: 16, bottom: 10, right: 10 }}
              />
            </div>
          </div>

          <p
            className="text-gray-500 max-w-[520px] mx-auto"
            style={{ fontSize: 18, lineHeight: 1.65 }}
          >
            After treatment, Dr. Hric stays in the loop. Healing is not always linear, and we adjust the plan as your body responds. You&apos;re never left wondering what comes next.
          </p>
        </div>

      </div>
    </section>
  );
}
