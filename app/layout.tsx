import type { Metadata, Viewport } from "next";
import { Josefin_Sans, DM_Sans } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-josefin",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Milestone | Apps, websites, ERP and SEO", template: "%s | Milestone" },
  description: site.description,
  openGraph: {
    title: "Milestone",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0e0e" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${josefin.variable} ${dmSans.variable}`}>
      <body className="bg-bg font-sans text-base leading-relaxed text-fg antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
