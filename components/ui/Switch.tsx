'use client';

import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';

type SwitchSize = 'sm' | 'md';

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: ReactNode;
  size?: SwitchSize;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, size = 'md', className = '', checked, defaultChecked, onChange, ...props }, ref) => {
    const isSm = size === 'sm';
    const trackSize = isSm ? 'w-8 h-5' : 'w-11 h-6';
    const thumbSize = isSm ? 'w-3.5 h-3.5' : 'w-[18px] h-[18px]';
    const thumbTranslate = isSm ? 14 : 20;

    return (
      <label className={['inline-flex items-center gap-3 cursor-pointer', className].filter(Boolean).join(' ')}>
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className="sr-only peer"
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            {...props}
          />
          <div className={[trackSize, 'rounded-full bg-gray-200 peer-checked:bg-green-500 transition-colors duration-200 peer-focus-visible:ring-[3px] peer-focus-visible:ring-[color-mix(in_srgb,#235A7C_45%,transparent)]'].join(' ')} />
          <div
            className={['absolute top-0.5 left-0.5', thumbSize, 'bg-white rounded-full shadow-sm transition-transform duration-200 peer-checked:[transform:translateX(var(--switch-translate))]'].join(' ')}
            style={{ '--switch-translate': `${thumbTranslate}px` } as React.CSSProperties}
          />
        </div>
        {label && <span className="text-sm font-medium text-gray-900">{label}</span>}
      </label>
    );
  }
);
Switch.displayName = 'Switch';
