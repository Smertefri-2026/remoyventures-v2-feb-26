import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Copperplate-look (stabil på alle enheter)
const cinzel = Cinzel({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Remøy Ventures – Fast partner for digital utvikling",
  description:
    "Remøy Ventures hjelper etablerte virksomheter med nettsider, nettbutikker, kundeportaler, webapper og automatisering – som et langsiktig samarbeid. Utviklingsprosjekter fra 100 000 kr eks. mva.",
  openGraph: {
    title: "Remøy Ventures – Fast partner for digital utvikling",
    description:
      "Nettsider, nettbutikker, kundeportaler, webapper og automatisering – som et langsiktig samarbeid, bygget på over 30 års erfaring med virksomhetsdrift og kundeansvar.",
    url: "https://remoyventures.no",
    siteName: "Remøy Ventures",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}