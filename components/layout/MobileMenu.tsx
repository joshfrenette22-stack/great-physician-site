// components/layout/MobileMenu.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="lg:hidden absolute top-[76px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
      <nav className="flex flex-col p-6 gap-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <hr className="my-3 border-gray-100" />
        <Link href="/schedule/returning" onClick={onClose} className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-colors">
          Returning Patient
        </Link>
        <Link href="/schedule" onClick={onClose} className="mt-2">
          <Button fullWidth>Schedule a Visit</Button>
        </Link>
      </nav>
    </div>
  );
}
