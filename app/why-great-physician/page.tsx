import type { Metadata } from 'next';
import { ScriptureHero } from '@/components/sections/why-great-physician/ScriptureHero';
import { GospelVideo } from '@/components/sections/why-great-physician/GospelVideo';
import { BecomingChristian } from '@/components/sections/why-great-physician/BecomingChristian';
import { PrayerRequest } from '@/components/sections/why-great-physician/PrayerRequest';
import { BreadcrumbJsonLd } from '@/lib/seo/structured-data';

export const metadata: Metadata = {
  title: 'Why "Great Physician"? — The Faith Behind Our Practice',
  description: 'The name Great Physician points to Jesus Christ. Learn the faith behind our practice, hear the gospel, and share a prayer request. Faith shapes how we care — not what we require of you.',
  alternates: { canonical: 'https://great-physician-site.vercel.app/why-great-physician' },
  openGraph: {
    title: 'Why Great Physician? — Faith-Driven Regenerative Medicine',
    description: 'Our name refers to Jesus Christ. Learn the faith behind our practice and how it shapes the way we care for every patient.',
  },
};

export default function WhyGreatPhysicianPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://great-physician-site.vercel.app' },
        { name: 'Why Great Physician', url: 'https://great-physician-site.vercel.app/why-great-physician' },
      ]} />
      <ScriptureHero />
      <GospelVideo />
      <BecomingChristian />
      <PrayerRequest />
    </>
  );
}
