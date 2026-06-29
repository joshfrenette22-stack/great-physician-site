import type { HTMLAttributes, ReactNode } from 'react';

type CardElevation = 'none' | 'xs' | 'sm' | 'md' | 'lg';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: CardElevation;
  padding?: CardPadding;
  interactive?: boolean;
  accent?: boolean;
}

const elevationStyles: Record<CardElevation, string> = {
  none: '',
  xs: 'shadow-[0_1px_2px_rgba(18,46,66,0.06)]',
  sm: 'shadow-[0_1px_3px_rgba(18,46,66,0.08),0_1px_2px_rgba(18,46,66,0.04)]',
  md: 'shadow-[0_4px_12px_rgba(18,46,66,0.08),0_2px_4px_rgba(18,46,66,0.04)]',
  lg: 'shadow-[0_12px_28px_rgba(18,46,66,0.10),0_4px_10px_rgba(18,46,66,0.05)]',
};

const paddingStyles: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({ elevation = 'sm', padding = 'md', interactive = false, accent = false, children, className = '', ...props }: CardProps) {
  return (
    <div
      className={[
        'bg-white rounded-card overflow-hidden',
        elevationStyles[elevation],
        paddingStyles[padding],
        interactive ? 'transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(18,46,66,0.10),0_4px_10px_rgba(18,46,66,0.05)] cursor-pointer' : '',
        accent ? 'border-t-[3px] border-t-transparent' : '',
        className,
      ].filter(Boolean).join(' ')}
      style={accent ? { borderImage: 'linear-gradient(100deg, #16384C 0%, #235A7C 42%, #2EA84E 100%) 1', borderImageSlice: '1 0 0 0' } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  subtitle?: ReactNode;
  action?: ReactNode;
}

export function CardHeader({ title, subtitle, action, className = '', ...props }: CardHeaderProps) {
  return (
    <div className={['flex items-start justify-between gap-4', className].filter(Boolean).join(' ')} {...props}>
      <div>
        {title && <h3 className="font-display text-lg font-bold text-gray-900">{title}</h3>}
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
