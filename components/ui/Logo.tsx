import Image from 'next/image';
import type { ImgHTMLAttributes } from 'react';

type LogoVariant = 'lockup' | 'horizontal' | 'stacked' | 'mark' | 'tile';

interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'height' | 'width'> {
  variant?: LogoVariant;
  concept?: 1 | 2 | 3;
  reversed?: boolean;
  height?: number;
  assetsBase?: string;
}

function getLogoSrc(variant: LogoVariant, concept: number, reversed: boolean, assetsBase: string): string {
  if (variant === 'mark') return `${assetsBase}/gp-mark.png`;
  if (variant === 'tile') return `${assetsBase}/gp-tile.png`;
  const fileVariant = variant === 'lockup' ? 'horizontal' : variant;
  const rev = reversed ? '-rev' : '';
  return `${assetsBase}/gp-c${concept}-${fileVariant}${rev}.svg`;
}

export function Logo({
  variant = 'lockup',
  concept = 1,
  reversed = false,
  height = 40,
  assetsBase = '/logos',
  className = '',
  ...props
}: LogoProps) {
  const src = getLogoSrc(variant, concept, reversed, assetsBase);

  return (
    <Image
      src={src}
      alt="Great Physician Regenerative Medicine"
      height={height}
      width={height * 3}
      className={['h-auto', className].filter(Boolean).join(' ')}
      style={{ height, width: 'auto', minWidth: 140 }}
      priority
      unoptimized
      {...props}
    />
  );
}
