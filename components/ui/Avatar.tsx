import Image from 'next/image';
import type { HTMLAttributes } from 'react';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  name?: string;
  size?: AvatarSize;
}

const sizeMap: Record<AvatarSize, { px: number; text: string }> = {
  xs: { px: 24, text: 'text-[10px]' },
  sm: { px: 32, text: 'text-xs' },
  md: { px: 40, text: 'text-sm' },
  lg: { px: 48, text: 'text-base' },
  xl: { px: 64, text: 'text-lg' },
};

function getInitials(name?: string): string {
  if (!name) return '?';
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

export function Avatar({ src, name, size = 'md', className = '', ...props }: AvatarProps) {
  const { px, text } = sizeMap[size];

  return (
    <span
      className={[
        'inline-flex items-center justify-center rounded-full overflow-hidden shrink-0',
        'bg-teal-50 text-teal-700 font-semibold',
        text,
        className,
      ].filter(Boolean).join(' ')}
      style={{ width: px, height: px }}
      {...props}
    >
      {src ? (
        <Image src={src} alt={name || 'Avatar'} width={px} height={px} className="object-cover w-full h-full" />
      ) : (
        getInitials(name)
      )}
    </span>
  );
}
