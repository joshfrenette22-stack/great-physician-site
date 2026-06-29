import Link from 'next/link';

export function FaithStrip() {
  return (
    <section
      className="w-full border-t border-b relative overflow-hidden"
      style={{ background: 'var(--gradient-brand-soft)', borderColor: 'var(--border-default)' }}
    >
      {/* Decorative radial gradient */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{ top: '-130px', left: '50%', transform: 'translateX(-50%)', width: '640px', height: '340px', background: 'radial-gradient(ellipse at center, rgba(46,168,78,0.12) 0%, rgba(46,168,78,0) 70%)' }}
      />

      <div className="relative max-w-[1080px] mx-auto px-5 md:px-10 py-[104px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1.05fr] gap-14 items-center">
          {/* Left text */}
          <div>
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--color-primary)' }}>
              Why &ldquo;Great Physician&rdquo;?
            </span>
            <h2
              className="text-[36px] md:text-[42px] font-extrabold leading-[1.1] tracking-tight mb-[22px]"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-strong)' }}
            >
              Who is the<br />Great Physician?
            </h2>
            <p className="text-[17px] leading-[1.7] mb-[30px]" style={{ color: 'var(--text-muted)', maxWidth: '380px' }}>
              The name is a promise. Every treatment here points to the One who heals completely, body and soul.
            </p>
            <Link
              href="/why-great-physician"
              className="inline-flex items-center justify-center px-7 h-[52px] rounded-[12px] bg-teal-600 text-white text-lg font-semibold tracking-[0.01em] border-[1.5px] border-transparent hover:bg-teal-700 transition-colors shadow-sm"
            >
              Meet Him Today
            </Link>
          </div>

          {/* Center divider — fades at both ends */}
          <div
            className="hidden lg:block w-px self-stretch min-h-[240px]"
            style={{
              background: 'linear-gradient(to bottom, transparent, var(--border-default) 18%, var(--border-default) 82%, transparent)',
            }}
          />

          {/* Right blockquote */}
          <figure className="relative m-0 pl-0 lg:pl-10">
            <span
              className="absolute leading-none select-none"
              style={{ top: '-52px', left: '-8px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '150px', color: 'var(--green-100)' }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote
              className="relative italic m-0"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '30px', lineHeight: 1.42, color: 'var(--teal-700)' }}
            >
              They that be whole need not a physician, but they that are sick.
            </blockquote>
            <figcaption className="mt-[22px] flex items-center gap-[14px]">
              <span className="flex-shrink-0" style={{ width: '30px', height: '2px', background: 'var(--green-500)', borderRadius: '2px' }} />
              <span className="text-[13px] font-bold uppercase tracking-[0.14em]" style={{ color: 'var(--color-accent-strong)' }}>
                Matthew 9:12
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
