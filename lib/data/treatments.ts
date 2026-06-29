export interface Treatment {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string[];
  visitNote: string;
  image: string;
  color: string;
}

export const treatments: Treatment[] = [
  {
    id: "prp-therapy",
    name: "PRP Therapy",
    tagline: "01 · Platelet-rich plasma",
    description:
      "We concentrate the healing platelets from a small sample of your own blood and place them precisely where your body is struggling to repair, guided by ultrasound for accuracy.",
    bestFor: ["tendon injuries", "mild-to-moderate arthritis", "ligament strains"],
    visitNote: "About 60 minutes, using your own blood, nothing synthetic.",
    image: "/images/stock/photo-1573497019940-1c28c88b4f3e.jpg",
    color: "linear-gradient(90deg, #123247, #1D5053)",
  },
  {
    id: "prolotherapy",
    name: "Prolotherapy",
    tagline: "02 · Regenerative injection",
    description:
      "A targeted injection that prompts your body to strengthen loose or worn ligaments and tendons, rebuilding the support around a joint rather than numbing it.",
    bestFor: ["joint instability", "chronic ligament laxity", "low back and pelvis pain"],
    visitNote: "A short series is common, and we outline the plan up front.",
    image: "/images/stock/photo-1521119989659-a83eee488004.jpg",
    color: "linear-gradient(90deg, #1D5053, #276D5F)",
  },
  {
    id: "focused-shockwave",
    name: "Focused Shockwave Therapy",
    tagline: "03 · PiezoWave2",
    description:
      "Acoustic pressure waves delivered to a precise depth stimulate blood flow and healing in stubborn tendons. No needles, no anesthesia, no downtime.",
    bestFor: ["plantar fasciitis", "tennis or golfer's elbow", "Achilles tendinopathy"],
    visitNote: "Roughly 15 to 20 minutes, walk in and walk out.",
    image: "/images/stock/photo-1486218119243-13883505764c.jpg",
    color: "linear-gradient(90deg, #276D5F, #318B6B)",
  },
];
