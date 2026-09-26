import React from "react";
import { Metadata } from "next";
import Hero from "@/app/components/Home/Hero";
import HomeOffer from "@/app/components/Home/Offer";
import Services from "@/app/components/Home/Services";
import Features from "@/app/components/Home/Features";
import ProductDoc from "@/app/components/Home/ProductDoc";
import FAQ from "@/app/components/Home/FAQ";
import Info from "@/app/components/Home/Info";

export const metadata: Metadata = {
  title: "TopZero | Digital Solutions for Businesses",
  description:
    "TopZero helps businesses get found, attract more customers and grow through custom websites, e-commerce stores, mobile & web apps, and SEO.",
};

export default function Home() {
  return (
    <main>
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