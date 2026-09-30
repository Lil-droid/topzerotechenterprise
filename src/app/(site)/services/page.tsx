import ServicesCard from "@/app/components/Services/ServiceCard";
import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Services | TopZero",
  description:
    "Custom website development, e-commerce, mobile & web apps, and SEO — digital solutions built to help your business get found and grow.",
  path: "/services",
});

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Our Services"
        description="From your first website to a full mobile app, TopZero builds the digital solutions your business needs to get found, attract customers and grow."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ServicesCard />
    </>
  );
};

export default Page;