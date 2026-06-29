import type { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { StatsBento } from '@/components/sections/about/StatsBento';
import { PinnedValuesScroll } from '@/components/sections/about/PinnedValuesScroll';
import { DrHricSection } from '@/components/sections/about/DrHricSection';
import { MissionValues } from '@/components/sections/about/MissionValues';
import { SectionCTA } from '@/components/sections/shared/SectionCTA';

export const metadata: Metadata = {
  title: 'About | Great Physician Regenerative Medicine',
  description: 'Meet Dr. Jerry Hric and the Great Physician team. Conservative-first regenerative medicine in Northern Colorado.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsBento />
      <PinnedValuesScroll />
      <DrHricSection />
      <MissionValues />
      <SectionCTA
        title="Ready to feel like yourself again?"
        subtitle="Schedule a visit and we'll talk through what's going on, and whether we can help."
      />
    </>
  );
}
