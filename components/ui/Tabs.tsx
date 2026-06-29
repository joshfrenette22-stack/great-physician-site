'use client';

import { useState, type HTMLAttributes, type ReactNode } from 'react';

interface TabItem {
  value: string;
  label: ReactNode;
  icon?: ReactNode;
  count?: number;
}

interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: (string | TabItem)[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

function normalizeItem(item: string | TabItem): TabItem {
  return typeof item === 'string' ? { value: item, label: item } : item;
}

export function Tabs({ items, value, defaultValue, onChange, className = '', ...props }: TabsProps) {
  const normalized = items.map(normalizeItem);
  const [internalValue, setInternalValue] = useState(defaultValue || normalized[0]?.value || '');
  const activeValue = value ?? internalValue;

  function handleClick(val: string) {
    if (value === undefined) setInternalValue(val);
    onChange?.(val);
  }

  return (
    <div className={['flex gap-1 border-b border-gray-200', className].filter(Boolean).join(' ')} role="tablist" {...props}>
      {normalized.map((tab) => {
        const isActive = tab.value === activeValue;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => handleClick(tab.value)}
            className={[
              'relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200',
              isActive ? 'text-teal-600' : 'text-gray-500 hover:text-gray-700',
            ].join(' ')}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
            {tab.count !== undefined && (
              <span className={['text-xs px-1.5 py-0.5 rounded-full', isActive ? 'bg-teal-50 text-teal-600' : 'bg-gray-100 text-gray-500'].join(' ')}>
                {tab.count}
              </span>
            )}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-800 via-teal-600 to-green-500 rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
