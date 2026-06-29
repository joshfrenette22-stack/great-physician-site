export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

export const team: TeamMember[] = [
  {
    name: "Dr. Jerry Hric",
    role: "Founder & Regenerative Physician",
    image: "/images/hric-headshot.jpg",
    bio: "Dr. Hric brings years of experience in regenerative and sports medicine to Northern Colorado. Every patient gets unhurried visits, honest guidance, and a clear plan — never a hard sell. Experienced in PRP, prolotherapy, and focused shockwave therapy, Dr. Hric performs every regenerative treatment himself. Conservative-first protocols, surgery only when truly needed.",
  },
  {
    name: "Hope",
    role: "RN",
    bio: "Part of a dedicated circle of clinicians and staff who know you by name.",
  },
  {
    name: "Maria",
    role: "Clinical Staff",
    bio: "Part of a dedicated circle of clinicians and staff who know you by name.",
  },
  {
    name: "Caleb",
    role: "Clinical Staff",
    bio: "Part of a dedicated circle of clinicians and staff who know you by name.",
  },
];
