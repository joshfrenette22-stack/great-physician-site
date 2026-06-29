'use client';

import { useState, type FormEvent } from 'react';

export function PrayerRequest() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
    (e.target as HTMLFormElement).reset();
  }

  const fieldClass =
    'w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 text-base focus:outline-none focus:ring-[3px] focus:ring-green-100 focus:border-teal-600 transition-all duration-200 bg-white';

  return (
    <section className="bg-gray-50 border-t border-gray-100 py-24" data-reveal>
      <div className="max-w-[780px] mx-auto px-10 text-center">
        <h2
          className="font-display font-black text-gray-900 tracking-tight leading-tight mb-4"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.625rem)' }}
        >
          Submit a prayer request.
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-10">
          We take prayer seriously. Share what&apos;s on your heart and we&apos;ll pray for you.
        </p>

        <div className="bg-white border border-gray-200 rounded-[22px] shadow-md p-8 text-left">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-4xl mb-4">&#10003;</div>
              <p className="font-semibold text-gray-900 text-lg mb-2">We received your request.</p>
              <p className="text-gray-500 text-base">We will be praying for you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">Name (optional)</label>
                  <input type="text" name="name" placeholder="Your name" className={fieldClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">Email (optional)</label>
                  <input type="email" name="email" placeholder="you@example.com" className={fieldClass} />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-900 mb-1.5">
                  Prayer request <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="request"
                  rows={5}
                  required
                  placeholder="Share what&apos;s on your heart…"
                  className={fieldClass + ' resize-none'}
                />
              </div>
              <label className="flex items-start gap-3 mb-6 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-[3px] focus:ring-green-100"
                />
                <span className="text-sm text-gray-500 leading-relaxed">
                  I understand my prayer request will be kept private and used only for prayer within the Great Physician team.
                </span>
              </label>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center px-6 h-[52px] rounded-[12px] font-semibold tracking-[0.01em] text-base text-white bg-teal-600 border-[1.5px] border-transparent hover:bg-teal-700 disabled:opacity-60 disabled:pointer-events-none transition-all duration-200 shadow-sm"
              >
                {status === 'submitting' ? 'Sending…' : 'Submit prayer request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
