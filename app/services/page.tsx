import type { Metadata } from 'next';
import { ServicesHero } from '@/components/sections/services/ServicesHero';
import { TreatmentExplorer } from '@/components/sections/shared/TreatmentExplorer';
import { ConditionMatcher } from '@/components/sections/services/ConditionMatcher';
import { ProcessStrip } from '@/components/sections/services/ProcessStrip';
import { ImmersiveCTA } from '@/components/sections/services/ImmersiveCTA';

export const metadata: Metadata = {
  title: 'Services | Great Physician Regenerative Medicine',
  description:
    'Evidence-based regenerative treatments — PRP therapy, prolotherapy, and focused shockwave — performed by Dr. Hric in Northern Colorado.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <div id="treatments">
        <TreatmentExplorer />
      </div>
      <ConditionMatcher />
      <ProcessStrip />
      <ImmersiveCTA />
    </>
  );
}
