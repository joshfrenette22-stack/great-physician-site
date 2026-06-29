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
    'w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 text-base focus:outline-none focus:ring-[3px] focus:ring-green-100 focus:border-teal-600 transition-all duration-200 bg-white';

  return (
    <div className="bg-white border border-gray-200 rounded-[22px] shadow-md p-6 md:p-10">
      <h2 className="font-display font-bold text-gray-900 text-[28px] tracking-tight mb-2">
        Schedule a visit
      </h2>
      <p className="text-gray-500 text-base mb-8 leading-relaxed">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-1.5">
                First name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
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
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-1.5">
                Last name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                autoComplete="family-name"
                placeholder="Smith"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1.5">
                Email <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="jane@example.com"
                aria-required="true"
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={fieldClass}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1.5">Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="(970) 555-0100"
                className={fieldClass}
              />
            </div>
          </div>

          {/* Area */}
          <div className="mb-4">
            <label htmlFor="area" className="block text-sm font-medium text-gray-900 mb-1.5">
              What area is bothering you?
            </label>
            <select
              id="area"
              name="area"
              defaultValue=""
              className={fieldClass + ' appearance-none'}
            >
              <option value="" disabled>Select an area…</option>
              <option value="back-spine">Back or spine</option>
              <option value="shoulder">Shoulder</option>
              <option value="knee-hip">Knee or hip</option>
              <option value="other-joint">Other joint or tendon</option>
              <option value="not-sure">Not sure yet</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-5">
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1.5">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us a little about what's going on…"
              className={fieldClass + ' resize-none'}
            />
          </div>

          {/* Consent */}
          <label className="flex items-start gap-3 mb-6 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              className="mt-0.5 w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-[3px] focus:ring-green-100 transition-colors duration-200"
            />
            <span className="text-sm text-gray-500 leading-relaxed">
              I understand this form is for scheduling inquiries only and does not create a patient-provider relationship. For medical emergencies call 911.
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
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold text-base text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 disabled:opacity-60 disabled:pointer-events-none transition-all duration-200 shadow-sm"
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      )}
    </div>
  );
}
