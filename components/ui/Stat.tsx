import type { HTMLAttributes, ReactNode } from 'react';

interface StatProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  unit?: ReactNode;
  delta?: ReactNode;
  trend?: 'up' | 'down' | 'flat';
  icon?: ReactNode;
}

const trendColors = {
  up: 'text-[#1C7A39]',
  down: 'text-[#C0524B]',
  flat: 'text-gray-500',
};

export function Stat({ label, value, unit, delta, trend = 'flat', icon, className = '', ...props }: StatProps) {
  return (
    <div className={['flex flex-col gap-1', className].filter(Boolean).join(' ')} {...props}>
      <span className="gp-eyebrow">{label}</span>
      <div className="flex items-baseline gap-1">
        {icon && <span className="text-teal-600 mr-1">{icon}</span>}
        <span className="font-display text-3xl font-black text-gray-900 tracking-tight">{value}</span>
        {unit && <span className="text-lg text-gray-500 font-medium">{unit}</span>}
      </div>
      {delta && <span className={['text-sm font-medium', trendColors[trend]].join(' ')}>{delta}</span>}
    </div>
  );
}
