import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

export function ClosingCTA() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-10 py-8 pb-20">
      <div
        className="relative rounded-[28px] overflow-hidden text-center py-20 px-10"
        style={{ background: 'linear-gradient(100deg, #16384C 0%, #235A7C 42%, #2EA84E 100%)' }}
      >
        {/* Decorative rings */}
        <div
          className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        />

        {/* Location badge */}
        <div className="relative z-10 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
          <MapPin className="w-3.5 h-3.5 text-green-300" />
          <span className="text-xs font-semibold text-white/80">Northern Colorado</span>
        </div>

        {/* Headline */}
        <h2 className="relative z-10 text-[46px] font-black text-white tracking-tight leading-[1.08] mb-6">
          Ready to feel like yourself again?
        </h2>

        {/* Body */}
        <p className="relative z-10 text-white/70 text-[17px] leading-relaxed max-w-[560px] mx-auto mb-4">
          Most patients spend months or years managing pain instead of addressing it. A single conversation with Dr. Hric is often enough to know whether regenerative medicine is right for you.
        </p>
        <p className="relative z-10 text-white/55 text-sm max-w-[460px] mx-auto mb-10">
          New patients are always welcome. We keep scheduling straightforward because getting the first appointment shouldn&apos;t be the hard part.
        </p>

        {/* CTAs */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-green-500 text-white text-lg font-semibold hover:bg-green-600 active:bg-green-700 shadow-sm transition-all duration-200"
          >
            Schedule a Visit
          </Link>
          <a
            href="tel:+19705550142"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            <Phone className="w-4 h-4" />
            or call (970) 555-0142
          </a>
        </div>
      </div>
    </section>
  );
}
