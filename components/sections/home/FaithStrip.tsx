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

      <div className="max-w-[1240px] mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
          {/* Left text */}
          <div>
            <p className="gp-eyebrow mb-4">Why &ldquo;Great Physician&rdquo;?</p>
            <h2 className="text-[36px] font-black tracking-tight text-gray-900 mb-5">
              Who is the Great Physician?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The name comes from an ancient truth — that the body&apos;s capacity to heal is a gift, not a product. We take that seriously. Medicine, at its best, is stewardship: helping the body do what it was made to do.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We&apos;re not a faith-based clinic in the sense of requiring belief — but we operate from a conviction that people are worth honest care, real answers, and genuine help.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors shadow-sm"
            >
              Meet Him Today
            </Link>
          </div>

          {/* Center divider */}
          <div className="hidden lg:block w-px self-stretch bg-gray-200" />

          {/* Right blockquote */}
          <div className="relative">
            <div
              className="text-[120px] font-serif text-teal-200/60 leading-none select-none absolute -top-8 -left-4"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="relative z-10 pt-8">
              <p className="text-[30px] font-medium italic text-gray-800 leading-snug tracking-tight">
                They that be whole need not a physician, but they that are sick.
              </p>
              <figcaption className="mt-4 text-sm font-semibold text-green-700 uppercase tracking-[0.14em]">
                Matthew 9:12
              </figcaption>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
