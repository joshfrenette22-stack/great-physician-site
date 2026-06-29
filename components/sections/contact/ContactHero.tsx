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

      <div className="relative max-w-[1240px] mx-auto px-10" style={{ padding: '88px 40px 74px' }}>
        <p className="text-sm font-semibold tracking-[0.04em] text-green-300 mb-[18px]">Get in touch</p>
        <h1
          className="font-display font-extrabold text-white leading-none max-w-[880px]"
          style={{ fontSize: 76, letterSpacing: '-0.035em', margin: 0 }}
        >
          Let&apos;s start with a conversation.
        </h1>
        <p
          className="text-white/82 max-w-[640px]"
          style={{ margin: '26px 0 0', fontSize: 21, lineHeight: 1.55 }}
        >
          Tell us what&apos;s going on. We&apos;ll listen, review your situation honestly, and help you understand whether regenerative care is a fit.
        </p>
      </div>
    </section>
  );
}
