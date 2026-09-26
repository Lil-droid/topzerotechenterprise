export type Service = {
  icon: string;
  title: string;
  slug: string;
  description: string;
};

// Single source of truth for TopZero's core services. Used by the
// homepage services grid and the site footer so names/slugs/copy never
// drift out of sync. The individual /services/[slug] pages (Phase 4)
// should read from this same list.
export const services: Service[] = [
  {
    icon: "solar:code-square-bold-duotone",
    title: "Web Development",
    slug: "web-development",
    description:
      "Custom-built business websites that load fast, look professional, and are designed to turn visitors into customers.",
  },
  {
    icon: "solar:cart-large-4-bold-duotone",
    title: "E-Commerce",
    slug: "ecommerce",
    description:
      "Online stores built to showcase your products and make it easy for customers to browse, pay and check out securely.",
  },
  {
    icon: "solar:smartphone-bold-duotone",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Native and cross-platform mobile apps that bring your business to your customers' pockets.",
  },
  {
    icon: "solar:widget-5-bold-duotone",
    title: "Web App Development",
    slug: "web-app-development",
    description:
      "Custom web applications built around how your business actually works, from internal tools to customer portals.",
  },
  {
    icon: "solar:graph-up-bold-duotone",
    title: "SEO Optimization",
    slug: "seo",
    description:
      "Basic SEO comes standard with every TopZero website, with advanced SEO available to help you rank higher and get found.",
  },
];