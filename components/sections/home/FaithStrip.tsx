import Link from 'next/link';

export function FaithStrip() {
  return (
    <section
      className="w-full border-t border-b border-gray-100 py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EDF2F4 0%, #EFF9F1 100%)' }}
    >
      {/* Decorative radial gradient */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(46,168,78,0.08) 0%, transparent 65%)' }}
      />

      <div className="max-w-[1080px] mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1.05fr] gap-12 items-center">
          {/* Left text */}
          <div>
            <p className="gp-eyebrow mb-4">Why &ldquo;Great Physician&rdquo;?</p>
            <h2 className="text-[42px] font-black tracking-tight text-gray-900 mb-5">
              Who is the Great Physician?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              The name is a promise. Every treatment here points to the One who heals completely, body and soul.
            </p>
            <Link
              href="/why-great-physician"
              className="inline-flex items-center justify-center px-6 h-[42px] rounded-[12px] bg-teal-600 text-white text-sm font-semibold tracking-[0.01em] border-[1.5px] border-transparent hover:bg-teal-700 transition-colors shadow-sm"
            >
              Meet Him Today
            </Link>
          </div>

          {/* Center divider — fades at both ends */}
          <div
            className="hidden lg:block w-px self-stretch"
            style={{
              background: 'linear-gradient(to bottom, transparent, var(--border-default, #E5E7EB) 18%, var(--border-default, #E5E7EB) 82%, transparent)',
            }}
          />

          {/* Right blockquote */}
          <div className="relative">
            <div
              className="font-serif leading-none select-none absolute -top-8 -left-4"
              style={{ fontSize: '150px', color: 'var(--green-100, #DCFCE7)' }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="relative z-10 pt-8">
              <p
                className="leading-snug tracking-tight italic"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '30px', color: 'var(--teal-700, #0F766E)' }}
              >
                They that be whole need not a physician, but they that are sick.
              </p>
              <figcaption className="mt-4 flex items-center gap-3">
                {/* Green horizontal line */}
                <span
                  className="inline-block flex-shrink-0"
                  style={{ width: '30px', height: '2px', background: 'var(--green-500, #2EA84E)' }}
                />
                <span className="text-sm font-semibold text-green-700 uppercase tracking-[0.14em]">
                  Matthew 9:12
                </span>
              </figcaption>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
