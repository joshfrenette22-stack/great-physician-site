'use client';

import { useState } from 'react';
import Link from 'next/link';

const HEALTHIE_FORM_IDS = [3137293, 3137297, 3137299, 3137291];
const TOTAL_STEPS = 5; // step 0 = details, steps 1-4 = healthie forms

const STEP_LABELS = [
  'Step 1 of 5 · Your details',
  'Step 2 of 5 · Intake form 1 of 4',
  'Step 3 of 5 · Intake form 2 of 4',
  'Step 4 of 5 · Intake form 3 of 4',
  'Step 5 of 5 · Intake form 4 of 4',
];

const INTAKE_LABELS = [
  'Intake form · 1 of 4',
  'Intake form · 2 of 4',
  'Intake form · 3 of 4',
  'Intake form · 4 of 4',
];

interface PatientDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const fieldClass = 'w-full font-sans text-base text-gray-900 bg-white border border-gray-300 rounded-[12px] px-[15px] py-[13px] outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-teal-600 focus:ring-[3px] focus:ring-green-100';
const labelClass = 'block text-[13.5px] font-semibold text-teal-800 mb-[7px]';

export default function ScheduleNewPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [details, setDetails] = useState<PatientDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [detailsError, setDetailsError] = useState('');

  const pct = Math.round(((step + 1) / TOTAL_STEPS) * 100);

  function validateDetails() {
    if (!details.firstName.trim()) return 'Please fill in your name, email, and phone.';
    if (!details.lastName.trim()) return 'Please fill in your name, email, and phone.';
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
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      setDone(true);
    }
  }

  function handleBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  // Build Healthie iframe src for current step (1-4)
  function getIframeSrc(formId: number) {
    const params = new URLSearchParams();
    if (details.firstName) params.set('first_name', details.firstName);
    if (details.lastName) params.set('last_name', details.lastName);
    if (details.firstName || details.lastName) params.set('name', `${details.firstName} ${details.lastName}`.trim());
    if (details.email) params.set('email', details.email);
    if (details.phone) params.set('phone_number', details.phone);
    const qs = params.toString() ? '&' + params.toString() : '';
    return `https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=16276043&embed_form_id=${formId}&form_only=true&primary_color=4A9625${qs}`;
  }

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', background: 'var(--teal-900, #0f2d3c)' }}>
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=70&auto=format&fit=crop"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.14 }}
        />
        <div
          style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,46,66,0.5), var(--teal-900, #0f2d3c))' }}
        />
        <div
          className="relative max-w-[900px] mx-auto text-center text-white"
          style={{ padding: '64px 40px 40px' }}
        >
          <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--green-300, #86efac)', marginBottom: 16 }}>
            New patient booking
          </p>
          <h1
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: 52, lineHeight: 1.04, letterSpacing: '-0.035em', margin: 0 }}
          >
            Let&apos;s get you set up
          </h1>
          <p style={{ margin: '18px 0 0', fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.85)' }}>
            A few quick details, then four short intake forms. It takes about 10 minutes, and you can do it at your own pace.
          </p>
        </div>
      </section>

      {/* Flow card — same teal-900 section continues */}
      <section style={{ background: 'var(--teal-900, #0f2d3c)' }}>
        <div className="max-w-[900px] mx-auto" style={{ padding: '0 40px 80px' }}>
          <div className="bg-white rounded-[24px] overflow-hidden" style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.3)' }}>
            {done ? (
              /* Success */
              <div style={{ textAlign: 'center', padding: '28px 40px 14px' }}>
                <div
                  style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--green-50, #f0fdf4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary, #2c825d)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="font-display font-black text-teal-900"
                  style={{ fontSize: 28, letterSpacing: '-0.02em', margin: '0 0 12px' }}
                >
                  You&apos;re all set
                </h3>
                <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--text-muted, #6b7280)', margin: '0 auto 26px', maxWidth: 460 }}>
                  Thank you for completing your new patient intake. Our team will review your information and reach out within one business day to confirm your visit.
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
                <div style={{ padding: '28px 36px 0' }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
                    <span
                      className="font-display font-bold text-teal-900"
                      style={{ fontSize: 18 }}
                    >
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
                <div style={{ padding: '28px 36px 34px' }}>
                  {step === 0 && (
                    <div>
                      <h2
                        className="font-display font-black text-teal-900"
                        style={{ fontSize: 24, letterSpacing: '-0.02em', margin: '0 0 6px' }}
                      >
                        Your details
                      </h2>
                      <p style={{ fontSize: 15.5, lineHeight: 1.55, color: 'var(--text-muted, #6b7280)', margin: '0 0 24px' }}>
                        So we know who&apos;s getting started. We&apos;ll use this to follow up with you.
                      </p>
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
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
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
                      <label
                        style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginTop: 14, cursor: 'pointer', padding: '16px 18px', border: '1px solid var(--border-default, #e5e7eb)', borderRadius: 12, background: 'var(--gray-50, #f9fafb)' }}
                      >
                        <input
                          type="checkbox"
                          style={{ marginTop: 2, width: 18, height: 18, accentColor: 'var(--color-primary, #2c825d)', flexShrink: 0 }}
                        />
                        <span style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-body, #1f2937)' }}>
                          I have read and agree to the{' '}
                          <Link href="/privacy" style={{ color: 'var(--color-primary, #2c825d)', fontWeight: 600, textDecoration: 'none' }}>
                            Privacy Policy
                          </Link>{' '}
                          and{' '}
                          <Link href="/terms" style={{ color: 'var(--color-primary, #2c825d)', fontWeight: 600, textDecoration: 'none' }}>
                            Terms &amp; Conditions
                          </Link>.
                        </span>
                      </label>
                    </div>
                  )}

                  {step >= 1 && step <= 4 && (
                    <div>
                      <h2
                        className="font-display font-black text-teal-900"
                        style={{ fontSize: 22, letterSpacing: '-0.02em', margin: '0 0 4px' }}
                      >
                        {INTAKE_LABELS[step - 1]}
                      </h2>
                      <p style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-muted, #6b7280)', margin: '0 0 18px' }}>
                        {step === 4
                          ? 'Complete the final form below, then click Finish.'
                          : 'Complete the form below, then click Continue.'}
                      </p>
                      <iframe
                        src={getIframeSrc(HEALTHIE_FORM_IDS[step - 1])}
                        title={`New patient intake form ${step}`}
                        className="w-full"
                        style={{ minHeight: 760, border: 0, borderRadius: 14, background: 'var(--gray-50, #f9fafb)', display: 'block' }}
                        loading="lazy"
                      />
                      <p style={{ margin: '10px 2px 0', fontSize: 12.5, color: 'var(--text-subtle, #9ca3af)' }}>
                        Booking provided by <a href="https://gethealthie.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted, #6b7280)' }}>Healthie</a>
                      </p>
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
                      {step === 0 ? 'Continue to forms' : step === TOTAL_STEPS - 1 ? 'Finish' : 'Continue'}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          <p style={{ textAlign: 'center', margin: '22px auto 0', fontSize: 13.5, color: 'rgba(255,255,255,0.6)', maxWidth: 560 }}>
            Your information is submitted securely to Healthie, our HIPAA-compliant intake platform. Need help? Call{' '}
            <a href="tel:+19705550142" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, textDecoration: 'none' }}>(970) 555-0142</a>.
          </p>
        </div>
      </section>
    </>
  );
}
