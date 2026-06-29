'use client';

import { useState } from 'react';
import { faqGroups } from '@/lib/data/faq';

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 transition-transform duration-300"
      style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
    >
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  );
}

export function FaqAccordion() {
  // Track open item by "groupId:index"
  const [openKey, setOpenKey] = useState<string | null>('getting-started:0');

  function toggle(key: string) {
    setOpenKey((k) => (k === key ? null : key));
  }

  return (
    <div>
      {faqGroups.map((group, gi) => (
        <div
          key={group.id}
          id={group.id}
          style={{ marginTop: gi === 0 ? 0 : 56, scrollMarginTop: 100 }}
        >
          <h2
            className="font-display font-black text-teal-900 tracking-tight"
            style={{ fontSize: 30, letterSpacing: '-0.02em', margin: '0 0 6px' }}
          >
            {group.title}
          </h2>
          <div>
            {group.items.map((item, idx) => {
              const key = `${group.id}:${idx}`;
              const isOpen = openKey === key;
              return (
                <div key={key} style={{ borderBottom: '1px solid var(--border-default, #e5e7eb)' }}>
                  <button
                    type="button"
                    id={`faq-btn-${key}`}
                    onClick={() => toggle(key)}
                    className="w-full text-left bg-none border-none cursor-pointer relative block"
                    style={{ padding: '24px 48px 24px 0' }}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${key}`}
                  >
                    <span
                      className="block font-display font-bold leading-snug transition-colors duration-200"
                      style={{
                        fontSize: 19,
                        lineHeight: 1.35,
                        color: isOpen ? 'var(--color-primary, #2c825d)' : 'var(--teal-900, #0f2d3c)',
                      }}
                    >
                      {item.question}
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        right: 6,
                        top: 26,
                        width: 24,
                        height: 24,
                        color: isOpen ? 'var(--color-primary, #2c825d)' : '#9ca3af',
                        pointerEvents: 'none',
                      }}
                    >
                      <PlusIcon open={isOpen} />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${key}`}
                    role="region"
                    aria-labelledby={`faq-btn-${key}`}
                    className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p
                      className="text-gray-500"
                      style={{ margin: 0, padding: '0 60px 26px 0', fontSize: 16.5, lineHeight: 1.62 }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
