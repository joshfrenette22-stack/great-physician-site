import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Great Physician Regenerative Medicine',
  description: 'Privacy policy for Great Physician Regenerative Medicine.',
};

const TOC = [
  { id: 'p-intro', label: 'Overview' },
  { id: 'p-collect', label: 'Information we collect' },
  { id: 'p-use', label: 'How we use it' },
  { id: 'p-phi', label: 'Health information' },
  { id: 'p-share', label: 'Sharing' },
  { id: 'p-rights', label: 'Your rights' },
  { id: 'p-contact', label: 'Contact' },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Title band */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1120px] mx-auto" style={{ padding: '64px 40px 56px' }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--text-subtle, #9ca3af)', textTransform: 'uppercase', marginBottom: 14 }}>Legal</p>
          <h1
            className="font-display font-black text-teal-900"
            style={{ fontSize: 58, lineHeight: 1.02, letterSpacing: '-0.035em', margin: 0 }}
          >
            Privacy Policy
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
          <section id="p-intro" style={{ paddingTop: 0 }}>
            <div style={{ background: 'var(--green-50, #f0fdf4)', border: '1px solid var(--green-100, #dcfce7)', borderRadius: 14, padding: '20px 24px', marginBottom: 8 }}>
              <p style={{ margin: 0, fontSize: 15.5, color: 'var(--teal-800, #115e59)' }}>This is a sample privacy policy provided as a starting point for Great Physician Regenerative Medicine. It should be reviewed by qualified legal counsel before publication.</p>
            </div>
            <h2>Overview</h2>
            <p>Great Physician Regenerative Medicine (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This policy explains what information we collect when you visit our website or contact us, how we use it, and the choices you have. By using our site or submitting a consultation request, you agree to the practices described here.</p>
          </section>

          <section id="p-collect">
            <h2>Information we collect</h2>
            <p>We collect information you provide directly and information gathered automatically as you use our site.</p>
            <h3>Information you give us</h3>
            <ul>
              <li>Contact details such as your name, email address, and phone number.</li>
              <li>The general nature of your concern when you submit a consultation request.</li>
              <li>Any additional information you choose to include in messages to us.</li>
            </ul>
            <h3>Information collected automatically</h3>
            <ul>
              <li>Basic device and browser data, such as IP address and browser type.</li>
              <li>Usage data about the pages you view, collected through standard analytics.</li>
            </ul>
          </section>

          <section id="p-use">
            <h2>How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to consultation requests and other inquiries.</li>
              <li>Schedule and coordinate appointments.</li>
              <li>Improve our website and understand how it is used.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </section>

          <section id="p-phi">
            <h2>Health information</h2>
            <p>Information submitted through our website is not intended to include detailed protected health information. Any clinical information you share during care is handled in accordance with applicable healthcare privacy laws, including HIPAA where it applies, and the separate Notice of Privacy Practices provided at your visit.</p>
            <p>Please do not include sensitive medical details in website forms. If you have a medical emergency, call 911.</p>
          </section>

          <section id="p-share">
            <h2>How we share information</h2>
            <p>We share information only as needed to operate the practice and as permitted by law, including with:</p>
            <ul>
              <li>Service providers who help us run our website and communications, under confidentiality obligations.</li>
              <li>Professionals involved in coordinating your care, with appropriate safeguards.</li>
              <li>Authorities when required by law or to protect rights and safety.</li>
            </ul>
          </section>

          <section id="p-rights">
            <h2>Your choices and rights</h2>
            <p>You may request access to, correction of, or deletion of the personal information we hold about you, subject to legal and recordkeeping requirements. You can also opt out of non-essential communications at any time by contacting us.</p>
          </section>

          <section id="p-contact">
            <h2>Contact us</h2>
            <p>If you have questions about this policy or your information, reach out:</p>
            <p style={{ marginBottom: 0 }}><strong style={{ color: 'var(--teal-900, #0f2d3c)' }}>Great Physician Regenerative Medicine</strong><br />Phone: (970) 555-0142<br />Northern Colorado</p>
            <p style={{ marginTop: 16 }}><Link href="/contact" style={{ color: 'var(--color-primary, #2c825d)', textDecoration: 'none', fontWeight: 600 }}>Go to our contact page &rarr;</Link></p>
          </section>
        </div>
      </div>
    </>
  );
}
