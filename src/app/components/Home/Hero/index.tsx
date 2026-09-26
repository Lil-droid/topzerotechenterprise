"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
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
    <section className="overflow-x-hidden before:content-[''] before:absolute lg:before:h-full sm:before:h-2/3 before:h-3/5 before:bg-no-repeat before:bg-[url('/images/hero/right-background.svg')] before:bg-cover before:right-0 lg:before:top-0 before:bottom-0 lg:before:w-40% before:w-full lg:before:z-0 before:z-1 sm:before:block before:hidden after:content-[''] after:absolute after:bg-grey dark:after:bg-darklight after:h-full lg:after:w-60% after:w-full after:left-0 after:top-0 relative h-full lg:py-9.375! pt-24! pb-0!">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md">
        <div className="grid-cols-12 grid z-1 items-center relative">
          <div className="lg:col-span-6 col-span-12 px-4">
            <motion.div
              {...leftAnimation}
              className="relative before:content-[''] before:absolute before:h-full before:w-full before:bg-[url('/images/hero/leftside-backlayer-icons.svg')] before:-left-9.375 before:bg-contain before:bg-no-repeat before:-z-1"
            >
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
            <motion.div {...rightAnimation} className="relative w-full max-w-md mx-auto py-10">
              {/* Abstract "website build" mockup — brand illustration, not a real screenshot */}
              <div className="rounded-2xl bg-white dark:bg-darklight shadow-card-shadow overflow-hidden border border-Snowy-sky dark:border-darkborder">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-grey dark:bg-darkmode">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-primary to-secondary" />
                  <div className="h-3 w-3/4 rounded bg-Smoke dark:bg-darkmode" />
                  <div className="h-3 w-1/2 rounded bg-Smoke dark:bg-darkmode" />
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="h-14 rounded-lg bg-cream dark:bg-darkmode" />
                    <div className="h-14 rounded-lg bg-cream dark:bg-darkmode" />
                    <div className="h-14 rounded-lg bg-cream dark:bg-darkmode" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 w-36 rounded-xl bg-primary shadow-card-shadow p-4 flex flex-col items-center gap-2">
                <Icon icon="solar:smartphone-bold-duotone" width="28" height="28" className="text-white" />
                <span className="h-1.5 w-16 rounded bg-white/40" />
                <span className="h-1.5 w-10 rounded bg-white/40" />
              </div>
              <div className="absolute -top-4 -left-4 w-14 h-14 rounded-full bg-white dark:bg-darklight shadow-card-shadow flex items-center justify-center">
                <Icon icon="solar:graph-up-bold-duotone" width="26" height="26" className="text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;