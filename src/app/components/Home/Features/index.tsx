"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
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
            <motion.div {...leftAnimation} className="relative w-full max-w-lg mx-auto">
              <Image
                src="/images/home/topzero-features-illustration.png"
                alt="TopZero builds custom mobile and web apps for iOS and Android, from idea to launch"
                width={1672}
                height={941}
                className="w-full h-auto"
              />
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