// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo, Button, IconButton } from '@/components/ui';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/services', label: 'Services' },
  { href: '/resources', label: 'Resources' },
  { href: '/why-great-physician', label: 'Who is the Great Physician?' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white/86 backdrop-blur-[12px] border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-10 h-[76px] flex items-center gap-10">
        <Link href="/" className="shrink-0">
          <Logo height={36} />
        </Link>

        <nav className="hidden lg:flex items-center gap-[26px] ml-[18px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-gray-700 hover:text-teal-600 transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3.5 ml-auto">
          <Link href="#" className="text-[15px] font-medium text-gray-500 hover:text-teal-600 transition-colors whitespace-nowrap">
            Patient login
          </Link>
          <Link href="/schedule">
            <Button size="md">Schedule a Visit</Button>
          </Link>
        </div>

        <div className="lg:hidden ml-auto">
          <IconButton label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </IconButton>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </header>
  );
}
