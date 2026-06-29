'use client';

import { forwardRef, type InputHTMLAttributes, type ReactNode, type CSSProperties } from 'react';

type InputSize = 'sm' | 'md' | 'lg';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  leftIcon?: ReactNode;
  size?: InputSize;
  containerStyle?: CSSProperties;
}

const sizeStyles: Record<InputSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-5 py-3.5 text-lg',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, leftIcon, size = 'md', containerStyle, className = '', id, ...props }, ref) => {
    const inputId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div style={containerStyle}>
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-900 mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={[
              'w-full rounded-lg border bg-white',
              'shadow-[inset_0_1px_2px_rgba(18,46,66,0.06)]',
              'transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]',
              'focus:outline-none focus:ring-[3px] focus:ring-[color-mix(in_srgb,#235A7C_45%,transparent)] focus:border-teal-600',
              'disabled:opacity-50 disabled:bg-gray-50',
              error ? 'border-[#C0524B] focus:ring-[color-mix(in_srgb,#C0524B_30%,transparent)] focus:border-[#C0524B]' : 'border-gray-200',
              leftIcon ? 'pl-10' : '',
              sizeStyles[size],
              className,
            ].filter(Boolean).join(' ')}
            {...props}
          />
        </div>
        {error ? (
          <p className="mt-1.5 text-sm text-[#C0524B]">{error}</p>
        ) : hint ? (
          <p className="mt-1.5 text-sm text-gray-500">{hint}</p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = 'Input';
