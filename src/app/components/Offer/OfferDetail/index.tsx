import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  getPromotionConfig,
  isPromotionActive,
  formatPromotionDeadline,
} from "@/lib/promotion";

const OfferDetail = async () => {
  const config = await getPromotionConfig();
  const active = isPromotionActive(config);

  if (!active) {
    return (
      <section className="dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 text-center py-10">
          <Icon
            icon="solar:tag-price-bold-duotone"
            width="56"
            height="56"
            className="text-primary mx-auto mb-4"
          />
          <h3 className="font-semibold text-3xl text-black dark:text-white mb-4">
            There&apos;s No Active Promotion Right Now
          </h3>
          <p className="text-black/50 dark:text-white/50 text-lg max-w-xl mx-auto mb-8">
            Check back later, or reach out and we&apos;ll let you know about
            any current or upcoming offers.
          </p>
          <Link
            href="/contact"
            className="px-6 py-4 bg-primary text-white hover:bg-secondary rounded-lg duration-500 font-semibold inline-block"
          >
            Start a Project
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="dark:bg-darkmode">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-cream dark:bg-darklight text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {config.remainingSlots} of {config.eligibleCustomerCount} spots
              remaining
            </span>
            <h2 className="font-semibold md:text-5xl text-32 text-black dark:text-white mb-6">
              {config.title}
            </h2>
            <p className="text-xl text-black/50 dark:text-white/50 mb-8">
              {config.description}
            </p>
            <Link
              href="/contact"
              className="px-6 py-4 bg-primary text-white hover:bg-secondary rounded-lg duration-500 font-semibold inline-block"
            >
              Start Your Project
            </Link>
          </div>
          <div className="bg-grey dark:bg-darklight rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-black dark:text-white mb-6">
              How It Works
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold shrink-0">
                  %
                </div>
                <div>
                  <p className="font-medium text-black dark:text-white">
                    {config.discountPercentage}% Off Development
                  </p>
                  <p className="text-black/50 dark:text-white/50">
                    Applies to website development cost only.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Icon
                  icon="solar:hand-money-bold-duotone"
                  width="40"
                  height="40"
                  className="text-primary shrink-0"
                />
                <div>
                  <p className="font-medium text-black dark:text-white">
                    How You Qualify
                  </p>
                  <p className="text-black/50 dark:text-white/50">
                    {config.qualificationEvent}. Installments are available.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Icon
                  icon="solar:calendar-bold-duotone"
                  width="40"
                  height="40"
                  className="text-primary shrink-0"
                />
                <div>
                  <p className="font-medium text-black dark:text-white">
                    Offer Ends {formatPromotionDeadline(config)}
                  </p>
                  <p className="text-black/50 dark:text-white/50">
                    Or sooner, once all {config.eligibleCustomerCount} spots
                    are claimed.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-black/50 dark:text-white/50 mt-12">
          Full terms and exclusions apply.{" "}
          <Link href="/offer-terms" className="text-primary underline hover:text-secondary">
            Read the Offer Terms
          </Link>
        </p>
      </div>
    </section>
  );
};

export default OfferDetail;