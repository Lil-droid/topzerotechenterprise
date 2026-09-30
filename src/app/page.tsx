import React from "react";
import Hero from "@/app/components/Home/Hero";
import HomeOffer from "@/app/components/Home/Offer";
import Services from "@/app/components/Home/Services";
import Features from "@/app/components/Home/Features";
import ProductDoc from "@/app/components/Home/ProductDoc";
import FAQ from "@/app/components/Home/FAQ";
import Info from "@/app/components/Home/Info";
import { buildPageMetadata } from "@/lib/seo";
import { faqs } from "@/data/faqs";

export const metadata = buildPageMetadata({
  title: "TopZero | Digital Solutions for Businesses",
  description:
    "TopZero helps businesses get found, attract more customers and grow through custom websites, e-commerce stores, mobile & web apps, and SEO.",
  path: "",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <HomeOffer />
      <Services />
      <Features />
      <ProductDoc />
      <FAQ />
      <Info />
    </main>
  );
}