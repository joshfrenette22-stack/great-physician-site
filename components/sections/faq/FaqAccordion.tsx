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
          style={{ marginTop: gi === 0 ? 0 : 56 }}
        >
          <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-5">
            {group.title}
          </h2>
          <div className="border border-gray-200 rounded-[18px] overflow-hidden divide-y divide-gray-100">
            {group.items.map((item, idx) => {
              const key = `${group.id}:${idx}`;
              const isOpen = openKey === key;
              return (
                <div key={key}>
                  <button
                    type="button"
                    onClick={() => toggle(key)}
                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-gray-900 text-base leading-snug">
                      {item.question}
                    </span>
                    <span className="text-teal-600 mt-0.5">
                      <PlusIcon open={isOpen} />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      maxHeight: isOpen ? '400px' : '0px',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="px-6 pb-5 text-gray-600 text-base leading-relaxed">
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
