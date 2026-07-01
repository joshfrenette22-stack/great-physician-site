import { Hero } from '@/components/sections/home/Hero';
import { TreatmentCardGrid } from '@/components/sections/home/TreatmentCardGrid';
import { WhyUsGrid } from '@/components/sections/home/WhyUsGrid';
import { RotatingStoryPanel } from '@/components/sections/home/RotatingStoryPanel';
import { TreatmentExplorer } from '@/components/sections/shared/TreatmentExplorer';
import { DifferentiatorsPanel } from '@/components/sections/home/DifferentiatorsPanel';
import { ConditionsGrid } from '@/components/sections/home/ConditionsGrid';
import { DoctorBand } from '@/components/sections/home/DoctorBand';
import { HonestGuidance } from '@/components/sections/home/HonestGuidance';
import { FaithStrip } from '@/components/sections/home/FaithStrip';
import { ReviewsSection } from '@/components/sections/home/ReviewsSection';
import { EmotionalBand } from '@/components/sections/home/EmotionalBand';
import { ClosingCTA } from '@/components/sections/home/ClosingCTA';
import { WebSiteJsonLd, PhysicianJsonLd } from '@/lib/seo/structured-data';

export default function Home() {
  return (
    <>
      <WebSiteJsonLd />
      <PhysicianJsonLd />
      <Hero />
      <TreatmentCardGrid />
      <WhyUsGrid />
      <RotatingStoryPanel />
      <TreatmentExplorer />
      <DifferentiatorsPanel />
      <ConditionsGrid />
      <DoctorBand />
      <HonestGuidance />
      <FaithStrip />
      <ReviewsSection />
      <EmotionalBand />
      <ClosingCTA />
    </>
  );
}
