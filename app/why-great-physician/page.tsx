import type { Metadata } from 'next';
import { ScriptureHero } from '@/components/sections/why-great-physician/ScriptureHero';
import { GospelVideo } from '@/components/sections/why-great-physician/GospelVideo';
import { BecomingChristian } from '@/components/sections/why-great-physician/BecomingChristian';
import { PrayerRequest } from '@/components/sections/why-great-physician/PrayerRequest';

export const metadata: Metadata = {
  title: 'Why Great Physician | Great Physician Regenerative Medicine',
  description: 'The name Great Physician points to Jesus Christ. Learn the faith behind our practice, hear the gospel, and share a prayer request.',
};

export default function WhyGreatPhysicianPage() {
  return (
    <>
      <ScriptureHero />
      <GospelVideo />
      <BecomingChristian />
      <PrayerRequest />
    </>
  );
}
