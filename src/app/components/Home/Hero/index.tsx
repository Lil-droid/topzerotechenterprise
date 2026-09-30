"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const leftAnimation = {
    initial: { x: "-25%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  };
  const rightAnimation = {
    initial: { x: "25%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  };

  return (
    <section className="overflow-x-hidden before:content-[''] before:absolute lg:before:h-full sm:before:h-2/3 before:h-3/5 before:bg-[linear-gradient(135deg,var(--color-blue)_0%,var(--color-secondary)_60%,var(--color-primary)_100%)] before:right-0 lg:before:top-0 before:bottom-0 lg:before:w-40% before:w-full lg:before:z-0 before:z-1 sm:before:block before:hidden after:content-[''] after:absolute after:bg-grey dark:after:bg-darklight after:h-full lg:after:w-60% after:w-full after:left-0 after:top-0 relative h-full lg:py-9.375! pt-24! pb-0!">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md">
        <div className="grid-cols-12 grid z-1 items-center relative">
          <div className="lg:col-span-6 col-span-12 px-4">
            <motion.div {...leftAnimation} className="relative">
              <h1 className="text-dark dark:text-white mb-0 md:text-65 sm:text-4xl text-3xl">
                Websites & Apps That Help Your Business Get Found
              </h1>
              <p className="text-lg font-medium text-black/50 dark:text-white/50 sm:py-1.875 py-5">
                TopZero designs and builds custom websites, online stores and
                mobile &amp; web applications for growing businesses — with
                basic SEO included, so customers can actually find you.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:mb-0 mb-4">
                <Link
                  href="/contact"
                  className="sm:px-2.188 px-4 sm:py-1.125 py-2 rounded-lg text-base hover:cursor-pointer font-semibold bg-primary text-white hover:bg-secondary duration-500 inline-block"
                >
                  Start a Project
                </Link>
                <Link
                  href="/services"
                  className="sm:px-2.188 px-4 sm:py-1.125 py-2 rounded-lg text-base hover:cursor-pointer font-semibold border border-primary text-primary hover:bg-primary hover:text-white duration-500 inline-block"
                >
                  Browse our services
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-6 col-span-12 px-4">
            <motion.div {...rightAnimation} className="relative w-full max-w-lg mx-auto">
              <Image
                src="/images/hero/topzero-hero-illustration.png"
                alt="TopZero builds websites, mobile apps, e-commerce stores and SEO for growing businesses"
                width={1672}
                height={941}
                priority
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;