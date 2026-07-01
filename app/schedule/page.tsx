import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Schedule a Visit | Great Physician Regenerative Medicine',
  description: 'Schedule a new or returning patient visit with Great Physician Regenerative Medicine in Northern Colorado.',
};

function UserPlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <line x1="19" y1="8" x2="19" y2="14"/>
      <line x1="22" y1="11" x2="16" y2="11"/>
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"/>
      <polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

export default function SchedulePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-teal-900 text-white overflow-hidden">
        {/* Background image at low opacity */}
        <div className="absolute inset-0">
          <Image
            src="/images/stock/photo-1486218119243-13883505764c.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ opacity: 0.16 }}
            sizes="100vw"
            priority
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(16,42,59,0.85) 0%, rgba(16,42,59,0.65) 100%)',
            }}
          />
        </div>

        <div className="relative max-w-[1240px] mx-auto px-5 md:px-10 py-16 md:py-24 lg:py-32 text-center">
          <p className="gp-eyebrow text-green-300 mb-5">Schedule a visit</p>
          <h1
            className="font-display font-extrabold text-white tracking-tight leading-tight text-[2rem] md:text-[2.75rem] lg:text-[3.5rem]"
          >
            Let&apos;s get you scheduled
          </h1>
          <p className="mt-5 text-base md:text-lg text-teal-200 max-w-lg mx-auto leading-relaxed">
            First, tell us a little about you so we can take you to the right place.
          </p>

          {/* Card selection */}
          <div className="max-w-[1080px] mx-auto px-0 mt-10 md:mt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {/* New Patient */}
              <Link
                href="/schedule/new"
                className="group bg-white border border-gray-200 rounded-[24px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-[5px] block p-7 md:p-[44px_40px]"
              >
                <div className="w-14 h-14 rounded-[16px] bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
                  <UserPlusIcon />
                </div>
                <h2 className="font-display font-extrabold text-gray-900 text-[28px] tracking-tight mb-3">
                  New patient
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  This is your first time visiting Great Physician. We&apos;ll gather a few details and reach out to set up your first consultation.
                </p>
                <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Start as a new patient <ArrowIcon />
                </span>
              </Link>

              {/* Returning Patient */}
              <Link
                href="/schedule/returning"
                className="group bg-white border border-gray-200 rounded-[24px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-[5px] block p-7 md:p-[44px_40px]"
              >
                <div className="w-14 h-14 rounded-[16px] bg-green-50 flex items-center justify-center text-green-600 mb-6">
                  <RefreshIcon />
                </div>
                <h2 className="font-display font-extrabold text-gray-900 text-[28px] tracking-tight mb-3">
                  Returning patient
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  You&apos;ve been seen by Dr. Hric before. Pick up where you left off and request your next visit.
                </p>
                <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Continue as a returning patient <ArrowIcon />
                </span>
              </Link>
            </div>

            <div className="text-center mt-10">
              <a
                href="tel:9705550142"
                className="inline-flex items-center justify-center gap-2 px-6 h-[44px] rounded-[12px] text-sm font-semibold text-white border-[1.5px] border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>
                Prefer to call? (970) 555-0142
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
