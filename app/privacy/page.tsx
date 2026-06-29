import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Great Physician Regenerative Medicine',
  description: 'Privacy policy for Great Physician Regenerative Medicine.',
};

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'information', label: 'Information we collect' },
  { id: 'how-we-use', label: 'How we use it' },
  { id: 'health-information', label: 'Health information' },
  { id: 'sharing', label: 'Sharing' },
  { id: 'your-rights', label: 'Your rights' },
  { id: 'contact', label: 'Contact' },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Title band */}
      <section className="bg-gray-50 border-b border-gray-200 py-16">
        <div className="max-w-[1120px] mx-auto px-10">
          <p className="gp-eyebrow text-gray-400 mb-4">Legal</p>
          <h1
            className="font-display font-extrabold text-gray-900 tracking-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.625rem)' }}
          >
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-base">Last updated June 1, 2026</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-20">
        <div
          className="max-w-[1120px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 md:gap-16 items-start"
        >
          {/* Sticky TOC — sticky only on md+ */}
          <aside className="md:sticky" style={{ top: 104 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Contents
            </p>
            <ul className="space-y-0.5">
              {TOC.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-teal-700 hover:bg-teal-50 transition-all duration-200 border-l-2 border-transparent hover:border-teal-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <div className="gp-legal prose-like">
            {/* Disclaimer banner */}
            <div className="bg-green-50 border border-green-100 rounded-[14px] px-5 py-4 mb-10">
              <p className="text-sm text-green-800 leading-relaxed m-0">
                <strong className="font-semibold">Note:</strong> This is a sample privacy policy provided for demonstration purposes. It should be reviewed and customized by a qualified attorney before use.
              </p>
            </div>

            <section id="overview" className="mb-10">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">Overview</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Great Physician Regenerative Medicine (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or interact with our practice.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                By using this site, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <hr className="border-gray-100 mb-10" />

            <section id="information" className="mb-10">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">Information we collect</h2>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Information you give us</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                We may collect information you provide directly, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed mb-6 space-y-1">
                <li>Name, email address, and phone number via our contact form</li>
                <li>Health and medical information submitted through intake forms</li>
                <li>Scheduling information submitted through booking tools</li>
                <li>Prayer requests or other voluntary submissions</li>
              </ul>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Information collected automatically</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                When you visit our site, we may automatically collect browser type, IP address, pages visited, and referring URLs for analytics purposes. We do not sell this data.
              </p>
            </section>

            <hr className="border-gray-100 mb-10" />

            <section id="how-we-use" className="mb-10">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">How we use it</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-1">
                <li>Respond to inquiries and schedule appointments</li>
                <li>Provide and improve patient care</li>
                <li>Communicate about your care and appointment reminders</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Pray for individuals who submit prayer requests</li>
              </ul>
            </section>

            <hr className="border-gray-100 mb-10" />

            <section id="health-information" className="mb-10">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">Health information</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Any protected health information (PHI) you share with us is handled in compliance with the Health Insurance Portability and Accountability Act (HIPAA). We implement appropriate administrative, technical, and physical safeguards to protect your health information.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Health information you share via this website&apos;s contact forms is not transmitted over a HIPAA-secure channel. Do not share sensitive medical information through the general contact form. Intake forms accessed through our scheduling platform use HIPAA-compliant infrastructure.
              </p>
            </section>

            <hr className="border-gray-100 mb-10" />

            <section id="sharing" className="mb-10">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">Sharing</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-1">
                <li>Third-party service providers who operate our scheduling and intake tools (Healthie, Calendly)</li>
                <li>Healthcare providers involved in your direct care</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <hr className="border-gray-100 mb-10" />

            <section id="your-rights" className="mb-10">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">Your rights</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data, subject to legal requirements</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                To exercise these rights, contact us using the information below.
              </p>
            </section>

            <hr className="border-gray-100 mb-10" />

            <section id="contact">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">Contact</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 bg-gray-50 rounded-[14px] p-5 text-sm text-gray-600">
                <p className="font-semibold text-gray-900 mb-1">Great Physician Regenerative Medicine</p>
                <p>Northern Colorado</p>
                <p>
                  Phone:{' '}
                  <a href="tel:9705550142" className="text-teal-600 hover:text-teal-700">
                    (970) 555-0142
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
