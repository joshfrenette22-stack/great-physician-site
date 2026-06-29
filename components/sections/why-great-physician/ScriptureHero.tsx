export function ScriptureHero() {
  return (
    <section className="bg-white">
      <div className="max-w-[1080px] mx-auto px-10 py-24 text-center" data-reveal>
        <p className="gp-eyebrow text-gray-400 mb-8">The name we carry</p>
        <blockquote
          className="font-display font-black text-gray-900 tracking-tight leading-tight mb-6"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.625rem)' }}
        >
          &ldquo;They that be whole need not a physician, but they that are sick.&rdquo;
        </blockquote>
        <cite className="not-italic font-semibold text-teal-600 text-base block mb-10">
          Matthew 9:12, KJV
        </cite>
        <div className="max-w-[680px] mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Great Physician is named for Jesus Christ — the one who healed completely, without conditions. That name shapes how we practice medicine: treating the whole person, not just the injury, with honesty and genuine care.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We don&apos;t believe healing is purely mechanical. We believe people are made in the image of God, deserve to be treated with dignity, and that how we practice — not just what we practice — matters.
          </p>
        </div>
      </div>
    </section>
  );
}
