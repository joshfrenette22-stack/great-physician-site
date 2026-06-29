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
          className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-8 items-start"
        >
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
