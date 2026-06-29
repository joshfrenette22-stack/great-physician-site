import type { HTMLAttributes, ReactNode } from 'react';

type BadgeVariant = 'neutral' | 'teal' | 'green' | 'success' | 'info' | 'warning' | 'danger';
type BadgeSize = 'sm' | 'md';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  children?: ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  neutral: 'bg-gray-100 text-gray-700',
  teal: 'bg-teal-50 text-teal-700',
  green: 'bg-green-50 text-green-800',
  success: 'bg-[#DCF2E1] text-[#1C7A39]',
  info: 'bg-[#DCE8EF] text-[#235A7C]',
  warning: 'bg-[#FBF1E2] text-[#C9883B]',
  danger: 'bg-[#FBE9E7] text-[#C0524B]',
};

const dotColors: Record<BadgeVariant, string> = {
  neutral: 'bg-gray-400',
  teal: 'bg-teal-600',
  green: 'bg-green-500',
  success: 'bg-[#1C7A39]',
  info: 'bg-[#235A7C]',
  warning: 'bg-[#C9883B]',
  danger: 'bg-[#C0524B]',
};

export function Badge({ variant = 'neutral', size = 'md', dot = false, children, className = '', ...props }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 font-semibold tracking-[0.01em] rounded-full',
        size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-3 py-1 text-xs',
        variantStyles[variant],
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />}
      {children}
    </span>
  );
}
