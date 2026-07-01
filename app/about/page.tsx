import type { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { StatsBento } from '@/components/sections/about/StatsBento';
import { PinnedValuesScroll } from '@/components/sections/about/PinnedValuesScroll';
import { DrHricSection } from '@/components/sections/about/DrHricSection';
import { MissionValues } from '@/components/sections/about/MissionValues';
import { SectionCTA } from '@/components/sections/shared/SectionCTA';
import { PhysicianJsonLd, BreadcrumbJsonLd } from '@/lib/seo/structured-data';

export const metadata: Metadata = {
  title: 'About Dr. Jerry Hric — Regenerative Medicine Physician',
  description: 'Meet Dr. Jerry Hric, the physician behind Great Physician Regenerative Medicine. Conservative-first care, physician-performed treatments, and honest guidance in Northern Colorado.',
  alternates: { canonical: 'https://great-physician-site.vercel.app/about' },
  openGraph: {
    title: 'About Dr. Jerry Hric — Great Physician Regenerative Medicine',
    description: 'Meet the physician who performs every treatment himself. Conservative-first regenerative medicine in Northern Colorado.',
  },
};

export default function AboutPage() {
  return (
    <>
      <PhysicianJsonLd />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://great-physician-site.vercel.app' },
        { name: 'About', url: 'https://great-physician-site.vercel.app/about' },
      ]} />
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
