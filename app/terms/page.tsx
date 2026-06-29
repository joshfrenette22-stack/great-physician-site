import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Great Physician Regenerative Medicine',
  description: 'Terms and conditions for using the Great Physician Regenerative Medicine website.',
};

const TOC = [
  { id: 't-accept', label: 'Acceptance' },
  { id: 't-medical', label: 'Not medical advice' },
  { id: 't-use', label: 'Use of the site' },
  { id: 't-ip', label: 'Intellectual property' },
  { id: 't-liability', label: 'Limitation of liability' },
  { id: 't-changes', label: 'Changes' },
  { id: 't-contact', label: 'Contact' },
];

export default function TermsPage() {
  return (
    <>
      {/* Title band */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1120px] mx-auto" style={{ padding: '64px 40px 56px' }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--text-subtle, #9ca3af)', textTransform: 'uppercase', marginBottom: 14 }}>Legal</p>
          <h1
            className="font-display font-extrabold text-teal-900"
            style={{ fontSize: 58, lineHeight: 1.02, letterSpacing: '-0.035em', margin: 0 }}
          >
            Terms &amp; Conditions
          </h1>
          <p style={{ margin: '18px 0 0', fontSize: 17, color: 'var(--text-muted, #6b7280)' }}>Last updated June 1, 2026</p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-[1120px] mx-auto" style={{ padding: '64px 40px 80px', display: 'grid', gridTemplateColumns: '240px 1fr', gap: 56, alignItems: 'start' }}>
        {/* Sticky TOC */}
        <aside style={{ position: 'sticky', top: 104 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-subtle, #9ca3af)', marginBottom: 16 }}>
            On this page
          </p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {TOC.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{ textDecoration: 'none', color: 'var(--text-muted, #6b7280)', fontSize: 14.5, padding: '7px 12px', borderRadius: 8, borderLeft: '2px solid transparent' }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="gp-legal">
          <section id="t-accept" style={{ paddingTop: 0 }}>
            <div style={{ background: 'var(--green-50, #f0fdf4)', border: '1px solid var(--green-100, #dcfce7)', borderRadius: 14, padding: '20px 24px', marginBottom: 8 }}>
              <p style={{ margin: 0, fontSize: 15.5, color: 'var(--teal-800, #115e59)' }}>These are sample terms provided as a starting point for Great Physician Regenerative Medicine. They should be reviewed by qualified legal counsel before publication.</p>
            </div>
            <h2>Acceptance of terms</h2>
            <p>These Terms &amp; Conditions govern your use of the Great Physician Regenerative Medicine website. By accessing or using the site, you agree to be bound by these terms. If you do not agree, please do not use the site.</p>
          </section>

          <section id="t-medical">
            <h2>Not medical advice</h2>
            <p>The content on this website is provided for general educational purposes only. It is not medical advice and does not create a physician-patient relationship. It is not a substitute for professional diagnosis, treatment, or the judgment of a qualified healthcare provider.</p>
            <p>Always seek the advice of your physician with any questions about a medical condition. <strong style={{ color: 'var(--teal-900, #0f2d3c)' }}>If you are experiencing a medical emergency, call 911 immediately.</strong> Individual results from any treatment vary and are not guaranteed.</p>
          </section>

          <section id="t-use">
            <h2>Use of the site</h2>
            <p>You agree to use this site only for lawful purposes. You may not:</p>
            <ul>
              <li>Use the site in any way that violates applicable law or regulation.</li>
              <li>Attempt to gain unauthorized access to any part of the site or its systems.</li>
              <li>Interfere with or disrupt the integrity or performance of the site.</li>
              <li>Submit false, misleading, or harmful information through our forms.</li>
            </ul>
          </section>

          <section id="t-ip">
            <h2>Intellectual property</h2>
            <p>All content on this site, including text, graphics, logos, and the Great Physician name and marks, is the property of Great Physician Regenerative Medicine or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written permission.</p>
          </section>

          <section id="t-liability">
            <h2>Limitation of liability</h2>
            <p>The site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind. To the fullest extent permitted by law, Great Physician Regenerative Medicine is not liable for any damages arising from your use of, or inability to use, the site or its content.</p>
          </section>

          <section id="t-changes">
            <h2>Changes to these terms</h2>
            <p>We may update these terms from time to time. Changes become effective when posted to this page, and the &ldquo;last updated&rdquo; date will reflect the most recent revision. Your continued use of the site after changes are posted constitutes acceptance of the updated terms.</p>
          </section>

          <section id="t-contact">
            <h2>Contact us</h2>
            <p>Questions about these terms? Reach out:</p>
            <p style={{ marginBottom: 0 }}><strong style={{ color: 'var(--teal-900, #0f2d3c)' }}>Great Physician Regenerative Medicine</strong><br />Phone: (970) 555-0142<br />Northern Colorado</p>
            <p style={{ marginTop: 16 }}><Link href="/contact" style={{ color: 'var(--color-primary, #2c825d)', textDecoration: 'none', fontWeight: 600 }}>Go to our contact page &rarr;</Link></p>
          </section>
        </div>
      </div>
    </>
  );
}
