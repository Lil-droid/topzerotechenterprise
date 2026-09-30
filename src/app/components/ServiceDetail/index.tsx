import React from "react";
import { Icon } from "@iconify/react";
import HeroSub from "@/app/components/SharedComponent/HeroSub";
import ServiceImage from "./ServiceImage";
import { services } from "@/data/services";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

type ServiceDetailProps = {
  slug: string;
};

const ServiceDetail = ({ slug }: ServiceDetailProps) => {
  const item = services.find((service) => service.slug === slug);

  if (!item) {
    return null;
  }

  const breadcrumbLinks = [
    { href: "/services", text: "Services" },
    { href: `/services/${item.slug}`, text: item.title },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Lagos, Nigeria",
    url: `${SITE_URL}/services/${item.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <HeroSub
        title={item.title}
        description={item.description}
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="mx-auto w-full max-w-sm">
              <ServiceImage src={item.image} alt={item.title} />
            </div>
            <div>
              <h3 className="font-semibold md:text-5xl text-32 text-black dark:text-white lg:text-start text-center mb-4">
                What It <span className="text-primary">Does</span>
              </h3>
              <p className="text-xl text-black/50 dark:text-white/50">
                {item.detail}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grey dark:bg-darklight">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
          <h4 className="font-semibold md:text-40 text-32 text-black dark:text-white lg:text-start text-center">
            Features
          </h4>
          <ul className="mt-4 text-xl">
            {item.features.map((feature, index) => (
              <li key={index} className="my-3">
                <div className="flex items-start sm:gap-5 gap-3">
                  <div>
                    <Icon
                      icon="solar:check-circle-linear"
                      width="18"
                      height="18"
                      className="font-semibold text-primary mt-2 w-4 h-4"
                    />
                  </div>
                  <p className="text-xl text-black/50 dark:text-white/50">
                    <span className="font-medium text-black dark:text-white">
                      {feature.title}:
                    </span>{" "}
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;