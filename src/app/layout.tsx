import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Boris B. Painting LLC - Expert Exterior Painting in North Port, FL | 52 Years Experience",
    template: "%s | Boris B. Painting LLC",
  },
  description:
    "European master painter with 52 years of experience. Specializing in exterior painting with a 15-year written warranty. Serving North Port, Venice, Sarasota, and Tampa Bay. Uses Benjamin Moore & Sherwin-Williams exclusively.",
  openGraph: {
    title: "Boris B. Painting LLC - North Port's Trusted Painting Expert",
    description:
      "European master painter with 52 years of experience. 15-year written warranty. Benjamin Moore & Sherwin-Williams exclusively.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boris B. Painting LLC - North Port's Trusted Painting Expert",
    description:
      "European master painter with 52 years of experience. 15-year written warranty on all exterior work.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Boris B. Painting LLC",
              description:
                "European master painter with 52 years of experience specializing in exterior painting. 15-year written warranty.",
              telephone: "+19415366686",
              email: "expertpaintersfl@gmail.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "North Port",
                addressRegion: "FL",
                postalCode: "34287",
                addressCountry: "US",
              },
              openingHours: "Mo-Sa 07:00-18:00",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "42",
              },
              areaServed: [
                "North Port",
                "Venice",
                "Sarasota",
                "Bradenton",
                "St. Petersburg",
                "Tampa",
                "Englewood",
                "Port Charlotte",
              ],
              founder: {
                "@type": "Person",
                name: "Borislav Todorovich",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${dmSerif.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
