import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

const footerCompany = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Offer", href: "/offer" },
  { label: "Contact", href: "/contact" },
];

const Footer: FC = () => {
  return (
    <footer className="bg-Dark-primary dark:bg-darklight py-17 pb-6">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-12 sm:gap-1.875 gap-5">
          <div className="lg:col-span-4 col-span-12">
            <div className="md:pe-7.5">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo/topzero-logo.png"
                  alt="TopZero"
                  width={40}
                  height={30}
                />
                <span className="text-xl font-bold text-white">TopZero</span>
              </Link>
              <p className="mb-0 font-medium text-lg text-white/50 pt-2.188 pb-1.875">
                We help businesses get found, attract more customers and grow
                through powerful digital solutions.
              </p>
              <p className="text-lg font-medium text-white mb-0">
                Lagos, Nigeria
              </p>
              <p className="text-white/50 text-lg font-medium mb-0">
                WhatsApp:{" "}
                <Link
                  href="https://wa.me/2349057778626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary"
                >
                  +234 905 777 8626
                </Link>
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 sm:col-span-6 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-medium mb-2.375">
              Services
            </h4>
            <ul>
              {services.map((item) => (
                <li key={item.slug} className="pb-1.563">
                  <Link
                    href={`/services/${item.slug}`}
                    className="text-lg font-medium text-white/50 hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 sm:col-span-6 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-medium mb-2.375">
              Company
            </h4>
            <ul>
              {footerCompany.map((item, index) => (
                <li key={index} className="pb-1.563">
                  <Link
                    href={item.href}
                    className="text-lg font-medium text-white/50 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 md:col-span-7 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-medium sm:mb-2.375 mb-6">
              Ready to start?
            </h4>
            <p className="text-lg text-white/50 font-medium mb-4">
              Tell us about your project and we&apos;ll get back to you
              through WhatsApp.
            </p>
            <div className="flex sm:flex-nowrap flex-wrap items-center gap-2">
              <Link
                href="/contact"
                className="py-4 px-6 bg-primary text-white hover:bg-secondary rounded-lg duration-500 sm:w-fit w-full text-center font-semibold"
              >
                Start a Project
              </Link>
              <Link
                href="https://wa.me/2349057778626"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white rounded-lg duration-500 sm:w-fit w-full text-center font-semibold"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:flex-nowrap flex-wrap gap-6 items-center justify-between sm:pt-17 pt-10">
          <p className="text-lg font-medium text-white/50">
            &copy; {new Date().getFullYear()} Top Zero Technologies Enterprise.
            All rights reserved. Business Name Registration No. 9703664.
          </p>
          <div className="flex items-center gap-6 shrink-0">
            <Link href="/terms" className="text-white/50 hover:text-primary font-medium">
              Terms
            </Link>
            <Link href="/privacy" className="text-white/50 hover:text-primary font-medium">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;