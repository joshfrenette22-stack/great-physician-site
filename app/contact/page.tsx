import type { Metadata } from 'next';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';
import { BreadcrumbJsonLd } from '@/lib/seo/structured-data';

export const metadata: Metadata = {
  title: 'Contact Us — Schedule a Visit or Ask a Question',
  description: 'Get in touch with Great Physician Regenerative Medicine in Northern Colorado. Call (970) 555-0142, send a message, or schedule a visit. We respond within one business day.',
  alternates: { canonical: 'https://great-physician-site.vercel.app/contact' },
  openGraph: {
    title: 'Contact Great Physician Regenerative Medicine',
    description: 'Schedule a visit or ask a question. Mon-Thu 8-5, Fri 8-12. Northern Colorado.',
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://great-physician-site.vercel.app' },
        { name: 'Contact', url: 'https://great-physician-site.vercel.app/contact' },
      ]} />
      <ContactHero />
      <section id="form" className="bg-white py-12 md:py-20">
        <div
          className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-10 md:gap-16 items-start"
        >
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
