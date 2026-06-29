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
        className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base text-white bg-green-500 hover:bg-green-600 transition-colors duration-200 shadow-sm"
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
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-[1080px] mx-auto px-10">
        {/* Heading */}
        <div className="text-center mb-14" data-reveal>
          <h2
            className="font-display font-black text-gray-900 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            Would you like to become a Christian?
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">
            Here are three simple steps to get started.
          </p>
        </div>

        {/* Card */}
        <div className="border border-gray-200 rounded-[24px] overflow-hidden shadow-md" data-reveal>
          {/* Stepper rail */}
          <div className="bg-gray-50 border-b border-gray-200 px-8 py-5">
            <div className="flex items-center justify-center gap-0 max-w-sm mx-auto">
              {STEPS.map((s, i) => (
                <div key={s.id} className="flex items-center flex-1 last:flex-none">
                  {/* Node */}
                  <button
                    type="button"
                    onClick={() => { setStep(i); setShowDecision(false); }}
                    className={[
                      'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 border-2',
                      i === step
                        ? 'bg-teal-600 text-white border-teal-600'
                        : i < step
                        ? 'bg-green-500 text-white border-green-500'
                        : 'bg-white text-gray-400 border-gray-200',
                    ].join(' ')}
                  >
                    {i < step ? '✓' : i + 1}
                  </button>
                  <span
                    className={[
                      'text-xs font-semibold ml-2 mr-4',
                      i === step ? 'text-teal-700' : i < step ? 'text-green-700' : 'text-gray-400',
                    ].join(' ')}
                  >
                    {s.label}
                  </span>
                  {/* Line between nodes */}
                  {i < STEPS.length - 1 && (
                    <div
                      className="flex-1 h-0.5 mr-4 rounded-full transition-all duration-500"
                      style={{ background: i < step ? '#2EA84E' : '#E5E7EB' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
            className="min-h-[380px]"
          >
            {/* Left: image */}
            <div className="relative border-r border-gray-100">
              <Image
                src={current.image}
                alt={current.label}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 540px"
              />
              <div className="absolute inset-0 bg-teal-900/20" />
            </div>

            {/* Right: content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="gp-eyebrow text-green-700 mb-3">Step {step + 1} of 3</p>
              <h3 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-5">
                {current.title}
              </h3>
              <div>{current.content}</div>

              {/* Nav */}
              <div className="flex items-center gap-3 mt-8">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => { setStep((s) => s - 1); setShowDecision(false); }}
                    className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 transition-all duration-200"
                  >
                    Back
                  </button>
                )}
                {step < STEPS.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s + 1)}
                    className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-200 shadow-sm"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowDecision(true)}
                    className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors duration-200 shadow-sm"
                  >
                    I&apos;m ready
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Decision form */}
        {showDecision && (
          <div className="mt-10" data-reveal>
            <DecisionForm onBack={() => setShowDecision(false)} />
          </div>
        )}
      </div>
    </section>
  );
}
