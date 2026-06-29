import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/data/articles';

export function FeaturedArticle() {
  const featured = articles.find((a) => a.featured) ?? articles[0];

  return (
    <section className="bg-white pt-20 pb-8" data-reveal>
      <div className="max-w-[1180px] mx-auto px-10">
        <div
          className="border border-gray-200 rounded-[26px] shadow-md overflow-hidden"
          style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr' }}
        >
          {/* Image */}
          <div className="relative" style={{ minHeight: 380 }}>
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>

          {/* Content */}
          <div className="p-10 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-semibold mb-5 self-start">
              Featured &middot; Guide
            </span>
            <h2
              className="font-display font-bold text-gray-900 tracking-tight leading-tight mb-4"
              style={{ fontSize: 36 }}
            >
              Is regenerative medicine right for me?
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-7">
              {featured.excerpt}
            </p>
            <Link
              href={`/resources/${featured.slug}`}
              className="inline-flex items-center gap-1.5 text-teal-600 font-semibold hover:text-teal-700 transition-colors text-base"
            >
              Read the guide &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
