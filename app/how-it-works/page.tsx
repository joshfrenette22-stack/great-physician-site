import type { Metadata } from 'next';
import { HowItWorksHero } from '@/components/sections/how-it-works/HowItWorksHero';
import { StepJourney } from '@/components/sections/how-it-works/StepJourney';
import { BenefitsGrid } from '@/components/sections/how-it-works/BenefitsGrid';
import { HowItWorksCTA } from '@/components/sections/how-it-works/HowItWorksCTA';

export const metadata: Metadata = {
  title: 'How It Works | Great Physician Regenerative Medicine',
  description:
    'A simple, honest five-step process — from your first conversation with Dr. Hric to ongoing recovery guidance. Conservative-first regenerative care in Northern Colorado.',
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <StepJourney />
      <BenefitsGrid />
      <HowItWorksCTA />
    </>
  );
}
