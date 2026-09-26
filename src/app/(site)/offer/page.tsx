import { Metadata } from "next";
import HeroSub from "@/app/components/SharedComponent/HeroSub";
import OfferDetail from "@/app/components/Offer/OfferDetail";

export const metadata: Metadata = {
  title: "Offer | TopZero",
  description:
    "The first 5 customers who pay a deposit on a website project get 50% off development cost with TopZero.",
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/offer", text: "Offer" },
  ];
  return (
    <>
      <HeroSub
        title="Current Offer"
        description="A limited-time offer for new website projects."
        breadcrumbLinks={breadcrumbLinks}
      />
      <OfferDetail />
    </>
  );
};

export default Page;