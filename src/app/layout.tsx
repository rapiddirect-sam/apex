import type { Metadata } from "next";
import { Instrument_Serif, Geist_Mono, Space_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./home3.css";
import { AuthProvider } from "@/contexts/AuthContext";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Apex Batch | Precision Manufacturing, Intelligent Living",
  description:
    "Your partner for high-precision batch manufacturing. CNC machining, sheet metal, injection molding, and more with ISO-certified quality.",
  keywords: [
    "CNC machining",
    "precision manufacturing",
    "sheet metal",
    "injection molding",
    "die casting",
    "batch manufacturing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${geistMono.variable} ${spaceMono.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased home3-root">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
