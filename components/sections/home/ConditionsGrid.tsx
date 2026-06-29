import Link from 'next/link';
import { Clock, Zap, Heart, Droplet, AlignJustify, HeartPulse } from 'lucide-react';
import { conditions } from '@/lib/data/conditions';

const icons = [Clock, Zap, Heart, Droplet, AlignJustify, HeartPulse];

export function ConditionsGrid() {
  return (
    <section
      className="w-full mt-16"
      style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}
      id="conditions"
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-10" style={{ padding: '88px 40px' }}>
        {/* Heading */}
        <div className="max-w-[760px] mb-11">
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] mb-[14px]" style={{ color: 'var(--color-accent-strong)' }}>What we help with</span>
          <h2
            className="text-[32px] md:text-[42px] font-extrabold mb-[14px]"
            style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}
          >
            Most patients come to us with pain they&apos;ve been told only surgery can fix.
          </h2>
          <p className="text-lg leading-[1.55] m-0" style={{ color: 'var(--text-muted)' }}>
            Often, that&apos;s not the whole story. For each condition we start with the most conservative approach that can work, and tell you honestly when surgery really is the right call.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {conditions.map((condition, i) => {
            const Icon = icons[i] ?? Clock;
            return (
              <div
                key={condition.id}
                className="flex flex-col gap-3 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-md cursor-default shadow-xs"
                style={{ background: 'var(--white)', border: '1px solid var(--border-default)', borderRadius: '16px', padding: '24px' }}
              >
                {/* Icon chip */}
                <span className="inline-flex items-center justify-center" style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--teal-50)' }}>
                  <Icon className="w-[22px] h-[22px]" style={{ color: 'var(--color-primary)' }} />
                </span>
                <h4 className="text-lg font-bold mt-1 mb-0" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-strong)' }}>{condition.name}</h4>
                <p className="text-[15px] leading-[1.55] m-0" style={{ color: 'var(--text-muted)' }}>{condition.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-7 h-[52px] text-lg font-semibold tracking-[0.01em] rounded-[12px] bg-teal-600 text-white border-[1.5px] border-transparent hover:bg-teal-700 active:bg-teal-800 shadow-sm transition-all duration-200"
          >
            Explore conditions we treat
          </Link>
        </div>
      </div>
    </section>
  );
}
