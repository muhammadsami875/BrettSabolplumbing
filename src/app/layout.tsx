import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, business } from "@/content/business";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { RevealController } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { plumberSchema, websiteSchema } from "@/lib/schema";

// Archivo's heavy weights at a slightly wide setting echo the vinyl lettering on the trucks.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Plumbing, Heating & Jet Drain Cleaning in Bucks County | Brett Sabol Plumbing",
    template: `%s | ${business.shortName}`,
  },
  description:
    "Master Plumber Brett Sabol and his family-owned team handle plumbing, heating and jet drain cleaning across Bucks County, Montgomery County and Philadelphia.",
  applicationName: business.shortName,
  authors: [{ name: business.shortName }],
  creator: business.shortName,
  formatDetection: { telephone: true, email: true, address: true },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export const viewport: Viewport = {
  themeColor: "#0f2a4f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${archivo.variable} ${publicSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before paint so scroll reveals never hide content without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-[60] rounded-sm bg-navy px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <AnnouncementBar />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <MobileCallBar />
        <RevealController />
        <JsonLd data={[plumberSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
