import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
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
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
