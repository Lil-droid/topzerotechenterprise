export type ServiceFeature = {
  title: string;
  description: string;
};

export type Service = {
  icon: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  detail: string;
  features: ServiceFeature[];
};

export const services: Service[] = [
  {
    icon: "solar:code-square-bold-duotone",
    title: "Web Development",
    slug: "web-development",
    image: "/images/ServiceDetail/web-development.png",
    description:
      "Custom-built business websites that load fast, look professional, and are designed to turn visitors into customers.",
    detail:
      "We design and build custom business websites from the ground up — no generic drag-and-drop templates. Every site is planned around what your business does and who your customers are, then built to load quickly, work well on mobile, and clearly guide visitors toward contacting you or making a purchase. Basic SEO is included with every website we build, so your site is set up to be found on search engines from day one.",
    features: [
      {
        title: "Custom Design",
        description:
          "A website designed around your brand and business, not a one-size-fits-all template.",
      },
      {
        title: "Mobile-Responsive",
        description:
          "Your site works properly on phones, tablets, laptops and desktops.",
      },
      {
        title: "Basic SEO Included",
        description:
          "On-page basics — titles, descriptions and structure — are handled as part of every build.",
      },
      {
        title: "Fast Loading",
        description:
          "Pages are optimized to load quickly, which matters for both visitors and search rankings.",
      },
    ],
  },
  {
    icon: "solar:cart-large-4-bold-duotone",
    title: "E-Commerce",
    slug: "ecommerce",
    image: "/images/ServiceDetail/eCommerceImage.png",
    description:
      "Online stores built to showcase your products and make it easy for customers to browse, pay and check out securely.",
    detail:
      "We build online stores that make it easy for customers to find your products, understand what you're selling, and check out without friction. That includes product listings, a shopping cart and a secure checkout flow connected to the payment methods your business needs. As with all our websites, basic SEO is included so your products and store pages are set up to be discoverable.",
    features: [
      {
        title: "Product Catalog",
        description:
          "A clean, organized way to showcase your products with images, descriptions and pricing.",
      },
      {
        title: "Secure Checkout",
        description:
          "A straightforward, secure checkout flow connected to the payment options your business needs.",
      },
      {
        title: "Order Management",
        description:
          "A way to keep track of orders as they come in, so nothing gets missed.",
      },
      {
        title: "Mobile-Friendly Shopping",
        description:
          "A store that works properly for customers browsing and buying from their phones.",
      },
    ],
  },
  {
    icon: "solar:smartphone-bold-duotone",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    image: "/images/ServiceDetail/mobile-app-development.png",
    description:
      "Native and cross-platform mobile apps that bring your business to your customers' pockets.",
    detail:
      "We develop mobile apps that give your business a direct line to your customers' phones. Whether that's a companion app for an existing business, a customer-facing service app, or something built around a specific idea, we scope the app around what it actually needs to do and build it accordingly.",
    features: [
      {
        title: "Cross-Platform Options",
        description:
          "Approaches available for both Android and iOS, scoped to your project's needs and budget.",
      },
      {
        title: "Clean, Usable Interfaces",
        description:
          "An app that's straightforward for your customers to actually use.",
      },
      {
        title: "Built Around Your Business",
        description:
          "Features scoped to what your business needs the app to do, not a generic app shell.",
      },
      {
        title: "Post-Launch Support",
        description:
          "Ongoing maintenance and support available after your app goes live.",
      },
    ],
  },
  {
    icon: "solar:widget-5-bold-duotone",
    title: "Web App Development",
    slug: "web-app-development",
    image: "/images/ServiceDetail/web-app-development.png",
    description:
      "Custom web applications built around how your business actually works, from internal tools to customer portals.",
    detail:
      "Beyond marketing websites, we build custom web applications — internal tools, customer portals, booking systems and other software your business needs to run day-to-day. Each web app is scoped around your actual workflow rather than adapted from an unrelated off-the-shelf product.",
    features: [
      {
        title: "Scoped to Your Workflow",
        description:
          "Built around how your business actually operates, not retrofitted from a generic tool.",
      },
      {
        title: "User Accounts & Access",
        description:
          "Login and permission handling appropriate to who needs to use the application and how.",
      },
      {
        title: "Data You Can Rely On",
        description:
          "Application data structured and stored so it stays accurate and accessible.",
      },
      {
        title: "Room to Grow",
        description:
          "Built with your project's likely next steps in mind, not just the first version.",
      },
    ],
  },
  {
    icon: "solar:graph-up-bold-duotone",
    title: "SEO Optimization",
    slug: "seo",
    image: "/images/ServiceDetail/seo.png",
    description:
      "Basic SEO comes standard with every TopZero website, with advanced SEO available to help you rank higher and get found.",
    detail:
      "Basic SEO — proper page titles, meta descriptions, clean site structure and mobile-friendliness — comes standard with every website we build. If you want to go further, our advanced SEO service is available as a separately paid, ongoing service focused on more competitive keyword targeting and continued optimization over time.",
    features: [
      {
        title: "Included with Every Website",
        description:
          "Basic on-page SEO fundamentals are part of every website project, at no extra cost.",
      },
      {
        title: "Search-Friendly Structure",
        description:
          "Pages structured in a way that's straightforward for search engines to read and index.",
      },
      {
        title: "Advanced SEO Available",
        description:
          "A separately paid service for businesses that want more focused, ongoing SEO work.",
      },
      {
        title: "No Ranking Guarantees",
        description:
          "We're upfront that no one can guarantee a specific Google ranking — SEO improves your odds, it doesn't promise a position.",
      },
    ],
  },
];