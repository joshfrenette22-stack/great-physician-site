import type { Metadata, Viewport } from 'next';
import { Schibsted_Grotesk, Hanken_Grotesk } from 'next/font/google';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { OrganizationJsonLd } from '@/lib/seo/structured-data';
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
  title: {
    default: 'Great Physician Regenerative Medicine | PRP, Prolotherapy & Shockwave in Northern Colorado',
    template: '%s | Great Physician Regenerative Medicine',
  },
  description: 'Conservative-first regenerative medicine in Northern Colorado. Physician-performed PRP therapy, prolotherapy, and focused shockwave therapy by Dr. Jerry Hric. No hype — just honest, evidence-based care.',
  keywords: ['regenerative medicine', 'PRP therapy', 'prolotherapy', 'shockwave therapy', 'Northern Colorado', 'Dr. Jerry Hric', 'sports medicine', 'joint pain treatment', 'tendon repair', 'conservative care'],
  authors: [{ name: 'Dr. Jerry Hric', url: 'https://great-physician-site.vercel.app/about' }],
  creator: 'Great Physician Regenerative Medicine',
  publisher: 'Great Physician Regenerative Medicine',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Great Physician Regenerative Medicine | Northern Colorado',
    description: 'Conservative-first regenerative medicine. Physician-performed PRP, prolotherapy, and focused shockwave therapy by Dr. Jerry Hric in Northern Colorado.',
    type: 'website',
    siteName: 'Great Physician Regenerative Medicine',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Great Physician Regenerative Medicine — Conservative-first regenerative care in Northern Colorado' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Great Physician Regenerative Medicine | Northern Colorado',
    description: 'Conservative-first regenerative medicine. Physician-performed PRP, prolotherapy, and focused shockwave therapy by Dr. Jerry Hric.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://great-physician-site.vercel.app',
  },
};

export const viewport: Viewport = {
  themeColor: '#235A7C',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${schibstedGrotesk.variable} ${hankenGrotesk.variable}`}>
      <body>
        <OrganizationJsonLd />
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
