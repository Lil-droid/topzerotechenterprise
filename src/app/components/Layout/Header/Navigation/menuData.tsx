import { HeaderItem } from "../../../../types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "E-Commerce", href: "/services/ecommerce" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Web App Development", href: "/services/web-app-development" },
      { label: "SEO Optimization", href: "/services/seo" },
    ],
  },
  { label: "Offer", href: "/offer" },
  { label: "Contact", href: "/contact" },
];