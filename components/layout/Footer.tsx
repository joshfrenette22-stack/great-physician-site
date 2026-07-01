// components/layout/Footer.tsx
import Link from 'next/link';
import { Logo } from '@/components/ui';

export function Footer() {
  return (
    <footer className="mt-10" style={{ borderTop: '1px solid var(--border-default)', background: 'var(--gray-50)' }}>
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 pt-12 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10">
        {/* Brand */}
        <div>
          <Logo height={34} />
          <p className="mt-4 text-[15px] leading-[1.55] text-gray-500 max-w-[260px]">
            Restoring function. Renewing hope. Encouraging stewardship.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] mb-3.5" style={{ color: 'var(--text-subtle)' }}>Explore</h4>
          <nav className="flex flex-col" style={{ gap: 10 }}>
            {[
              { href: '/#treat', label: 'What we treat' },
              { href: '/#explorer', label: 'Our approach' },
              { href: '/how-it-works', label: 'How it works' },
              { href: '/faq', label: 'FAQ & resources' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="text-[15px] text-gray-700 hover:text-teal-600 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Practice */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] mb-3.5" style={{ color: 'var(--text-subtle)' }}>Practice</h4>
          <nav className="flex flex-col" style={{ gap: 10 }}>
            <Link href="/why-great-physician" className="text-[15px] text-gray-700 hover:text-teal-600 transition-colors">
              Who is the Great Physician?
            </Link>
            <Link href="/about" className="text-[15px] text-gray-700 hover:text-teal-600 transition-colors">
              About Dr. Hric
            </Link>
            <Link href="/schedule" className="text-[15px] text-gray-700 hover:text-teal-600 transition-colors">
              Schedule a visit
            </Link>
          </nav>
        </div>

        {/* Visit */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] mb-3.5" style={{ color: 'var(--text-subtle)' }}>Visit</h4>
          <p className="text-[15px] leading-[1.6] text-gray-700 m-0">
            Within Dr. Tyler Wood&apos;s office<br />Northern Colorado
          </p>
          <p className="text-sm mt-[10px] m-0" style={{ color: 'var(--text-muted)' }}>
            Our name refers to Jesus Christ, the Great Physician.{' '}
            <Link href="/why-great-physician" className="hover:text-teal-600 transition-colors" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
              Learn what it means &rarr;
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ borderTop: '1px solid var(--border-default)' }}>
        <div className="max-w-[1240px] mx-auto px-5 md:px-10 py-[18px] flex flex-wrap items-center gap-3 text-[13px]" style={{ color: 'var(--text-subtle)' }}>
          <span>&copy; 2026 Great Physician Regenerative Medicine</span>
          <Link href="/privacy" style={{ color: 'var(--text-subtle)' }} className="hover:text-teal-600 transition-colors">Privacy</Link>
          <Link href="/terms" style={{ color: 'var(--text-subtle)' }} className="hover:text-teal-600 transition-colors">Terms</Link>
          <span className="w-full md:w-auto md:ml-auto md:max-w-[640px] md:text-right leading-[1.5]">
            Results vary by individual. This information is educational and not a substitute for professional medical advice or emergency care.
          </span>
        </div>
      </div>
    </footer>
  );
}
