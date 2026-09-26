import { Metadata } from "next";
import { Icon } from "@iconify/react";
import HeroSub from "@/app/components/SharedComponent/HeroSub";
import Link from "next/link";
import {
  getPromotionConfig,
  isPromotionActive,
  formatPromotionDeadline,
} from "@/lib/promotion";

export const metadata: Metadata = {
  title: "Offer Terms | TopZero",
  description:
    "Full terms and conditions for TopZero's current website development discount offer.",
};

const Page = async () => {
  const config = await getPromotionConfig();
  const active = isPromotionActive(config);

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/offer-terms", text: "Offer Terms" },
  ];

  return (
    <>
      <HeroSub
        title="Offer Terms"
        description="Full terms and conditions for the current TopZero offer."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 max-w-3xl">
          {/* Live status, always derived from the single promotion config —
              never a separately-maintained "is this still active" note. */}
          <div
            className={`flex items-start gap-3 rounded-lg p-4 mb-10 ${active
                ? "bg-cream dark:bg-darklight"
                : "bg-grey dark:bg-darklight"
              }`}
          >
            <Icon
              icon={active ? "solar:check-circle-bold-duotone" : "solar:info-circle-bold-duotone"}
              width="24"
              height="24"
              className={active ? "text-primary shrink-0 mt-0.5" : "text-black/50 dark:text-white/50 shrink-0 mt-0.5"}
            />
            <p className="text-black/70 dark:text-white/70">
              {active ? (
                <>
                  This offer is <strong>currently active</strong>, with{" "}
                  {config.remainingSlots} of {config.eligibleCustomerCount}{" "}
                  spots remaining, ending {formatPromotionDeadline(config)}.
                </>
              ) : (
                <>This offer is not currently active.</>
              )}
            </p>
          </div>

          <h2 className="font-semibold text-3xl text-black dark:text-white mb-6">
            {config.title}
          </h2>

          <ol className="space-y-4 list-decimal list-inside">
            {config.terms.map((term, index) => (
              <li key={index} className="text-lg text-black/70 dark:text-white/70 pl-2">
                {term}
              </li>
            ))}
          </ol>

          <p className="text-black/50 dark:text-white/50 mt-10 text-sm">
            These terms describe the offer in plain language and are not a
            substitute for legal advice. The final project agreement between
            you and TopZero governs the commercial relationship for your
            project.
          </p>

          <div className="mt-10">
            <Link
              href="/offer"
              className="text-primary underline hover:text-secondary font-medium"
            >
              Back to the Offer page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;