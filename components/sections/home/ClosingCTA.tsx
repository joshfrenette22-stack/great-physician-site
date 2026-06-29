import Link from 'next/link';
import { MapPin } from 'lucide-react';

export function ClosingCTA() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-10 py-8 pb-20">
      <div
        className="relative rounded-[28px] overflow-hidden text-center"
        style={{
          padding: '80px 56px',
          background: 'linear-gradient(100deg, #16384C 0%, #235A7C 42%, #2EA84E 100%)',
        }}
      >
        {/* Decorative rings — thick borders matching design */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            right: '-90px',
            top: '-120px',
            width: '260px',
            height: '260px',
            border: '32px solid rgba(255,255,255,0.07)',
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: '-130px',
            bottom: '-160px',
            width: '360px',
            height: '360px',
            border: '40px solid rgba(255,255,255,0.08)',
          }}
        />

        {/* Location badge */}
        <div className="relative z-10 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
          <MapPin className="w-3.5 h-3.5 text-green-300" />
          <span
            className="text-white/80"
            style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em' }}
          >
            Northern Colorado
          </span>
        </div>

        {/* Headline */}
        <h2 className="relative z-10 text-[46px] font-black text-white tracking-tight leading-[1.08] mb-6">
          Ready to feel like yourself again?
        </h2>

        {/* Body */}
        <p className="relative z-10 text-white/70 text-[17px] leading-relaxed max-w-[560px] mx-auto mb-4">
          Conveniently located within Dr. Tyler Wood&apos;s office. Schedule a visit and we&apos;ll talk through what&apos;s going on and whether we can help.
        </p>
        <p className="relative z-10 text-white/55 text-sm max-w-[460px] mx-auto mb-10">
          We&apos;ll start with the least invasive, least expensive option that can realistically help, and tell you honestly if surgery is the better path.
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
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            style={{ fontSize: '16px', fontWeight: 600 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 11.5v2a1.33 1.33 0 01-1.45 1.33 13.18 13.18 0 01-5.75-2.04 13 13 0 01-4-4 13.18 13.18 0 01-2.04-5.78A1.33 1.33 0 012.58 1.5h2a1.33 1.33 0 011.33 1.15c.085.66.24 1.31.47 1.94a1.33 1.33 0 01-.3 1.41L5.09 7a10.67 10.67 0 004 4l.97-.97a1.33 1.33 0 011.41-.3c.63.23 1.28.385 1.94.47a1.33 1.33 0 011.15 1.33z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            or call (970) 555-0142
          </a>
        </div>
      </div>
    </section>
  );
}
