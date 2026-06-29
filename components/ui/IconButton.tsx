'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

type IconButtonVariant = 'primary' | 'secondary' | 'ghost';
type IconButtonSize = 'sm' | 'md' | 'lg';

interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  label: string;
  children?: ReactNode;
}

const variantStyles: Record<IconButtonVariant, string> = {
  primary: 'bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800',
  secondary: 'bg-white text-teal-600 border border-gray-200 hover:bg-gray-50',
  ghost: 'bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700',
};

const sizeMap: Record<IconButtonSize, string> = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = 'ghost', size = 'md', label, children, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-label={label}
        title={label}
        className={[
          'inline-flex items-center justify-center rounded-lg',
          'transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]',
          'focus-visible:outline-[3px] focus-visible:outline-[color-mix(in_srgb,#235A7C_45%,transparent)] focus-visible:outline-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          variantStyles[variant],
          sizeMap[size],
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
      </button>
    );
  }
);
IconButton.displayName = 'IconButton';
