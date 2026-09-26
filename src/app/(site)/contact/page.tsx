import HeroSub from "@/app/components/SharedComponent/HeroSub";
import ContactForm from "@/app/components/Contact/Form";
import ContactInfo from "@/app/components/Contact/ContactInfo";
import Location from "@/app/components/Contact/OfficeLocation";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | TopZero",
  description:
    "Tell TopZero about your website, e-commerce, mobile or web app project — reach us via WhatsApp or our contact form.",
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Tell us about your project and we'll get back to you — the fastest way to reach us is WhatsApp."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default Page;