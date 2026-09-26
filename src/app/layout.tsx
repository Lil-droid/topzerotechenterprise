import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/app/components/ScrollToTop";
import TopZeroChat from "@/app/components/Chat/TopZeroChat";
import SessionProviderComp from "@/app/provider/nextauth/SessionProvider";
import NextTopLoader from "nextjs-toploader";
const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
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
      </body>
    </html>
  );
}