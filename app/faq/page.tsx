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
      <section className="bg-white">
        <div
          className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start pt-12 md:pt-20 pb-8"
        >
          <FaqSidebar />
          <FaqAccordion />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1080px] mx-auto px-5 md:px-10 py-14 md:py-20 text-center">
          <h2
            className="font-display font-extrabold text-teal-900 tracking-tight text-[1.875rem] md:text-[2.75rem]"
            style={{ letterSpacing: '-0.03em', margin: '0 0 18px' }}
          >
            Didn&apos;t find your answer?
          </h2>
          <p
            className="text-gray-500 mx-auto text-base md:text-lg"
            style={{ margin: '0 auto 30px', lineHeight: 1.55, maxWidth: 560 }}
          >
            Reach out and we&apos;ll give you a straight answer, even if the answer is that regenerative medicine isn&apos;t right for you.
          </p>
          <div className="inline-flex flex-wrap gap-[14px] items-center justify-center">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-7 h-[52px] rounded-[12px] font-semibold tracking-[0.01em] text-base text-white bg-teal-600 border-[1.5px] border-transparent hover:bg-teal-700 transition-colors duration-200"
            >
              Schedule a Visit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-[9px] font-semibold text-teal-800 hover:text-teal-700 transition-colors duration-200"
              style={{ fontSize: 16 }}
            >
              Contact us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
