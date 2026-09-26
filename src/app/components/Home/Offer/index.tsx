import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  getPromotionConfig,
  isPromotionActive,
  formatPromotionDeadline,
} from "@/lib/promotion";

// Homepage promotional banner. This is the "homepage promotional banner"
// referenced in the single-source-of-truth architecture — it renders
// nothing at all when the promotion is disabled, expired, or out of
// slots, so turning the promotion off (config.enabled = false) makes
// this section disappear automatically, with no separate flag to update.
const HomeOffer = async () => {
  const config = await getPromotionConfig();
  if (!isPromotionActive(config)) return null;

  return (
    <section className="dark:bg-darkmode">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="text-center lg:text-left">
            <span className="inline-block bg-white/15 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {config.remainingSlots} of {config.eligibleCustomerCount} spots left
              &middot; Ends {formatPromotionDeadline(config)}
            </span>
            <h3 className="text-white font-semibold md:text-4xl text-2xl mb-3">
              {config.title}
            </h3>
            <p className="text-white/80 text-lg max-w-xl">
              {config.shortDescription}
            </p>
          </div>
          <Link
            href={config.cta.href}
            className="shrink-0 bg-white text-primary hover:bg-grey px-6 py-4 rounded-lg font-semibold duration-500 inline-flex items-center gap-2"
          >
            {config.cta.label}
            <Icon icon="solar:arrow-right-linear" width="20" height="20" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeOffer;