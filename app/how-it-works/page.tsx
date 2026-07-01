import type { Metadata } from 'next';
import { HowItWorksHero } from '@/components/sections/how-it-works/HowItWorksHero';
import { StepJourney } from '@/components/sections/how-it-works/StepJourney';
import { BenefitsGrid } from '@/components/sections/how-it-works/BenefitsGrid';
import { HowItWorksCTA } from '@/components/sections/how-it-works/HowItWorksCTA';
import { BreadcrumbJsonLd } from '@/lib/seo/structured-data';

export const metadata: Metadata = {
  title: 'How It Works — Your First Visit to Recovery',
  description:
    'A simple, honest process from consultation to recovery. Dr. Hric listens first, evaluates your condition, and recommends the most conservative path. No upselling, no pressure.',
  alternates: { canonical: 'https://great-physician-site.vercel.app/how-it-works' },
  openGraph: {
    title: 'How Regenerative Medicine Works — Step by Step',
    description: 'From your first conversation to ongoing recovery guidance. A conservative-first approach to regenerative care.',
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://great-physician-site.vercel.app' },
        { name: 'How It Works', url: 'https://great-physician-site.vercel.app/how-it-works' },
      ]} />
      <HowItWorksHero />
      <StepJourney />
      <BenefitsGrid />
      <HowItWorksCTA />
    </>
  );
}
