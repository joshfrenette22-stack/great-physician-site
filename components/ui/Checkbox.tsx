'use client';

import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  description?: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, className = '', ...props }, ref) => {
    return (
      <label className={['flex items-start gap-3 cursor-pointer group', className].filter(Boolean).join(' ')}>
        <input
          ref={ref}
          type="checkbox"
          className="mt-0.5 w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-[3px] focus:ring-[color-mix(in_srgb,#235A7C_45%,transparent)] focus:ring-offset-0 transition-colors duration-200"
          {...props}
        />
        <div>
          {label && <span className="text-sm font-medium text-gray-900">{label}</span>}
          {description && <p className="text-sm text-gray-500 mt-0.5">{description}</p>}
        </div>
      </label>
    );
  }
);
Checkbox.displayName = 'Checkbox';
