export function FaqHero() {
  return (
    <section className="relative bg-teal-900 text-white overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[540px] h-[540px] bg-[radial-gradient(circle,rgba(46,168,78,0.13)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-[radial-gradient(circle,rgba(35,90,124,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1240px] mx-auto px-10 py-24 md:py-32">
        <p className="gp-eyebrow text-green-300 mb-5">Frequently asked questions</p>
        <h1
          className="font-display font-black text-white tracking-tight leading-none max-w-3xl"
          style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)' }}
        >
          Questions, answered honestly.
        </h1>
        <p className="mt-6 text-lg text-teal-200 max-w-xl leading-relaxed">
          We believe an informed patient makes better decisions. These answers are as straight as we can make them.
        </p>
      </div>
    </section>
  );
}
