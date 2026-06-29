'use client';

import { forwardRef, type SelectHTMLAttributes, type ReactNode, type CSSProperties } from 'react';

type SelectSize = 'sm' | 'md' | 'lg';

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  size?: SelectSize;
  options?: (string | { value: string; label: string })[];
  placeholder?: string;
  containerStyle?: CSSProperties;
}

const sizeStyles: Record<SelectSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-5 py-3.5 text-lg',
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, hint, error, size = 'md', options = [], placeholder, containerStyle, className = '', id, ...props }, ref) => {
    const selectId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div style={containerStyle}>
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-gray-900 mb-1.5">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={[
            'w-full rounded-lg border bg-white appearance-none',
            'shadow-[inset_0_1px_2px_rgba(18,46,66,0.06)]',
            'transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]',
            'focus:outline-none focus:ring-[3px] focus:ring-[color-mix(in_srgb,#235A7C_45%,transparent)] focus:border-teal-600',
            'disabled:opacity-50 disabled:bg-gray-50',
            error ? 'border-[#C0524B]' : 'border-gray-200',
            sizeStyles[size],
            className,
          ].filter(Boolean).join(' ')}
          {...props}
        >
          {placeholder && <option value="" disabled hidden>{placeholder}</option>}
          {options.map((opt) => {
            const val = typeof opt === 'string' ? opt : opt.value;
            const lbl = typeof opt === 'string' ? opt : opt.label;
            return <option key={val} value={val}>{lbl}</option>;
          })}
        </select>
        {error ? (
          <p className="mt-1.5 text-sm text-[#C0524B]">{error}</p>
        ) : hint ? (
          <p className="mt-1.5 text-sm text-gray-500">{hint}</p>
        ) : null}
      </div>
    );
  }
);
Select.displayName = 'Select';
