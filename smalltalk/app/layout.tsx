import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmallTalk — Show up.",
  description:
    "Meet strangers for real conversations. A deposit keeps everyone honest. Proximity check-in keeps it real.",
  metadataBase: new URL("https://smalltalk.app"),
  openGraph: {
    title: "SmallTalk — Show up.",
    description:
      "Meet strangers for real conversations. A deposit keeps everyone honest. Proximity check-in keeps it real.",
    url: "https://smalltalk.app",
    siteName: "SmallTalk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmallTalk — Show up.",
    description:
      "Meet strangers for real conversations. A deposit keeps everyone honest. Proximity check-in keeps it real.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased" style={{ background: "#0D0D0F", color: "#FFFFFF" }}>
        {children}
      </body>
    </html>
  );
}
