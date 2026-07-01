import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/data/articles';
import { ScrollReveal } from '@/components/sections/shared/ScrollReveal';

const FILTER_PILLS = ['All', 'Treatments', 'Conditions', 'Recovery'];

export function ArticleGrid() {
  const nonFeatured = articles.filter((a) => !a.featured);

  return (
    <ScrollReveal as="section" className="bg-white px-5 md:px-10" style={{ maxWidth: 1240, margin: '0 auto', paddingTop: 48, paddingBottom: 20 }}>
      {/* Header row */}
      <div data-reveal className="flex items-end justify-between gap-6 flex-wrap mb-9">
        <div>
          <p
            className="font-semibold uppercase text-gray-400 mb-3"
            style={{ fontSize: 13, letterSpacing: '0.16em' }}
          >
            Articles &amp; guides
          </p>
          <h2
            className="font-display font-extrabold text-teal-900 text-[1.875rem] md:text-[2.5rem]"
            style={{ letterSpacing: '-0.03em', margin: 0 }}
          >
            Learn at your own pace
          </h2>
        </div>
        {/* Filter pills */}
        <div className="flex items-center gap-[10px] flex-wrap">
          {FILTER_PILLS.map((pill, i) => (
            <span
              key={pill}
              className="cursor-default font-semibold"
              style={{
                padding: '9px 16px',
                borderRadius: 999,
                fontSize: 14,
                background: i === 0 ? 'var(--teal-900, #0f2d3c)' : 'transparent',
                color: i === 0 ? '#fff' : '#6b7280',
                border: i === 0 ? 'none' : '1px solid #d1d5db',
                fontWeight: i === 0 ? 600 : 500,
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
        {nonFeatured.map((article, idx) => (
          <Link
            key={article.slug}
            data-reveal
            data-reveal-delay={String(Math.min(idx + 1, 6))}
            href={`/resources/${article.slug}`}
            className="group border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-[3px] transition-all duration-300 flex flex-col bg-white"
            style={{ borderRadius: 20, textDecoration: 'none' }}
          >
            {/* Image */}
            <div className="relative" style={{ height: 190, overflow: 'hidden' }}>
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col flex-1" style={{ padding: '24px 24px 28px' }}>
              <p
                className="font-semibold uppercase text-teal-600"
                style={{ fontSize: 12, letterSpacing: '0.1em', marginBottom: 11 }}
              >
                {article.category}
              </p>
              <h3
                className="font-display font-bold text-teal-900 leading-tight"
                style={{ fontSize: 21, lineHeight: 1.25, margin: '0 0 10px' }}
              >
                {article.title}
              </h3>
              <p className="text-gray-500 leading-relaxed" style={{ fontSize: 15, lineHeight: 1.55, margin: '0 0 18px' }}>
                {article.excerpt}
              </p>
              <p className="text-gray-400 mt-auto" style={{ fontSize: 14 }}>{article.readTime}</p>
            </div>
          </Link>
        ))}
      </div>
    </ScrollReveal>
  );
}
