'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 shadow-sm',
  accent: 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700 shadow-sm',
  secondary: 'bg-white text-teal-600 border border-gray-200 hover:bg-gray-50 active:bg-gray-100',
  ghost: 'bg-transparent text-teal-600 hover:bg-gray-50 active:bg-gray-100',
  danger: 'bg-[#C0524B] text-white hover:bg-[#a8453f] active:bg-[#8f3a35] shadow-sm',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-base gap-2',
  lg: 'px-7 py-3.5 text-lg gap-2.5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, leftIcon, rightIcon, children, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          'inline-flex items-center justify-center font-medium rounded-lg',
          'transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]',
          'focus-visible:outline-[3px] focus-visible:outline-[color-mix(in_srgb,#235A7C_45%,transparent)] focus-visible:outline-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth ? 'w-full' : '',
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';
