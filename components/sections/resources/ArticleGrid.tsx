import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/data/articles';

const FILTER_PILLS = ['All', 'Treatments', 'Conditions', 'Recovery'];

export function ArticleGrid() {
  const nonFeatured = articles.filter((a) => !a.featured);

  return (
    <section className="bg-white py-12 pb-20" data-reveal>
      <div className="max-w-[1180px] mx-auto px-10">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="gp-eyebrow text-green-700 mb-3">Articles &amp; guides</p>
            <h2 className="font-display font-bold text-gray-900 text-3xl tracking-tight">
              Learn at your own pace.
            </h2>
          </div>
          {/* Filter pills — static, no JS needed */}
          <div className="flex items-center gap-2 flex-wrap">
            {FILTER_PILLS.map((pill, i) => (
              <span
                key={pill}
                className={[
                  'px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-default',
                  i === 0
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-white text-gray-600 border-gray-200',
                ].join(' ')}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nonFeatured.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="group border border-gray-200 rounded-[20px] overflow-hidden hover:shadow-lg hover:-translate-y-[3px] transition-all duration-300 flex flex-col bg-white"
            >
              {/* Image */}
              <div className="relative" style={{ height: 190 }}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="gp-eyebrow text-green-700 mb-3">{article.category}</p>
                <h3 className="font-display font-bold text-gray-900 text-xl tracking-tight leading-tight mb-2 flex-1">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <p className="text-xs text-gray-400 font-medium">{article.readTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
