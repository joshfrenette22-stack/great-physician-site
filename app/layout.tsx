import type { Metadata, Viewport } from 'next';
import { Schibsted_Grotesk, Hanken_Grotesk } from 'next/font/google';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://great-physician-site.vercel.app'),
  title: 'Great Physician Regenerative Medicine | Northern Colorado',
  description: 'Conservative-first regenerative medicine. Physician-performed PRP, prolotherapy, and focused shockwave therapy in Northern Colorado.',
  openGraph: {
    title: 'Great Physician Regenerative Medicine | Northern Colorado',
    description: 'Conservative-first regenerative medicine. Physician-performed PRP, prolotherapy, and focused shockwave therapy in Northern Colorado.',
    type: 'website',
    siteName: 'Great Physician Regenerative Medicine',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Great Physician Regenerative Medicine | Northern Colorado',
    description: 'Conservative-first regenerative medicine. Physician-performed PRP, prolotherapy, and focused shockwave therapy in Northern Colorado.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#235A7C',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${schibstedGrotesk.variable} ${hankenGrotesk.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-600 focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
