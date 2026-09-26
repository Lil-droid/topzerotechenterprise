"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  "Custom-built websites and apps tailored to your business, not a generic template",
  "Basic SEO included with every website, so you're set up to be found from day one",
  "Ongoing maintenance and support available after your site launches",
  "Clear, transparent process from deposit to delivery",
];

const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const leftAnimation = {
    animate: inView ? { x: 0, opacity: 1 } : { x: "-10%", opacity: 0 },
    transition: { duration: 1, delay: 0.8 },
  };
  const rightAnimation = {
    animate: inView ? { x: 0, opacity: 1 } : { x: "10%", opacity: 0 },
    transition: { duration: 1, delay: 0.8 },
  };
  return (
    <section className="bg-grey dark:bg-darklight overflow-x-hidden">
      <div
        ref={ref}
        className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4"
      >
        <div className="grid grid-cols-12 xl:gap-24 gap-6 gap-y-11 items-center">
          <div className="lg:col-span-6 col-span-12 px-3">
            <motion.div {...leftAnimation} className="relative w-full max-w-md mx-auto">
              {/* Abstract "code + growth" illustration — brand graphic, not a real screenshot */}
              <div className="rounded-2xl bg-dark dark:bg-darkmode shadow-card-shadow p-6 flex flex-col gap-3">
                <div className="flex items-center gap-1.5 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="h-3 w-2/3 rounded bg-primary/70" />
                <div className="h-3 w-5/6 rounded bg-white/15" />
                <div className="h-3 w-1/2 rounded bg-Sky-mist-blue/60" />
                <div className="h-3 w-3/4 rounded bg-white/15" />
                <div className="h-3 w-2/5 rounded bg-primary/70" />
              </div>
              <div className="absolute -bottom-6 -left-4 w-32 rounded-xl bg-white dark:bg-darklight shadow-card-shadow p-4 flex items-center gap-3">
                <Icon icon="solar:graph-up-bold-duotone" width="26" height="26" className="text-primary shrink-0" />
                <div className="flex flex-col gap-1.5 w-full">
                  <span className="h-1.5 w-full rounded bg-Smoke dark:bg-darkmode" />
                  <span className="h-1.5 w-2/3 rounded bg-Smoke dark:bg-darkmode" />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-6 col-span-12 px-3">
            <motion.div {...rightAnimation}>
              <p className="dark:text-white/50 text-black/50 text-lg pb-8 mb-0">
                Why Choose Us
              </p>
              <h3 className="md:text-6xl sm:text-40 text-3xl font-semibold text-dark dark:text-white pb-8">
                Built Around Your Business, Not a Template
              </h3>
              <ul>
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex gap-2 items-center ${index === features.length - 1 ? "" : "pb-6"
                      }`}
                  >
                    <span>
                      <Icon
                        icon="tabler:circle-check"
                        width="25"
                        height="25"
                        className="font-semibold text-success shrink-0"
                      />
                    </span>
                    <p className="text-lg text-black/50 dark:text-white/50">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="py-1.125 px-2.188 bg-primary rounded-lg hover:bg-secondary duration-300 text-white font-semibold block w-fit"
                >
                  All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;