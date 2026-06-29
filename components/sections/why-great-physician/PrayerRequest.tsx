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
    'w-full font-sans text-base text-gray-900 bg-white border border-gray-300 rounded-[12px] px-[15px] py-[13px] outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-teal-600 focus:ring-[3px] focus:ring-green-100';
  const labelClass = 'block text-[13.5px] font-semibold text-teal-800 mb-[7px]';

  return (
    <section className="bg-gray-50 border-t border-gray-200" data-reveal>
      <div className="max-w-[980px] mx-auto" style={{ padding: '92px 40px' }}>
        <div className="text-center max-w-[680px] mx-auto mb-10" data-reveal>
          <p
            className="font-semibold uppercase text-teal-600 mb-[14px]"
            style={{ fontSize: 13, letterSpacing: '0.16em' }}
          >
            How can we pray for you?
          </p>
          <h2
            className="font-display font-extrabold text-teal-900 leading-tight"
            style={{ fontSize: 42, lineHeight: 1.07, letterSpacing: '-0.03em', margin: '0 0 16px' }}
          >
            Submit a prayer request
          </h2>
          <p className="text-gray-700" style={{ fontSize: 18, lineHeight: 1.6, margin: 0 }}>
            Whatever you are facing, our team would be honored to pray for you. Share as much or as little as you&apos;d like.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-[22px] shadow-md mx-auto text-left" style={{ maxWidth: 720, padding: 40 }} data-reveal>
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="text-green-600 text-4xl mb-4">&#10003;</div>
              <p className="font-semibold text-gray-900 text-lg mb-2">We received your request.</p>
              <p className="text-gray-500 text-base">We will be praying for you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[18px]">
                <div>
                  <label className={labelClass}>
                    Name <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input type="text" name="name" placeholder="Your name" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>
                    Email <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input type="email" name="email" placeholder="you@email.com" className={fieldClass} />
                </div>
              </div>
              <div className="mb-5">
                <label className={labelClass}>Your prayer request</label>
                <textarea
                  name="request"
                  rows={5}
                  required
                  placeholder="Share what's on your heart. We will pray over it."
                  className={fieldClass + ' resize-y'}
                  style={{ minHeight: 130 }}
                />
              </div>
              <label className="flex items-start gap-[11px] mb-6 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-[3px] w-[17px] h-[17px] accent-teal-600"
                />
                <span className="text-[13.5px] text-gray-500 leading-relaxed">
                  Keep my request private to the prayer team.
                </span>
              </label>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center h-[52px] rounded-[12px] font-bold text-base text-white bg-teal-600 border-none hover:bg-teal-700 disabled:opacity-60 disabled:pointer-events-none transition-all duration-200"
                style={{ padding: 16 }}
              >
                {status === 'submitting' ? 'Sending…' : 'Send prayer request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
