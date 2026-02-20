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
  title: "Remøy Ventures",
  description:
    "Holding og venture builder – vi bygger og skalerer konsepter innen helse, trening og teknologi.",
  openGraph: {
    title: "Remøy Ventures",
    description:
      "Holding og venture builder – vi bygger og skalerer konsepter innen helse, trening og teknologi.",
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