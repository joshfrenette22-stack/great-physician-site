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

        <div className="relative max-w-[1240px] mx-auto px-10 py-24 md:py-32 text-center">
          <p className="gp-eyebrow text-green-300 mb-5">Schedule a visit</p>
          <h1
            className="font-display font-extrabold text-white tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
          >
            Let&apos;s get you scheduled.
          </h1>
          <p className="mt-5 text-lg text-teal-200 max-w-lg mx-auto leading-relaxed">
            First, tell us a little about you so we can take you to the right place.
          </p>
        </div>
      </section>

      {/* Card selection */}
      <section className="bg-white py-20">
        <div className="max-w-[1080px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* New Patient */}
            <Link
              href="/schedule/new"
              className="group bg-white border border-gray-200 rounded-[24px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-[5px] block"
              style={{ padding: '44px 40px' }}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
                <UserPlusIcon />
              </div>
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-3">
                New patient
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Haven&apos;t visited us before? We&apos;ll walk you through a short intake process, then get you booked for a consultation.
              </p>
              <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                Get started <ArrowIcon />
              </span>
            </Link>

            {/* Returning Patient */}
            <Link
              href="/schedule/returning"
              className="group bg-white border border-gray-200 rounded-[24px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-[5px] block"
              style={{ padding: '44px 40px' }}
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
                <RefreshIcon />
              </div>
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-3">
                Returning patient
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Already seen us before? Pick up where you left off and book your next visit quickly.
              </p>
              <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                Book a visit <ArrowIcon />
              </span>
            </Link>
          </div>

          <p className="text-center text-gray-500 text-sm mt-10">
            Prefer to call?{' '}
            <a href="tel:9705550142" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
              (970) 555-0142
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
