import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

// TOPZERO_EMAIL is supplied via environment configuration (see .env).
// We never fabricate a contact email — if it isn't set, the email card
// simply isn't shown and WhatsApp remains the primary contact method.
const officialEmail = process.env.TOPZERO_EMAIL;

const ContactInfo = () => {
  return (
    <section className="dark:bg-darkmode">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row flex-col items-stretch justify-center sm:gap-16 gap-8">
          <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
            <div className="bg-primary/20 w-15 h-15 flex items-center justify-center rounded-full shrink-0">
              <Icon icon="ic:baseline-whatsapp" width="28" height="28" className="text-primary" />
            </div>
            <div>
              <span className="text-midnight_text dark:text-white text-xl font-bold">
                WhatsApp Us
              </span>
              <p className="text-black/50 dark:text-white/50 font-normal text-lg max-w-80 pt-3 pb-2">
                The fastest way to reach us — message us directly and we&apos;ll respond as soon as we can.
              </p>
              <Link
                href="https://wa.me/2349057778626"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-secondary"
              >
                +234 905 777 8626
              </Link>
            </div>
          </div>
          {officialEmail && (
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-primary/20 w-15 h-15 flex items-center justify-center rounded-full shrink-0">
                <Icon icon="solar:letter-bold-duotone" width="28" height="28" className="text-primary" />
              </div>
              <div>
                <span className="text-midnight_text dark:text-white text-xl font-bold">
                  Email Us
                </span>
                <p className="text-black/50 dark:text-white/50 font-normal text-lg max-w-80 pt-3 pb-2">
                  Prefer email? Reach out and we&apos;ll get back to you.
                </p>
                <Link
                  href={`mailto:${officialEmail}`}
                  className="text-primary font-semibold hover:text-secondary"
                >
                  {officialEmail}
                </Link>
              </div>
            </div>
          )}
          <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
            <div className="bg-primary/20 w-15 h-15 flex items-center justify-center rounded-full shrink-0">
              <Icon icon="solar:map-point-bold-duotone" width="28" height="28" className="text-primary" />
            </div>
            <div>
              <span className="text-midnight_text dark:text-white text-xl font-bold">
                Location
              </span>
              <p className="text-black/50 dark:text-white/50 font-normal text-lg max-w-80 pt-3 pb-2">
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-solid border-border dark:border-darkborder mt-11"></div>
    </section>
  );
};

export default ContactInfo;