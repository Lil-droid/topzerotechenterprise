import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/app/components/ScrollToTop";
import TopZeroChat from "@/app/components/Chat/TopZeroChat";
import SessionProviderComp from "@/app/provider/nextauth/SessionProvider";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TopZero | Digital Solutions for Businesses",
  description:
    "TopZero helps businesses get found, attract more customers and grow through custom websites, e-commerce stores, mobile & web apps, and SEO.",
};

// Sitewide Organization structured data. Only confirmed facts —
// no invented street address, social profiles, or founding date.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "Top Zero Technologies Enterprise",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/topzero-logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+2349057778626",
    url: "https://wa.me/2349057778626",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <NextTopLoader color="#047857" />
        <SessionProviderComp session={null}>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
            <TopZeroChat />
          </ThemeProvider>
        </SessionProviderComp>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}