export function FaqHero() {
  return (
    <section className="relative bg-teal-900 text-white overflow-hidden">
      <div
        className="absolute pointer-events-none"
        style={{
          right: -120,
          top: -120,
          width: 460,
          height: 460,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(58,161,118,0.32), transparent 70%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-10" style={{ padding: '92px 40px 80px' }}>
        <p className="text-sm font-semibold tracking-[0.04em] text-green-300 mb-[18px]">Frequently asked questions</p>
        <h1
          className="font-display font-extrabold text-white leading-none max-w-[880px]"
          style={{ fontSize: 76, letterSpacing: '-0.035em', margin: 0 }}
        >
          Questions, answered honestly.
        </h1>
        <p
          className="text-white/82 max-w-[640px]"
          style={{ margin: '26px 0 0', fontSize: 21, lineHeight: 1.55 }}
        >
          Regenerative medicine comes with a lot of questions, and a lot of hype elsewhere. Here&apos;s what we actually tell our patients.
        </p>
      </div>
    </section>
  );
}
