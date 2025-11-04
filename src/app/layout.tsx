import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: `https://${site.domain}`,
    siteName: site.name,
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: `https://${site.domain}` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
