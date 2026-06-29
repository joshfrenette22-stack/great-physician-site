import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Great Physician Regenerative Medicine',
  description: 'Terms and conditions for using the Great Physician Regenerative Medicine website.',
};

const TOC = [
  { id: 'acceptance', label: 'Acceptance' },
  { id: 'not-medical-advice', label: 'Not medical advice' },
  { id: 'use-of-site', label: 'Use of the site' },
  { id: 'intellectual-property', label: 'Intellectual property' },
  { id: 'liability', label: 'Limitation of liability' },
  { id: 'changes', label: 'Changes' },
  { id: 'contact', label: 'Contact' },
];

export default function TermsPage() {
  return (
    <>
      {/* Title band */}
      <section className="bg-gray-50 border-b border-gray-200 py-16">
        <div className="max-w-[1120px] mx-auto px-10">
          <p className="gp-eyebrow text-gray-400 mb-4">Legal</p>
          <h1
            className="font-display font-black text-gray-900 tracking-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.625rem)' }}
          >
            Terms &amp; Conditions
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
          <div className="gp-legal">
            {/* Disclaimer banner */}
            <div className="bg-green-50 border border-green-100 rounded-[14px] px-5 py-4 mb-10">
              <p className="text-sm text-green-800 leading-relaxed m-0">
                <strong className="font-semibold">Note:</strong> This is a sample terms &amp; conditions document provided for demonstration purposes. It should be reviewed and customized by a qualified attorney before use.
              </p>
            </div>

            <section id="acceptance" className="mb-10">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">Acceptance</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                By accessing or using the Great Physician Regenerative Medicine website (&ldquo;Site&rdquo;), you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use this Site. These terms apply to all visitors, users, and others who access the Site.
              </p>
            </section>

            <hr className="border-gray-100 mb-10" />

            <section id="not-medical-advice" className="mb-10">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">Not medical advice</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                The content on this Site is for general informational purposes only. Nothing on this Site constitutes medical advice, diagnosis, or treatment. Always seek the guidance of a qualified physician or other licensed healthcare provider with any questions you may have regarding a medical condition.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Using this Site does not create a patient-provider relationship. Submitting a contact form or scheduling inquiry does not constitute medical care or a clinical consultation.
              </p>
            </section>

            <hr className="border-gray-100 mb-10" />

            <section id="use-of-site" className="mb-10">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">Use of the site</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-1 mb-4">
                <li>Use the Site for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any portion of the Site</li>
                <li>Transmit any harmful, offensive, or disruptive content</li>
                <li>Scrape or systematically collect data from the Site without permission</li>
              </ul>
              <p className="text-gray-600 text-base leading-relaxed">
                We reserve the right to terminate access to the Site for anyone who violates these terms.
              </p>
            </section>

            <hr className="border-gray-100 mb-10" />

            <section id="intellectual-property" className="mb-10">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">Intellectual property</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                All content on this Site — including text, images, logos, and design — is the property of Great Physician Regenerative Medicine or its licensors and is protected by applicable copyright and trademark law. You may not reproduce, distribute, or create derivative works without prior written permission.
              </p>
            </section>

            <hr className="border-gray-100 mb-10" />

            <section id="liability" className="mb-10">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">Limitation of liability</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                To the fullest extent permitted by law, Great Physician Regenerative Medicine and its principals shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site or its content.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                The Site is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses.
              </p>
            </section>

            <hr className="border-gray-100 mb-10" />

            <section id="changes" className="mb-10">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">Changes</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                We reserve the right to update these Terms &amp; Conditions at any time. Changes will be effective when posted to this page. Continued use of the Site after any changes constitutes acceptance of the new terms. We encourage you to review this page periodically.
              </p>
            </section>

            <hr className="border-gray-100 mb-10" />

            <section id="contact">
              <h2 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-4">Contact</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                If you have questions about these Terms &amp; Conditions, please contact us:
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
