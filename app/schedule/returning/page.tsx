'use client';

import { useState } from 'react';
import Link from 'next/link';

const CONCERN_OPTIONS = [
  'Follow-up visit',
  'New / returning pain',
  'Next in my plan',
  'A different area',
  'Re-evaluation',
  'Not sure yet',
];

const TOTAL_STEPS = 3;
const STEP_LABELS = [
  'Step 1 of 3 · Your details',
  'Step 2 of 3 · Your concern',
  'Step 3 of 3 · Schedule your visit',
];

interface PatientDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const fieldClass = 'w-full font-sans text-base text-gray-900 bg-white border border-gray-300 rounded-[12px] px-[15px] py-[13px] outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-teal-600 focus:ring-[3px] focus:ring-green-100';
const labelClass = 'block text-[13.5px] font-semibold text-teal-800 mb-[7px]';

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

  const pct = Math.round(((step + 1) / TOTAL_STEPS) * 100);

  function validateDetails() {
    if (!details.firstName.trim() || !details.lastName.trim() || !details.phone.trim())
      return 'Please fill in your name, email, and phone.';
    if (!details.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email))
      return 'Please enter a valid email address.';
    return '';
  }

  function handleNext() {
    if (step === 0) {
      const err = validateDetails();
      if (err) { setDetailsError(err); return; }
      setDetailsError('');
    }
    if (step === 1 && !selectedConcern) {
      setDetailsError('Please choose what is bringing you in.');
      return;
    }
    setDetailsError('');
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      setDone(true);
    }
  }

  function handleBack() {
    if (step > 0) { setDetailsError(''); setStep((s) => s - 1); }
  }

  function getCalendlyUrl() {
    const params = new URLSearchParams();
    const name = `${details.firstName} ${details.lastName}`.trim();
    if (name) params.set('name', name);
    if (details.email) params.set('email', details.email);
    const qs = params.toString() ? '&' + params.toString() : '';
    return `https://calendly.com/great-physician/visit?hide_gdpr_banner=1${qs}`;
  }

  return (
    <>
      {/* Hero + Flow — single teal-900 section like design */}
      <section style={{ position: 'relative', background: 'var(--teal-900, #0f2d3c)' }}>
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1400&q=70&auto=format&fit=crop"
          alt=""
          style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 340, width: '100%', objectFit: 'cover', opacity: 0.16 }}
        />
        <div
          style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 340, background: 'linear-gradient(180deg, rgba(18,46,66,0.4), var(--teal-900, #0f2d3c))' }}
        />

        <div className="relative max-w-[880px] mx-auto" style={{ padding: '70px 40px 90px' }}>
          {/* Hero text */}
          <div className="text-center text-white max-w-[720px] mx-auto" style={{ marginBottom: 44 }}>
            <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--green-300, #86efac)', marginBottom: 16 }}>
              Welcome back
            </p>
            <h1
              className="font-display font-extrabold text-white"
              style={{ fontSize: 56, lineHeight: 1.03, letterSpacing: '-0.035em', margin: 0 }}
            >
              Book your next visit
            </h1>
            <p style={{ margin: '18px 0 0', fontSize: 19, lineHeight: 1.55, color: 'rgba(255,255,255,0.85)' }}>
              Confirm your details, tell us what&apos;s bringing you in, then pick a time that works for you.
            </p>
          </div>

          {/* Flow card */}
          <div className="bg-white rounded-[24px] overflow-hidden" style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.3)' }}>
            {done ? (
              <div style={{ textAlign: 'center', padding: '28px 40px 14px' }}>
                <div
                  style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--green-50, #f0fdf4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary, #2c825d)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="font-display font-extrabold text-teal-900"
                  style={{ fontSize: 28, letterSpacing: '-0.02em', margin: '0 0 12px' }}
                >
                  You&apos;re booked
                </h3>
                <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--text-muted, #6b7280)', margin: '0 auto 26px', maxWidth: 460 }}>
                  Thank you. You&apos;ll receive a confirmation email from Calendly with your appointment details. We look forward to seeing you again.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center font-bold text-white bg-teal-600 hover:bg-teal-700 transition-colors"
                  style={{ fontSize: 16, borderRadius: 12, padding: '14px 28px', gap: 9, textDecoration: 'none' }}
                >
                  Back to home
                </Link>
              </div>
            ) : (
              <>
                {/* Progress bar */}
                <div style={{ padding: '28px 40px 0' }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
                    <span className="font-display font-bold text-teal-900" style={{ fontSize: 18 }}>
                      {STEP_LABELS[step]}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-subtle, #9ca3af)' }}>{pct}%</span>
                  </div>
                  <div style={{ height: 5, borderRadius: 999, background: 'var(--gray-100, #f3f4f6)', overflow: 'hidden' }}>
                    <div
                      style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg, var(--teal-600, #2c825d), var(--green-500, #22c55e))', transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)' }}
                    />
                  </div>
                </div>

                {/* Step content */}
                <div style={{ padding: '30px 40px 38px' }}>
                  {/* Step 0: Details — no heading per design */}
                  {step === 0 && (
                    <div>
                      {detailsError && (
                        <div className="mb-4 rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
                          {detailsError}
                        </div>
                      )}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                        <div>
                          <label className={labelClass}>First name</label>
                          <input
                            type="text"
                            value={details.firstName}
                            onChange={(e) => setDetails((d) => ({ ...d, firstName: e.target.value }))}
                            placeholder="Jane"
                            className={fieldClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Last name</label>
                          <input
                            type="text"
                            value={details.lastName}
                            onChange={(e) => setDetails((d) => ({ ...d, lastName: e.target.value }))}
                            placeholder="Doe"
                            className={fieldClass}
                          />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <div>
                          <label className={labelClass}>Email</label>
                          <input
                            type="email"
                            value={details.email}
                            onChange={(e) => setDetails((d) => ({ ...d, email: e.target.value }))}
                            placeholder="jane@email.com"
                            className={fieldClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Phone</label>
                          <input
                            type="tel"
                            value={details.phone}
                            onChange={(e) => setDetails((d) => ({ ...d, phone: e.target.value }))}
                            placeholder="(970) 555-0142"
                            className={fieldClass}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 1: Concern chips */}
                  {step === 1 && (
                    <div>
                      {detailsError && (
                        <div className="mb-4 rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
                          {detailsError}
                        </div>
                      )}
                      <label className={labelClass}>What&apos;s bringing you in this time?</label>
                      <div
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 24 }}
                      >
                        {CONCERN_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSelectedConcern(opt)}
                            style={{
                              cursor: 'pointer',
                              border: selectedConcern === opt ? '1.5px solid var(--color-primary, #2c825d)' : '1.5px solid var(--border-strong, #d1d5db)',
                              background: selectedConcern === opt ? 'var(--green-50, #f0fdf4)' : 'var(--white, #fff)',
                              borderRadius: 12,
                              padding: '13px 16px',
                              fontSize: 15,
                              fontWeight: selectedConcern === opt ? 600 : 500,
                              color: selectedConcern === opt ? 'var(--teal-900, #0f2d3c)' : 'var(--text-body, #1f2937)',
                              textAlign: 'center',
                              fontFamily: 'inherit',
                              transition: 'border-color 0.16s, background 0.16s, color 0.16s',
                            }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      <label className={labelClass}>Anything you&apos;d like Dr. Hric to know?</label>
                      <textarea
                        rows={4}
                        value={concernNote}
                        onChange={(e) => setConcernNote(e.target.value)}
                        placeholder="Share how you've been doing since your last visit, or what's changed."
                        className={fieldClass}
                        style={{ resize: 'vertical', minHeight: 110 }}
                      />
                    </div>
                  )}

                  {/* Step 2: Calendly */}
                  {step === 2 && (
                    <div>
                      <h2
                        className="font-display font-extrabold text-teal-900"
                        style={{ fontSize: 22, letterSpacing: '-0.02em', margin: '0 0 4px' }}
                      >
                        Pick a time
                      </h2>
                      <p style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-muted, #6b7280)', margin: '0 0 18px' }}>
                        Choose a slot below to confirm your appointment. Your name and email are already filled in.
                      </p>
                      <iframe
                        src={getCalendlyUrl()}
                        title="Schedule your visit with Calendly"
                        className="w-full"
                        style={{ minHeight: 680, border: 0, borderRadius: 12, background: 'var(--white, #fff)', display: 'block' }}
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Navigation */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 26 }}>
                    <button
                      onClick={handleBack}
                      style={{
                        display: step === 0 ? 'none' : 'inline-flex',
                        fontFamily: 'inherit',
                        fontWeight: 600,
                        fontSize: 15.5,
                        color: 'var(--text-muted, #6b7280)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '14px 8px',
                      }}
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleNext}
                      style={{
                        marginLeft: 'auto',
                        fontFamily: 'inherit',
                        fontWeight: 700,
                        fontSize: 16,
                        color: '#fff',
                        background: 'var(--color-primary, #2c825d)',
                        border: 'none',
                        borderRadius: 12,
                        padding: '15px 30px',
                        cursor: 'pointer',
                        transition: 'background 0.18s',
                      }}
                    >
                      {step === 0 ? 'Continue' : step === 1 ? 'Continue to scheduling' : 'Done'}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          <p style={{ textAlign: 'center', margin: '22px auto 0', fontSize: 13.5, color: 'rgba(255,255,255,0.6)', maxWidth: 560 }}>
            Scheduling powered by Calendly. Need help? Call{' '}
            <a href="tel:+19705550142" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, textDecoration: 'none' }}>(970) 555-0142</a>.
          </p>
        </div>
      </section>
    </>
  );
}
