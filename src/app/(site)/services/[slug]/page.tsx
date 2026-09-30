import React from "react";
import { notFound } from "next/navigation";
import ServiceDetail from "@/app/components/ServiceDetail";
import { services } from "@/data/services";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | TopZero",
      description: "The requested service could not be found.",
    };
  }

  return buildPageMetadata({
    title: `${service.title} | TopZero`,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail slug={slug} />;
};

export default Page;