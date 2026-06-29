import type { Metadata } from 'next';
import Link from 'next/link';
import { FaqHero } from '@/components/sections/faq/FaqHero';
import { FaqSidebar } from '@/components/sections/faq/FaqSidebar';
import { FaqAccordion } from '@/components/sections/faq/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQ | Great Physician Regenerative Medicine',
  description: 'Honest answers to common questions about regenerative medicine, treatments, cost, and how Great Physician approaches patient care.',
};

export default function FaqPage() {
  return (
    <>
      <FaqHero />

      {/* FAQ body */}
      <section className="bg-white py-20">
        <div
          className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start"
        >
          <FaqSidebar />
          <FaqAccordion />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-20">
        <div className="max-w-[1180px] mx-auto px-10 text-center">
          <p className="gp-eyebrow text-gray-400 mb-4">Still have questions?</p>
          <h2 className="font-display font-bold text-gray-900 text-3xl tracking-tight mb-5">
            Didn&apos;t find your answer?
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed mb-8">
            We&apos;re happy to talk it through personally. Reach out and we&apos;ll give you a straight answer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-base text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-200 shadow-sm"
            >
              Schedule a visit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 font-semibold text-gray-600 hover:text-teal-700 transition-colors duration-200 text-base"
            >
              Contact us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
