export function ResourcesHero() {
  return (
    <section className="relative bg-teal-900 text-white overflow-hidden">
      <div
        className="absolute pointer-events-none"
        style={{
          left: -120,
          bottom: -150,
          width: 440,
          height: 440,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(58,161,118,0.3), transparent 70%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto" style={{ padding: '92px 40px 80px' }}>
        <p className="text-sm font-semibold tracking-[0.04em] text-green-300 mb-[18px]">Patient resources</p>
        <h1
          className="font-display font-black text-white leading-none max-w-[880px]"
          style={{ fontSize: 76, letterSpacing: '-0.035em', margin: 0 }}
        >
          Understand your options before you decide.
        </h1>
        <p
          className="text-white/82 max-w-[640px]"
          style={{ margin: '26px 0 0', fontSize: 21, lineHeight: 1.55 }}
        >
          Clear, honest explanations of regenerative medicine, the science, the realistic expectations, and the questions worth asking.
        </p>
      </div>
    </section>
  );
}
