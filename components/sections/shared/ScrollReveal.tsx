'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { HTMLAttributes } from 'react';

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section';
}

/**
 * Wraps a section and observes all [data-reveal] children inside it.
 * Usage: wrap a section component, then add data-reveal to elements you want animated.
 */
export function ScrollReveal({ as: Tag = 'div', children, className = '', ...props }: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}
