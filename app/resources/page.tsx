import type { Metadata } from 'next';
import Link from 'next/link';
import { ResourcesHero } from '@/components/sections/resources/ResourcesHero';
import { FeaturedArticle } from '@/components/sections/resources/FeaturedArticle';
import { ArticleGrid } from '@/components/sections/resources/ArticleGrid';
import { BreadcrumbJsonLd } from '@/lib/seo/structured-data';

export const metadata: Metadata = {
  title: 'Patient Resources — Guides on PRP, Prolotherapy & Recovery',
  description: 'Honest guides and articles about regenerative medicine: what PRP does, how prolotherapy works, shockwave therapy recovery, and how to evaluate treatments without the hype.',
  alternates: { canonical: 'https://great-physician-site.vercel.app/resources' },
  openGraph: {
    title: 'Patient Resources — Great Physician Regenerative Medicine',
    description: 'Guides and articles to help you understand regenerative medicine, treatments, and what to expect.',
  },
};

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://great-physician-site.vercel.app' },
        { name: 'Resources', url: 'https://great-physician-site.vercel.app/resources' },
      ]} />
      <ResourcesHero />
      <FeaturedArticle />
      <ArticleGrid />

      {/* FAQ CTA strip */}
      <section className="px-5 md:px-10" style={{ maxWidth: 1240, margin: '0 auto', paddingTop: 56, paddingBottom: 72 }} data-reveal>
        <div className="bg-gray-50 border border-gray-200 rounded-[24px] p-8 md:p-[48px_52px] grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-10 items-center">
          <div>
            <h2
              className="font-display font-extrabold text-teal-900 text-[1.625rem] md:text-[2rem]"
              style={{ letterSpacing: '-0.025em', margin: '0 0 12px' }}
            >
              Have a specific question?
            </h2>
            <p className="text-gray-500" style={{ fontSize: 17, lineHeight: 1.6, margin: 0 }}>
              Our FAQ covers candidacy, safety, cost, and our approach — the questions patients ask most.
            </p>
          </div>
          <div className="flex gap-[14px] flex-wrap items-center md:justify-end">
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
