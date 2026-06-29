import type { Metadata } from 'next';
import Link from 'next/link';
import { ResourcesHero } from '@/components/sections/resources/ResourcesHero';
import { FeaturedArticle } from '@/components/sections/resources/FeaturedArticle';
import { ArticleGrid } from '@/components/sections/resources/ArticleGrid';

export const metadata: Metadata = {
  title: 'Patient Resources | Great Physician Regenerative Medicine',
  description: 'Guides and articles to help you understand regenerative medicine, treatments, and what to expect — before you book anything.',
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <FeaturedArticle />
      <ArticleGrid />

      {/* FAQ CTA strip */}
      <section style={{ maxWidth: 1240, margin: '0 auto', padding: '72px 40px 84px' }} data-reveal>
        <div
          className="bg-gray-50 border border-gray-200 rounded-[24px]"
          style={{
            padding: '48px 52px',
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 40,
            alignItems: 'center',
          }}
        >
          <div>
            <h2
              className="font-display font-black text-teal-900"
              style={{ fontSize: 32, letterSpacing: '-0.025em', margin: '0 0 12px' }}
            >
              Have a specific question?
            </h2>
            <p className="text-gray-500" style={{ fontSize: 17, lineHeight: 1.6, margin: 0 }}>
              Our FAQ covers candidacy, safety, cost, and our approach — the questions patients ask most.
            </p>
          </div>
          <div className="flex gap-[14px] justify-end flex-wrap items-center">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-6 h-[52px] rounded-[12px] font-semibold tracking-[0.01em] text-base text-white bg-teal-600 border-[1.5px] border-transparent hover:bg-teal-700 transition-colors duration-200"
            >
              Browse the FAQ
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-teal-800 hover:text-teal-700 transition-colors duration-200"
              style={{ fontSize: 16 }}
            >
              Ask us directly &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
