const BASE_URL = "https://great-physician-site.vercel.app";

const ORG_REFERENCE = {
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: "Great Physician Regenerative Medicine",
  url: BASE_URL,
};

// ─── OrganizationJsonLd ────────────────────────────────────────────────────

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    name: "Great Physician Regenerative Medicine",
    url: BASE_URL,
    telephone: "+19705550142",
    description:
      "Conservative-first regenerative medicine. Physician-performed PRP, prolotherapy, and focused shockwave therapy.",
    image: `${BASE_URL}/og-image.png`,
    priceRange: "$$",
    medicalSpecialty: "Musculoskeletal",
    areaServed: {
      "@type": "State",
      name: "Colorado",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "08:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "00:00",
        closes: "00:00",
      },
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── PhysicianJsonLd ───────────────────────────────────────────────────────

export function PhysicianJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Jerry Hric",
    medicalSpecialty: "Regenerative Medicine",
    worksFor: ORG_REFERENCE,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── ServiceJsonLd ─────────────────────────────────────────────────────────

interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url,
    provider: ORG_REFERENCE,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── FaqPageJsonLd ─────────────────────────────────────────────────────────

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqPageJsonLdProps {
  items: FaqItem[];
}

export function FaqPageJsonLd({ items }: FaqPageJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── BreadcrumbJsonLd ──────────────────────────────────────────────────────

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, url }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── WebSiteJsonLd ─────────────────────────────────────────────────────────

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Great Physician Regenerative Medicine",
    url: BASE_URL,
    description:
      "Conservative-first regenerative medicine. Physician-performed PRP, prolotherapy, and focused shockwave therapy.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/resources?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
