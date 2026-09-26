/**
 * TopZero Promotion Configuration — SINGLE SOURCE OF TRUTH.
 *
 * Every part of the app that shows promotion status or details —
 * the homepage banner, the /offer page, /offer-terms, the AI assistant
 * (Phase 10), and any future admin controls (Phase 13) — must call
 * getPromotionConfig() / isPromotionActive() from this file. Nothing
 * outside this file should hardcode the discount percentage, deadline,
 * slot count, or enabled/disabled status. This is what lets a single
 * change here (e.g. flipping `enabled` to false) immediately and
 * consistently update the banner, the offer page, and the AI's answers
 * everywhere at once.
 *
 * HOW TO DISABLE THE OFFER RIGHT NOW (before the admin UI in Phase 13
 * exists): set `enabled: false` below, or set the PROMOTION_ENABLED
 * environment variable to "false" (the env var takes precedence if
 * present, so ops can flip it without a code change/redeploy of logic,
 * though a redeploy is still required to pick up a new env value in
 * most hosting setups unless it's read at request time, which it is
 * here since this is a plain function call, not a build-time constant).
 *
 * HOW TO UPDATE REMAINING SLOTS: increment/decrement `remainingSlots`
 * by hand as deposits come in, until Phase 13 introduces real admin
 * controls (or a database) for this. This is intentionally a manual,
 * server-side-only value — never controlled by client-side state.
 */

export type PromotionCTA = {
  label: string;
  href: string;
};

export type PromotionConfig = {
  enabled: boolean;
  title: string;
  shortDescription: string;
  description: string;
  discountPercentage: number;
  eligibleCustomerCount: number;
  /** How many of the eligibleCustomerCount slots are still unclaimed. Update by hand for now. */
  remainingSlots: number;
  qualificationEvent: string;
  /** ISO date (YYYY-MM-DD) the offer closes, evaluated at end of day. */
  deadline: string;
  terms: string[];
  cta: PromotionCTA;
};

const promotionConfig: PromotionConfig = {
  enabled: true,
  title: "Get 50% Off Your Website Development Cost",
  shortDescription:
    "The first 5 customers who pay a deposit on a website project get 50% off development.",
  description:
    "TopZero is offering the first 5 eligible customers 50% off the cost of website development. You qualify the moment you pay the required deposit on your project — not by requesting a quote or starting a conversation. Installment payments are available for the rest of the balance.",
  discountPercentage: 50,
  eligibleCustomerCount: 5,
  remainingSlots: 5,
  qualificationEvent: "Paying the required deposit on an eligible website project",
  deadline: "2026-10-30",
  terms: [
    "Open to the first 5 qualifying customers only.",
    "Qualification occurs when the required deposit is paid — not at quote request or conversation stage.",
    "The 50% discount applies only to the website development cost.",
    "Domain registration is not included in the discount.",
    "Hosting and server costs are not included in the discount.",
    "Third-party service costs are not included in the discount.",
    "Paid plugins, software licenses and other paid services are not included in the discount.",
    "Basic SEO is included with the website at no extra cost.",
    "Advanced SEO is available as a separately paid service.",
    "Final pricing depends on the agreed project scope; changes to scope may incur additional charges.",
    "Installment payments may be available for the remaining balance after deposit.",
    "This offer ends October 30, 2026.",
    "The offer may become unavailable earlier if all qualifying slots are filled before the deadline.",
    "The final project agreement governs the commercial relationship between TopZero and the client.",
  ],
  cta: {
    label: "View Offer",
    href: "/offer",
  },
};

/**
 * Returns the current promotion configuration. This is async on purpose:
 * right now it just returns the in-memory object above, but the
 * signature already matches what a future database-backed version
 * (Phase 13) would look like, so callers never need to change when
 * that happens.
 */
export async function getPromotionConfig(): Promise<PromotionConfig> {
  const envOverride = process.env.PROMOTION_ENABLED;
  if (envOverride !== undefined) {
    return { ...promotionConfig, enabled: envOverride === "true" };
  }
  return promotionConfig;
}

/**
 * The single place that decides whether the promotion should actually
 * be shown as active — combining the manual enabled flag, the deadline,
 * and remaining slots. UI code should always call this rather than
 * checking `config.enabled` alone, so date/slot logic is never
 * duplicated or drifts out of sync between components.
 */
export function isPromotionActive(config: PromotionConfig, now: Date = new Date()): boolean {
  if (!config.enabled) return false;
  if (config.remainingSlots <= 0) return false;

  // Deadline is inclusive through the end of that day.
  const deadlineEnd = new Date(`${config.deadline}T23:59:59`);
  if (now.getTime() > deadlineEnd.getTime()) return false;

  return true;
}

/** Human-readable deadline, e.g. "October 30, 2026". */
export function formatPromotionDeadline(config: PromotionConfig): string {
  const date = new Date(`${config.deadline}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}