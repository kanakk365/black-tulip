import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Archivo } from 'next/font/google';
import './globals.css';

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});

const sans = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  // Change to the production domain before launch.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.blacktulipmetals.com'),
  title:
    'Black Tulip Metal Bldg. Const. Ind. L.L.C — Structural & Architectural Metal Works, U.A.E.',
  description:
    'Black Tulip Metal Bldg. Const. Ind. L.L.C. — over a decade of credible experience in structural steel, architectural metals, aluminium and glass across Sharjah and Dubai, U.A.E.',
  icons: { icon: '/img/logo/favicon.png' },
  openGraph: {
    title: 'Black Tulip Metal Bldg. Const. Ind. L.L.C.',
    description:
      'Structural & architectural metal works — metals, aluminium and glass. Sharjah & Dubai, U.A.E.',
    images: ['/img/banner/banner-1554979344.jpg'],
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#06301F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
