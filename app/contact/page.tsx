import type { Metadata } from 'next';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact | Great Physician Regenerative Medicine',
  description: 'Get in touch with Great Physician Regenerative Medicine. Schedule a visit or ask a question — we respond within one business day.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="bg-white py-20" data-reveal>
        <div
          className="max-w-[1180px] mx-auto px-10"
          style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: '32px', alignItems: 'start' }}
        >
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
