'use client';

import { useState } from 'react';
import Image from 'next/image';

const STEPS = [
  {
    id: 'pray',
    label: 'Pray',
    title: 'Pray the sinner\u2019s prayer',
    image: '/images/stock/photo-1499209974431-9dddcece7f88.jpg',
    content: (
      <div>
        <p className="text-gray-600 text-base leading-relaxed mb-5">
          Becoming a Christian begins with a simple, honest prayer. There&apos;s no magic formula — God hears the heart. The prayer below is one way to put it into words.
        </p>
        <blockquote className="bg-green-50 border border-green-100 rounded-[16px] px-6 py-5 text-gray-700 text-base leading-relaxed italic">
          &ldquo;Lord Jesus, I know I am a sinner. I believe you died for my sins and rose from the dead. I turn from my sins and invite you into my heart and life. I want to trust and follow you as my Lord and Savior. Amen.&rdquo;
        </blockquote>
        <p className="mt-4 text-gray-500 text-sm">
          If you prayed that prayer sincerely, welcome. Something real just happened.
        </p>
      </div>
    ),
  },
  {
    id: 'read',
    label: 'Read',
    title: 'Get a Bible',
    image: '/images/stock/photo-1502904550040-7534597429ae.jpg',
    content: (
      <div>
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          The best place to start is the Gospel of John — the fourth book of the New Testament. It&apos;s a direct account of Jesus&apos; life, words, and resurrection.
        </p>
        <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside mb-4">
          <li>The Bible app (YouVersion) is free on any phone</li>
          <li>A print Bible from any bookstore works great too</li>
          <li>Start at John 1:1 and read a chapter a day</li>
        </ul>
        <p className="text-gray-500 text-sm">
          Don&apos;t worry about understanding everything right away. Read, ask questions, and keep going.
        </p>
      </div>
    ),
  },
  {
    id: 'belong',
    label: 'Belong',
    title: 'Find a local church',
    image: '/images/stock/photo-1511632765486-a01980e01a18.jpg',
    content: (
      <div>
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          Christianity is meant to be lived in community. A local church gives you people to walk with, learn from, and be encouraged by.
        </p>
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          Look for a church that takes the Bible seriously and welcomes people genuinely. Don&apos;t let the search be a reason to wait — any Bible-teaching church is a good place to start.
        </p>
        <p className="text-gray-500 text-sm">
          If you&apos;re in Northern Colorado and would like a recommendation, reach out and we&apos;d be happy to point you in a direction.
        </p>
      </div>
    ),
  },
];

interface DecisionFormProps {
  onBack: () => void;
}

function DecisionForm({ onBack }: DecisionFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[18px] bg-green-50 border border-green-100 px-8 py-8 text-center">
        <p className="text-2xl mb-2">&#10003;</p>
        <p className="font-semibold text-gray-900 text-lg mb-2">We&apos;re so glad.</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          We received your response. If you included your email, we&apos;ll be in touch with some resources to help you take your next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[18px] border border-gray-200 bg-white px-8 py-8 shadow-sm"
    >
      <h3 className="font-display font-bold text-gray-900 text-xl tracking-tight mb-1">
        Did you pray that prayer today?
      </h3>
      <p className="text-gray-500 text-sm mb-5 leading-relaxed">
        We&apos;d love to celebrate with you and send you some helpful next steps. Name and email are optional.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1.5">Name (optional)</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-[3px] focus:ring-green-100 focus:border-teal-600 transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1.5">Email (optional)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-[3px] focus:ring-green-100 focus:border-teal-600 transition-all duration-200"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center px-6 h-[42px] rounded-[12px] font-semibold tracking-[0.01em] text-base text-teal-900 bg-green-500 border-[1.5px] border-transparent hover:bg-green-600 transition-colors duration-200 shadow-sm"
      >
        Yes, I prayed that prayer
      </button>
    </form>
  );
}

export function BecomingChristian() {
  const [step, setStep] = useState(0);
  const [showDecision, setShowDecision] = useState(false);
  const current = STEPS[step];

  return (
    <section className="bg-white">
      <div className="max-w-[1100px] mx-auto" style={{ padding: '96px 40px 40px' }}>
        {/* Heading */}
        <div className="text-center mx-auto mb-[52px] max-w-[720px]" data-reveal>
          <p
            className="font-semibold uppercase text-teal-600 mb-[14px]"
            style={{ fontSize: 13, letterSpacing: '0.16em' }}
          >
            Your first steps
          </p>
          <h2
            className="font-display font-black text-teal-900 leading-tight"
            style={{ fontSize: 44, lineHeight: 1.06, letterSpacing: '-0.03em', margin: '0 0 16px' }}
          >
            Would you like to become a Christian?
          </h2>
          <p className="text-gray-700 mx-auto" style={{ fontSize: 18, lineHeight: 1.62, margin: 0 }}>
            If your heart is stirring, you can respond today. Here are three simple steps to begin a life with Jesus.
          </p>
        </div>

        {/* Card */}
        <div
          className="border border-gray-200 overflow-hidden"
          style={{ borderRadius: 26, boxShadow: '0 2px 4px rgba(22,56,76,0.04), 0 18px 50px rgba(22,56,76,0.07)' }}
          data-reveal
        >
          {/* Stepper rail */}
          <div className="border-b border-gray-200" style={{ padding: '32px 40px 28px' }}>
            <div className="relative grid max-w-[600px] mx-auto" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {STEPS.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => { setStep(i); setShowDecision(false); }}
                  className="relative z-[2] flex flex-col items-center gap-[10px] bg-transparent border-none cursor-pointer"
                  style={{ fontFamily: 'inherit', padding: 0 }}
                >
                  <span
                    className="flex items-center justify-center font-display font-black transition-all duration-300"
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: '50%',
                      fontSize: 18,
                      background: i <= step ? 'var(--green-600, #2c825d)' : 'var(--white, #fff)',
                      color: i <= step ? '#fff' : '#9ca3af',
                      border: `2px solid ${i <= step ? 'var(--green-600, #2c825d)' : '#d1d5db'}`,
                      boxShadow: i === step ? '0 0 0 6px var(--green-100, #d1fae5)' : 'none',
                      transform: i === step ? 'scale(1.08)' : 'scale(1)',
                    }}
                  >
                    {i < step ? '✓' : i + 1}
                  </span>
                  <span
                    className="font-semibold"
                    style={{
                      fontSize: 13.5,
                      color: i <= step ? '#0f2d3c' : '#9ca3af',
                    }}
                  >
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div
            style={{ display: 'grid', gridTemplateColumns: '0.82fr 1fr', minHeight: 460 }}
          >
            {/* Left: image */}
            <div className="relative overflow-hidden bg-teal-900">
              <Image
                src={current.image}
                alt={current.label}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 540px"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(165deg, rgba(18,46,66,0.32) 0%, rgba(18,46,66,0.05) 45%, rgba(18,46,66,0.42) 100%)' }}
              />
              <span
                className="absolute font-display font-black text-white/92"
                style={{ left: 30, bottom: 22, fontSize: 84, lineHeight: 1, textShadow: '0 6px 24px rgba(0,0,0,0.3)' }}
              >
                0{step + 1}
              </span>
            </div>

            {/* Right: content */}
            <div className="flex flex-col" style={{ padding: '44px 46px' }}>
              <div className="relative flex-1" style={{ minHeight: 320 }}>
                <div className="flex flex-col gap-[14px]">
                  <span
                    className="font-bold uppercase text-teal-600"
                    style={{ fontSize: 12.5, letterSpacing: '0.16em' }}
                  >
                    Step {step + 1} of 3
                  </span>
                  <h3
                    className="font-display font-black text-teal-900 leading-tight"
                    style={{ fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}
                  >
                    {current.title}
                  </h3>
                  <div>{current.content}</div>
                </div>
              </div>

              {/* Nav */}
              <div
                className="flex items-center justify-between gap-4 mt-6 pt-6"
                style={{ borderTop: '1px solid var(--border-subtle, #f3f4f6)' }}
              >
                <button
                  type="button"
                  onClick={() => { setStep((s) => s - 1); setShowDecision(false); }}
                  className="font-semibold text-gray-500 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-teal-900"
                  style={{
                    visibility: step === 0 ? 'hidden' : 'visible',
                    fontFamily: 'inherit',
                    fontSize: 15,
                    padding: '10px 4px',
                  }}
                >
                  ← Back
                </button>
                {step < STEPS.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s + 1)}
                    className="text-white bg-teal-600 border-none cursor-pointer font-bold rounded-[12px] transition-all duration-200 hover:bg-teal-700"
                    style={{ fontFamily: 'inherit', fontSize: 15.5, padding: '14px 30px' }}
                  >
                    Next step →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowDecision(true)}
                    className="text-white bg-teal-600 border-none cursor-pointer font-bold rounded-[12px] transition-all duration-200 hover:bg-teal-700"
                    style={{ fontFamily: 'inherit', fontSize: 15.5, padding: '14px 30px' }}
                  >
                    Respond below ↓
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Decision form */}
        <div
          id="gp-decision-card"
          className="mx-auto mt-10 bg-white border border-gray-200 rounded-[22px] shadow-md"
          style={{ maxWidth: 720, padding: 40 }}
          data-reveal
        >
          <h3
            className="font-display font-black text-teal-900 text-center"
            style={{ fontSize: 26, letterSpacing: '-0.02em', margin: '0 0 8px' }}
          >
            Did you pray that prayer today?
          </h3>
          <p className="text-gray-500 text-center mb-[26px]" style={{ fontSize: 16, lineHeight: 1.55, margin: '0 0 26px' }}>
            Let us know so we can celebrate with you, pray for you, and help you take your next step.
          </p>
          <DecisionForm onBack={() => setShowDecision(false)} />
        </div>
      </div>
    </section>
  );
}
