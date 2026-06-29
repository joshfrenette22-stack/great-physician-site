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
      <section className="bg-gray-50 border-t border-gray-100 py-16" data-reveal>
        <div className="max-w-[1180px] mx-auto px-10">
          <div
            className="bg-white border border-gray-200 rounded-[22px] shadow-sm overflow-hidden"
            style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', alignItems: 'center' }}
          >
            <div className="p-10">
              <p className="gp-eyebrow text-gray-400 mb-3">Still have questions?</p>
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-3">
                Have a specific question?
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Our FAQ covers the most common questions honestly. Or reach out and we&apos;ll talk it through.
              </p>
            </div>
            <div className="p-10 border-l border-gray-100 flex flex-col gap-3">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-6 h-[42px] rounded-[12px] font-semibold tracking-[0.01em] text-base text-white bg-teal-600 border-[1.5px] border-transparent hover:bg-teal-700 transition-colors duration-200 shadow-sm"
              >
                Browse the FAQ
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 h-[42px] rounded-[12px] font-semibold tracking-[0.01em] text-base text-teal-600 border-[1.5px] border-gray-300 hover:bg-teal-50 transition-colors duration-200"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
