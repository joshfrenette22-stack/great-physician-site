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
  primary: 'bg-teal-600 text-white border-[1.5px] border-transparent hover:bg-teal-700 active:bg-teal-800 shadow-sm',
  accent: 'bg-green-500 text-white border-[1.5px] border-transparent hover:bg-green-600 active:bg-green-700 shadow-sm',
  secondary: 'bg-white text-teal-600 border-[1.5px] border-gray-300 hover:bg-teal-50 active:bg-teal-100 shadow-[0_1px_2px_rgba(18,46,66,0.06)]',
  ghost: 'bg-transparent text-teal-600 border-[1.5px] border-transparent hover:bg-teal-50 active:bg-teal-100',
  danger: 'bg-[#C0524B] text-white border-[1.5px] border-transparent hover:bg-[#a8453f] active:bg-[#8f3a35] shadow-sm',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-[34px] px-3.5 text-sm gap-[7px] rounded-[8px]',
  md: 'h-[42px] px-5 text-base gap-2 rounded-[12px]',
  lg: 'h-[52px] px-7 text-lg gap-2.5 rounded-[12px]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, leftIcon, rightIcon, children, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          'inline-flex items-center justify-center font-semibold tracking-[0.01em] leading-none whitespace-nowrap',
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
