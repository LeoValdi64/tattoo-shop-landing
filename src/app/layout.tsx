import type { Metadata } from "next";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://inkcraft-studio.com",
  name: "InkCraft Studio",
  url: "https://inkcraft-studio.com",
  description:
    "Brooklyn's premier tattoo and piercing studio. Custom tattoos, cover-ups, fine line, traditional, realism, and professional piercings.",
  image: "/og-image.png",
  telephone: "(718) 555-0142",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Williamsburg",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7081,
    longitude: -73.9571,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "21:00",
    },
  ],
  priceRange: "$$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://inkcraft-studio.com"),
  title: "InkCraft Studio | Tattoo & Piercing Brooklyn NY",
  description:
    "Brooklyn's premier tattoo and piercing studio. Custom tattoos, cover-ups, fine line, traditional, and realism by award-winning artists.",
  keywords: [
    "tattoo studio Brooklyn",
    "Brooklyn tattoo shop",
    "custom tattoos NYC",
    "piercing Brooklyn",
    "fine line tattoo",
    "traditional tattoo",
    "realism tattoo",
    "cover up tattoo",
    "tattoo artist Brooklyn NY",
    "InkCraft Studio",
  ],
  authors: [{ name: "InkCraft Studio" }],
  alternates: {
    canonical: "https://inkcraft-studio.com",
  },
  openGraph: {
    title: "InkCraft Studio | Tattoo & Piercing Brooklyn NY",
    description:
      "Brooklyn's premier tattoo and piercing studio. Custom artwork by award-winning artists.",
    url: "https://inkcraft-studio.com",
    siteName: "InkCraft Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InkCraft Studio - Premium Tattoo and Piercing in Brooklyn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InkCraft Studio | Tattoo & Piercing Brooklyn NY",
    description:
      "Brooklyn's premier tattoo and piercing studio. Custom artwork by award-winning artists.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
