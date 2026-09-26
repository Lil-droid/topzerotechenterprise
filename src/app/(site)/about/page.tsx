import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";
import HeroSub from "@/app/components/SharedComponent/HeroSub";

export const metadata: Metadata = {
  title: "About | TopZero",
  description:
    "TopZero Technologies Enterprise helps businesses get found, attract more customers and grow through custom websites, apps and digital solutions.",
};

const values = [
  {
    icon: "solar:shield-check-bold-duotone",
    title: "Trust",
    description:
      "We're a registered business, and we work the same way with every client — clear communication, an agreed scope, and no surprises.",
  },
  {
    icon: "solar:chart-2-bold-duotone",
    title: "Growth",
    description:
      "Everything we build is judged by one standard: does it help your business get found and grow.",
  },
  {
    icon: "solar:cpu-bolt-bold-duotone",
    title: "Technology",
    description:
      "We build with modern, well-supported tools so your website or app stays fast, secure and easy to maintain.",
  },
  {
    icon: "solar:lightbulb-bolt-bold-duotone",
    title: "Innovation",
    description:
      "We keep our approach current rather than reusing the same playbook for every project.",
  },
  {
    icon: "solar:medal-ribbons-star-bold-duotone",
    title: "Professionalism",
    description:
      "From your first message to project delivery, we keep things organized, responsive and transparent.",
  },
  {
    icon: "solar:verified-check-bold-duotone",
    title: "Reliability",
    description:
      "We do what we say we'll do — on scope, and in regular contact with you throughout your project.",
  },
];

// The registration certificate PDF is supplied by TopZero as an asset,
// not fabricated here. Until it's placed at the path below, the page
// shows a WhatsApp fallback instead of a broken/fake download link.
const CERTIFICATE_PATH = "documents/topzero-registration-certificate.pdf";
const certificateExists = fs.existsSync(
  path.join(process.cwd(), "public", CERTIFICATE_PATH)
);

const AboutPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];

  return (
    <>
      <HeroSub
        title="About TopZero"
        description="TOP ZERO TECHNOLOGIES ENTERPRISE is a Lagos, Nigeria-based digital solutions company. We help businesses get found, attract more customers and grow through powerful digital solutions."
        breadcrumbLinks={breadcrumbLinks}
      />

      {/* Mission */}
      <section className="dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
          <div className="max-w-3xl">
            <p className="text-lg text-primary pb-1.875">Our Mission</p>
            <h2 className="font-semibold md:text-5xl text-32 text-black dark:text-white mb-6">
              We help businesses get found, attract more customers and grow
              through powerful digital solutions.
            </h2>
            <p className="text-xl text-black/50 dark:text-white/50">
              We build custom websites, online stores, mobile apps and web
              applications for businesses in Lagos and beyond — with basic
              SEO included on every website, so the sites and apps we build
              are actually set up to be found.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-grey dark:bg-darklight">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
          <div className="text-center mb-17">
            <p className="text-black/50 dark:text-white/50 text-lg pb-1.875">
              What Guides Us
            </p>
            <h3 className="md:text-5xl text-32 font-semibold text-black dark:text-white">
              Our Values
            </h3>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className="lg:col-span-4 sm:col-span-6 col-span-12"
              >
                <div className="bg-white dark:bg-darkmode rounded-lg p-8 h-full border border-Snowy-sky dark:border-darkborder">
                  <div className="mb-4 w-14 h-14 rounded-lg bg-cream dark:bg-darklight flex items-center justify-center">
                    <Icon
                      icon={item.icon}
                      width="28"
                      height="28"
                      className="text-primary"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-black dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-black/50 dark:text-white/50">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration / Trust */}
      <section className="dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg text-primary pb-1.875">Registered Business</p>
              <h3 className="font-semibold md:text-5xl text-32 text-black dark:text-white mb-6">
                A Legally Registered Company
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon
                    icon="solar:buildings-bold-duotone"
                    width="24"
                    height="24"
                    className="text-primary mt-1 shrink-0"
                  />
                  <div>
                    <p className="font-medium text-black dark:text-white">
                      Legal Name
                    </p>
                    <p className="text-black/50 dark:text-white/50">
                      Top Zero Technologies Enterprise
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    icon="solar:document-text-bold-duotone"
                    width="24"
                    height="24"
                    className="text-primary mt-1 shrink-0"
                  />
                  <div>
                    <p className="font-medium text-black dark:text-white">
                      Business Registration
                    </p>
                    <p className="text-black/50 dark:text-white/50">
                      Business Name Registration No. 9703664
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    icon="solar:map-point-bold-duotone"
                    width="24"
                    height="24"
                    className="text-primary mt-1 shrink-0"
                  />
                  <div>
                    <p className="font-medium text-black dark:text-white">
                      Location
                    </p>
                    <p className="text-black/50 dark:text-white/50">
                      Lagos, Nigeria
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Certificate */}
            <div className="bg-grey dark:bg-darklight rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-cream dark:bg-darkmode mx-auto flex items-center justify-center mb-4">
                <Icon
                  icon="solar:diploma-verified-bold-duotone"
                  width="32"
                  height="32"
                  className="text-primary"
                />
              </div>
              <h4 className="text-xl font-semibold text-black dark:text-white mb-2">
                Registration Certificate
              </h4>
              {certificateExists ? (
                <>
                  <p className="text-black/50 dark:text-white/50 mb-6">
                    View or download our official business registration
                    certificate.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href={`/${CERTIFICATE_PATH}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-primary text-white rounded-lg hover:bg-secondary duration-500 font-semibold"
                    >
                      View Certificate
                    </Link>
                    <a
                      href={`/${CERTIFICATE_PATH}`}
                      download
                      className="px-5 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white duration-500 font-semibold"
                    >
                      Download
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-black/50 dark:text-white/50 mb-6">
                    Our registration certificate will be published here
                    shortly. In the meantime, reach out on WhatsApp if you'd
                    like a copy.
                  </p>
                  <Link
                    href="https://wa.me/2349057778626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-primary text-white rounded-lg hover:bg-secondary duration-500 font-semibold inline-block"
                  >
                    Request on WhatsApp
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;