import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InkCraft Studio | Premium Tattoo & Piercing in Brooklyn, NY",
  description:
    "InkCraft Studio is Brooklyn's premier tattoo and piercing studio. Custom tattoos, cover-ups, fine line, traditional, realism, and professional piercings by award-winning artists. Book your appointment today.",
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
  openGraph: {
    title: "InkCraft Studio | Premium Tattoo & Piercing in Brooklyn, NY",
    description:
      "Brooklyn's premier tattoo and piercing studio. Custom artwork by award-winning artists.",
    url: "https://inkcraft-studio.com",
    siteName: "InkCraft Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InkCraft Studio | Premium Tattoo & Piercing",
    description:
      "Brooklyn's premier tattoo and piercing studio. Custom artwork by award-winning artists.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
