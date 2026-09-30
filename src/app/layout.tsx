import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./home3.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { VisitTracker } from "@/components/VisitTracker";
import { getQ4AnnouncementBootstrapScript } from "@/components/home3/layout/q4AnnouncementConfig";
import { inter, playfair } from "./fontDefinitions";
import { SiteStructuredData } from "@/components/seo/SiteStructuredData";
import { RouteStructuredData } from "@/components/seo/RouteStructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexbatch.com"),
  title: "Apex Batch | Precision Manufacturing, Intelligent Living",
  description:
    "Your partner for high-precision batch manufacturing. CNC machining, sheet metal, injection molding, and more with ISO-certified quality.",
  icons: {
    icon: "https://apex-batch-images.s3.us-east-1.amazonaws.com/favicon.png",
    shortcut: "https://apex-batch-images.s3.us-east-1.amazonaws.com/favicon.png",
    apple: "https://apex-batch-images.s3.us-east-1.amazonaws.com/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-q4-announcement="hidden" data-q4-project-support="hidden" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://apex-batch-images.s3.us-east-1.amazonaws.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://apex-batch-images.s3.us-east-1.amazonaws.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Defer GTM to reduce main-thread work on mobile (helps TBT / INP); loads after page is interactive */}
        <Script id="gtm" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSZLBQMG');`}
        </Script>
        <Script id="q4-announcement-state" strategy="beforeInteractive">
          {getQ4AnnouncementBootstrapScript()}
        </Script>
      </head>
      <body className="antialiased home3-root">
        <SiteStructuredData />
        <RouteStructuredData />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSZLBQMG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <VisitTracker />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
