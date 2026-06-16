import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const DESCRIPTION =
  "A community and media project for non-technical professionals using AI to do real work. By one of them.";

export const metadata: Metadata = {
  title: "Dummy Labs — Build anyway.",
  description: DESCRIPTION,
  metadataBase: new URL("https://dummy-labs.com"),
  openGraph: {
    title: "Dummy Labs — Build anyway.",
    description: DESCRIPTION,
    url: "https://dummy-labs.com",
    siteName: "Dummy Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dummy Labs — Build anyway.",
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/brand/dummy-labs-icon.png',
    apple: '/brand/dummy-labs-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dummy Labs',
  url: 'https://dummy-labs.com',
  description: DESCRIPTION,
  email: 'hello@dummy-labs.com',
  sameAs: ['https://twitter.com/DummyLabsHQ'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-to-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
