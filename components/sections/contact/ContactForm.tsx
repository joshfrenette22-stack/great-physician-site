'use client';

import { useState, type FormEvent } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    if (!data.get('firstName')) errs.firstName = 'First name is required.';
    if (!data.get('lastName')) errs.lastName = 'Last name is required.';
    const email = String(data.get('email') ?? '');
    if (!email) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email address.';
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('submitting');
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
    form.reset();
  }

  const fieldClass =
    'w-full font-sans text-base text-gray-900 bg-white border border-gray-300 rounded-[12px] px-[15px] py-[13px] outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-teal-600 focus:ring-[3px] focus:ring-green-100';
  const labelClass = 'block text-[13.5px] font-semibold text-teal-800 mb-[7px]';

  return (
    <div className="bg-white border border-gray-200 rounded-[22px] shadow-md" style={{ padding: 40 }}>
      <h2 className="font-display font-extrabold text-teal-900" style={{ fontSize: 28, letterSpacing: '-0.02em', margin: '0 0 6px' }}>
        Schedule a visit
      </h2>
      <p className="text-gray-500 leading-relaxed" style={{ margin: '0 0 28px', fontSize: 15.5 }}>
        No obligation. We&apos;ll reach out within one business day to find a time.
      </p>

      {status === 'success' ? (
        <div className="rounded-xl bg-green-50 border border-green-100 px-6 py-5 text-green-800 text-base">
          <p className="font-semibold mb-1">Message received.</p>
          <p className="text-sm text-green-700">
            We&apos;ll be in touch within one business day to find a time that works.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {/* Row 1: First / Last */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] mb-[18px]">
            <div>
              <label htmlFor="firstName" className={labelClass}>First name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                autoComplete="given-name"
                placeholder="Jane"
                aria-required="true"
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                className={fieldClass}
              />
              {errors.firstName && (
                <p id="firstName-error" className="mt-1 text-sm text-red-600" role="alert">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className={labelClass}>Last name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                autoComplete="family-name"
                placeholder="Doe"
                aria-required="true"
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                className={fieldClass}
              />
              {errors.lastName && (
                <p id="lastName-error" className="mt-1 text-sm text-red-600" role="alert">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Row 2: Email / Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] mb-[18px]">
            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="jane@email.com"
                aria-required="true"
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={fieldClass}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="(970) 555-0142"
                className={fieldClass}
              />
            </div>
          </div>

          {/* Area */}
          <div className="mb-[18px]">
            <label htmlFor="area" className={labelClass}>
              What area is bothering you?
            </label>
            <select
              id="area"
              name="area"
              defaultValue=""
              className={fieldClass + ' appearance-none'}
            >
              <option value="back-spine">Back or spine</option>
              <option value="shoulder">Shoulder</option>
              <option value="knee-hip">Knee or hip</option>
              <option value="other-joint">Other joint or tendon</option>
              <option value="not-sure">Not sure yet</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-[18px]">
            <label htmlFor="message" className={labelClass}>
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us a little about what you're experiencing and what you're hoping to get back to."
              className={fieldClass + ' resize-y'}
              style={{ minHeight: 110 }}
            />
          </div>

          {/* Consent */}
          <label className="flex items-start gap-[11px] mb-[26px] cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              className="mt-[3px] w-[17px] h-[17px] accent-teal-600"
            />
            <span className="text-[13.5px] text-gray-500 leading-relaxed">
              I understand this form is a request for a consultation and not a substitute for emergency care.
            </span>
          </label>

          {status === 'error' && (
            <div className="mb-4 rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
              Something went wrong. Please try again or call us directly.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full inline-flex items-center justify-center px-6 h-[52px] rounded-[12px] font-bold tracking-[0.01em] text-base text-white bg-teal-600 border-[1.5px] border-transparent hover:bg-teal-700 active:bg-teal-800 disabled:opacity-60 disabled:pointer-events-none transition-all duration-200"
          >
            {status === 'submitting' ? 'Sending…' : 'Send request'}
          </button>
        </form>
      )}
    </div>
  );
}
