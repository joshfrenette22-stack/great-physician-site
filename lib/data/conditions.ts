export interface Condition {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

export const conditions: Condition[] = [
  {
    id: "knee-hip-shoulder",
    name: "Knee, hip & shoulder pain",
    subtitle: "Knee · Hip · Shoulder",
    description:
      "Arthritis, rotator cuff, bursitis and the joint pain that limits everyday movement.",
    image: "/images/stock/photo-1576765608866-5b51046452be.jpg",
  },
  {
    id: "tendon-ligament",
    name: "Tendon & ligament injuries",
    subtitle: "Tendon & ligament",
    description:
      "Plantar fasciitis, tennis & golfer's elbow, Achilles and the slow-healing soft-tissue injuries.",
    image: "/images/stock/photo-1530549387789-4c1017266635.jpg",
  },
  {
    id: "sports-overuse",
    name: "Sports & overuse injuries",
    subtitle: "Sports & overuse",
    description:
      "From weekend golf and pickleball to training loads that outpaced recovery.",
    image: "/images/stock/photo-1486218119243-13883505764c.jpg",
  },
  {
    id: "arthritis-joints",
    name: "Arthritis & degenerative joints",
    subtitle: "Arthritis & joints",
    description:
      "Degenerative joint conditions where the goal is function, mobility and relief.",
    image: "/images/stock/photo-1576765608535-5f04d1e3f289.jpg",
  },
  {
    id: "back-neck",
    name: "Back & neck pain",
    subtitle: "Back & spine",
    description:
      "Certain types of back and joint pain that haven't responded to rest or therapy.",
    image: "/images/stock/photo-1521119989659-a83eee488004.jpg",
  },
  {
    id: "chronic-pain",
    name: "Chronic pain",
    subtitle: "Ongoing & unresolved",
    description:
      "Pain that hasn't responded to other care, where it's worth a second conversation.",
    image: "/images/stock/photo-1551836022-d5d88e9218df.jpg",
  },
];
