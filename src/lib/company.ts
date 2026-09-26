import { services } from "@/data/services";

/**
 * Real, confirmed TopZero business facts only. Nothing here should be
 * invented — if a fact isn't known (street address, employee count,
 * awards, certifications, exact pricing) it simply isn't included, so
 * the AI system prompt built from this file can't accidentally assert
 * something we don't actually know to be true.
 */
export const companyInfo = {
  legalName: "Top Zero Technologies Enterprise",
  brandName: "TopZero",
  registrationNumber: "Business Name Registration No. 9703664",
  location: "Lagos, Nigeria",
  website: "https://topzero.tech",
  whatsapp: "+2349057778626",
  whatsappLink: "https://wa.me/2349057778626",
  mission:
    "We help businesses get found, attract more customers and grow through powerful digital solutions.",
  services,
};

export type CompanyInfo = typeof companyInfo;