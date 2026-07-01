export function ContactHero() {
  return (
    <section className="relative bg-teal-900 text-white overflow-hidden">
      {/* Radial glow bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: -140,
          bottom: -160,
          width: 460,
          height: 460,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(58,161,118,0.3), transparent 70%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-5 md:px-10 py-14 md:py-20 lg:py-[88px]">
        <p className="text-sm font-semibold tracking-[0.04em] text-green-300 mb-[18px]">Get in touch</p>
        <h1
          className="font-display font-extrabold text-white leading-none max-w-[880px] text-[2.25rem] md:text-[3.25rem] lg:text-[4.75rem]"
          style={{ letterSpacing: '-0.035em', margin: 0 }}
        >
          Let&apos;s start with a conversation.
        </h1>
        <p
          className="text-white/82 max-w-[640px] text-base md:text-lg lg:text-xl"
          style={{ margin: '22px 0 0', lineHeight: 1.55 }}
        >
          Tell us what&apos;s going on. We&apos;ll listen, review your situation honestly, and help you understand whether regenerative care is a fit.
        </p>
      </div>
    </section>
  );
}
