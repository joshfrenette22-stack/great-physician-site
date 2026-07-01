import type { Metadata } from 'next';
import { ServicesHero } from '@/components/sections/services/ServicesHero';
import { TreatmentExplorer } from '@/components/sections/shared/TreatmentExplorer';
import { ConditionMatcher } from '@/components/sections/services/ConditionMatcher';
import { ProcessStrip } from '@/components/sections/services/ProcessStrip';
import { ImmersiveCTA } from '@/components/sections/services/ImmersiveCTA';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/seo/structured-data';

export const metadata: Metadata = {
  title: 'PRP Therapy, Prolotherapy & Shockwave Therapy Services',
  description:
    'Evidence-based regenerative treatments — PRP therapy, prolotherapy, and focused shockwave — performed personally by Dr. Jerry Hric in Northern Colorado. No technicians, no hand-offs.',
  alternates: { canonical: 'https://great-physician-site.vercel.app/services' },
  openGraph: {
    title: 'Regenerative Medicine Services — PRP, Prolotherapy & Shockwave',
    description: 'Physician-performed PRP therapy, prolotherapy, and focused shockwave therapy. Conservative-first regenerative care in Northern Colorado.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://great-physician-site.vercel.app' },
        { name: 'Services', url: 'https://great-physician-site.vercel.app/services' },
      ]} />
      <ServiceJsonLd name="PRP Therapy" description="Platelet-rich plasma therapy using your own blood to accelerate healing of tendons, ligaments, and joints." url="https://great-physician-site.vercel.app/services#prp-therapy" />
      <ServiceJsonLd name="Prolotherapy" description="Regenerative injection therapy that strengthens loose or worn ligaments and tendons, rebuilding joint support." url="https://great-physician-site.vercel.app/services#prolotherapy" />
      <ServiceJsonLd name="Focused Shockwave Therapy" description="PiezoWave2 acoustic pressure waves stimulate blood flow and healing in stubborn tendons. No needles, no downtime." url="https://great-physician-site.vercel.app/services#focused-shockwave" />
      <ServicesHero />
      <TreatmentExplorer />
      <ConditionMatcher />
      <ProcessStrip />
      <ImmersiveCTA />
    </>
  );
}
