import Link from 'next/link';
import { faqGroups } from '@/lib/data/faq';

export function FaqSidebar() {
  return (
    <aside className="md:sticky" style={{ top: 104 }}>
      <p
        className="font-semibold uppercase text-gray-400 mb-[18px]"
        style={{ fontSize: 12, letterSpacing: '0.16em' }}
      >
        Categories
      </p>
      <nav role="navigation" aria-label="FAQ categories" className="flex flex-col gap-0.5 mb-7">
        {faqGroups.map((group, i) => (
          <a
            key={group.id}
            href={`#${group.id}`}
            className={[
              'text-[15.5px] font-medium px-[14px] py-[11px] rounded-[10px] border-l-[3px] transition-all duration-200',
              i === 0
                ? 'font-semibold text-gray-900 border-teal-600 bg-gray-50'
                : 'text-gray-500 border-transparent hover:text-teal-600 hover:bg-gray-50',
            ].join(' ')}
          >
            {group.title}
          </a>
        ))}
      </nav>

      {/* Still unsure CTA */}
      <div className="rounded-[16px] bg-green-50 border border-green-100 p-[22px]">
        <p className="font-display font-bold text-teal-800 mb-2" style={{ fontSize: 18 }}>Still unsure?</p>
        <p className="text-gray-500 leading-relaxed mb-[14px]" style={{ fontSize: 14 }}>
          A consultation is the honest way to find out if we can help.
        </p>
        <Link
          href="/schedule"
          className="font-semibold text-teal-600 hover:text-teal-700 transition-colors"
          style={{ fontSize: 14.5 }}
        >
          Schedule a visit &rarr;
        </Link>
      </div>
    </aside>
  );
}
