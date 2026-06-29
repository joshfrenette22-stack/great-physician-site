import Link from 'next/link';
import { faqGroups } from '@/lib/data/faq';

export function FaqSidebar() {
  return (
    <aside className="sticky" style={{ top: 104 }}>
      <nav role="navigation" aria-label="FAQ categories" className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Categories
        </p>
        <ul className="space-y-0.5">
          {faqGroups.map((group) => (
            <li key={group.id}>
              <a
                href={`#${group.id}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 transition-all duration-200 border-l-2 border-transparent hover:border-teal-500"
              >
                {group.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Still unsure CTA */}
      <div className="rounded-[16px] bg-green-50 border border-green-100 p-5">
        <p className="font-semibold text-gray-900 text-sm mb-1">Still unsure?</p>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
          Talk it through with us. No obligation, no pressure.
        </p>
        <Link
          href="/schedule"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
        >
          Schedule a visit &rarr;
        </Link>
      </div>
    </aside>
  );
}
