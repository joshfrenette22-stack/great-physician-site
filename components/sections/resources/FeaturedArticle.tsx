import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/data/articles';
import { ScrollReveal } from '@/components/sections/shared/ScrollReveal';

export function FeaturedArticle() {
  const featured = articles.find((a) => a.featured) ?? articles[0];

  return (
    <ScrollReveal as="section" className="bg-white px-5 md:px-10" style={{ maxWidth: 1240, margin: '0 auto', paddingTop: 56, paddingBottom: 8 }}>
      <Link
        data-reveal="scale"
        href={`/resources/${featured.slug}`}
        className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] rounded-[26px] overflow-hidden border border-gray-200 no-underline"
        style={{ textDecoration: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
      >
        {/* Image */}
        <div className="relative" style={{ minHeight: 260 }}>
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover"
            style={{ objectPosition: 'center 12%' }}
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>

        {/* Content */}
        <div className="bg-white flex flex-col justify-center p-8 md:p-[52px_48px]">
          <span
            className="inline-flex self-start items-center gap-2 rounded-full bg-green-50 text-teal-800 font-semibold mb-[22px]"
            style={{ padding: '6px 13px', fontSize: 12.5 }}
          >
            Featured &middot; Guide
          </span>
          <h2
            className="font-display font-extrabold text-teal-900 leading-tight"
            style={{ fontSize: 36, letterSpacing: '-0.025em', margin: '0 0 16px' }}
          >
            Is regenerative medicine right for me?
          </h2>
          <p className="text-gray-500 leading-relaxed" style={{ fontSize: 17, margin: '0 0 24px', lineHeight: 1.62 }}>
            A straightforward walkthrough of who these treatments tend to help, who they don&apos;t, and how to think about the decision without the hype.
          </p>
          <span
            className="inline-flex items-center gap-[9px] text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            style={{ fontSize: 16 }}
          >
            Read the guide
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"></polyline></svg>
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}
