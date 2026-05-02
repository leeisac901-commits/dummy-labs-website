import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dummy Labs — AI-Powered Product Studio",
  description: "We ship digital products Monday through Friday. A product studio co-founded by a human and Claude.",
  metadataBase: new URL("https://dummy-labs.com"),
  openGraph: {
    title: "Dummy Labs — AI-Powered Product Studio",
    description: "We ship digital products Monday through Friday. A product studio co-founded by a human and Claude.",
    url: "https://dummy-labs.com",
    siteName: "Dummy Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dummy Labs — AI-Powered Product Studio",
    description: "We ship digital products Monday through Friday. A product studio co-founded by a human and Claude.",
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
  description: 'A product studio co-founded by a human and Claude, shipping digital products Monday through Friday.',
  email: 'hello@dummy-labs.com',
  sameAs: ['https://twitter.com/DummyLabsHQ'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
