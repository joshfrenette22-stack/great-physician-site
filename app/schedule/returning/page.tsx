'use client';

import { useState } from 'react';
import Link from 'next/link';

const CONCERN_OPTIONS = [
  'Follow-up visit',
  'New or returning pain',
  'Next in my plan',
  'A different area',
  'Re-evaluation',
  'Not sure yet',
];

const TOTAL_STEPS = 3;
const STEP_LABELS = ['Your details', 'Your concern', 'Book a time'];

function CheckCircleIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  );
}

interface PatientDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function ScheduleReturningPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [details, setDetails] = useState<PatientDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [detailsError, setDetailsError] = useState('');
  const [selectedConcern, setSelectedConcern] = useState('');
  const [concernNote, setConcernNote] = useState('');

  const pct = Math.round((step / TOTAL_STEPS) * 100);

  function validateDetails() {
    if (!details.firstName.trim()) return 'First name is required.';
    if (!details.lastName.trim()) return 'Last name is required.';
    if (!details.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email))
      return 'A valid email address is required.';
    return '';
  }

  function handleNext() {
    if (step === 0) {
      const err = validateDetails();
      if (err) { setDetailsError(err); return; }
      setDetailsError('');
    }
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      setDone(true);
    }
  }

  function handleBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  // Build Calendly URL with prefill
  function getCalendlyUrl() {
    const name = encodeURIComponent(`${details.firstName} ${details.lastName}`.trim());
    const email = encodeURIComponent(details.email);
    return `https://calendly.com/great-physician/visit?hide_gdpr_banner=1&name=${name}&email=${email}`;
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-teal-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(46,168,78,0.10)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative max-w-[1240px] mx-auto px-10 py-20 md:py-28">
          <p className="gp-eyebrow text-green-300 mb-4">Welcome back</p>
          <h1
            className="font-display font-extrabold text-white tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Book your next visit.
          </h1>
          <p className="mt-4 text-teal-200 text-lg max-w-md leading-relaxed">
            It only takes a minute. Let us know what&apos;s next for you.
          </p>
        </div>
      </section>

      {/* Flow card */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[880px] mx-auto px-10">
          <div className="bg-white rounded-[24px] shadow-xl overflow-hidden">
            {done ? (
              /* Success */
              <div className="flex flex-col items-center justify-center text-center px-10 py-20">
                <div className="text-green-500 mb-6">
                  <CheckCircleIcon />
                </div>
                <h2 className="font-display font-extrabold text-gray-900 text-3xl tracking-tight mb-3">
                  You&apos;re booked.
                </h2>
                <p className="text-gray-500 text-base max-w-md leading-relaxed mb-8">
                  Check your email for a confirmation from Calendly. We look forward to seeing you.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                >
                  <ArrowLeftIcon />
                  Back to home
                </Link>
              </div>
            ) : (
              <>
                {/* Progress bar */}
                <div className="px-8 pt-8 pb-0">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-900">
                      Step {step + 1} of {TOTAL_STEPS} &mdash; {STEP_LABELS[step]}
                    </span>
                    <span className="text-sm text-gray-400">{pct}% complete</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>

                {/* Step content */}
                <div className="px-8 py-8">
                  {/* Step 0: Details */}
                  {step === 0 && (
                    <div>
                      <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-1">
                        Your details
                      </h2>
                      <p className="text-gray-500 text-sm mb-6">
                        We&apos;ll use this to find your records and pre-fill your booking.
                      </p>
                      {detailsError && (
                        <div className="mb-4 rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
                          {detailsError}
                        </div>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-1.5">
                            First name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={details.firstName}
                            onChange={(e) => setDetails((d) => ({ ...d, firstName: e.target.value }))}
                            placeholder="Jane"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-[3px] focus:ring-green-100 focus:border-teal-600 transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-1.5">
                            Last name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={details.lastName}
                            onChange={(e) => setDetails((d) => ({ ...d, lastName: e.target.value }))}
                            placeholder="Smith"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-[3px] focus:ring-green-100 focus:border-teal-600 transition-all duration-200"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-1.5">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            value={details.email}
                            onChange={(e) => setDetails((d) => ({ ...d, email: e.target.value }))}
                            placeholder="jane@example.com"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-[3px] focus:ring-green-100 focus:border-teal-600 transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-1.5">Phone</label>
                          <input
                            type="tel"
                            value={details.phone}
                            onChange={(e) => setDetails((d) => ({ ...d, phone: e.target.value }))}
                            placeholder="(970) 555-0100"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-[3px] focus:ring-green-100 focus:border-teal-600 transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 1: Concern chips */}
                  {step === 1 && (
                    <div>
                      <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-1">
                        What brings you back?
                      </h2>
                      <p className="text-gray-500 text-sm mb-6">
                        Select the option that best describes your visit, then add any details below.
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {CONCERN_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSelectedConcern(opt)}
                            className={[
                              'px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200',
                              selectedConcern === opt
                                ? 'bg-teal-600 text-white border-teal-600'
                                : 'bg-white text-gray-700 border-gray-200 hover:border-teal-400 hover:text-teal-700',
                            ].join(' ')}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1.5">
                          Anything else to share? (optional)
                        </label>
                        <textarea
                          rows={3}
                          value={concernNote}
                          onChange={(e) => setConcernNote(e.target.value)}
                          placeholder="A little context helps us prepare…"
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-[3px] focus:ring-green-100 focus:border-teal-600 transition-all duration-200 resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Calendly */}
                  {step === 2 && (
                    <div>
                      <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-1">
                        Pick a time
                      </h2>
                      <p className="text-gray-500 text-sm mb-5">
                        Choose a time that works for you. You&apos;ll get a confirmation by email.
                      </p>
                      <div className="rounded-xl overflow-hidden border border-gray-100">
                        <iframe
                          src={getCalendlyUrl()}
                          title="Book a visit"
                          className="w-full"
                          style={{ minHeight: 620, border: 'none' }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="px-8 pb-8 flex items-center justify-between gap-4">
                  <button
                    onClick={handleBack}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 px-5 h-[34px] rounded-[8px] text-sm font-semibold tracking-[0.01em] text-gray-600 border-[1.5px] border-gray-300 hover:bg-teal-50 disabled:opacity-40 disabled:pointer-events-none transition-all duration-200"
                  >
                    <ArrowLeftIcon />
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center justify-center px-7 h-[42px] rounded-[12px] font-semibold tracking-[0.01em] text-base text-white bg-teal-600 border-[1.5px] border-transparent hover:bg-teal-700 active:bg-teal-800 transition-all duration-200 shadow-sm"
                  >
                    {step === TOTAL_STEPS - 1 ? "I'm booked" : 'Continue'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
