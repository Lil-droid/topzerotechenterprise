import { Metadata } from "next";
import Link from "next/link";
import HeroSub from "@/app/components/SharedComponent/HeroSub";

export const metadata: Metadata = {
  title: "Terms & Conditions | TopZero",
  description:
    "Terms and conditions for services provided by Top Zero Technologies Enterprise.",
};

const sections = [
  {
    title: "1. About These Terms",
    body: [
      "These Terms & Conditions govern the services provided by Top Zero Technologies Enterprise (\"TopZero\", \"we\", \"us\"), Business Name Registration No. 9703664, based in Lagos, Nigeria, to clients who engage us for website development, e-commerce, mobile app development, web app development, SEO, and related digital services (the \"Services\").",
      "By requesting a quote, paying a deposit, or otherwise engaging TopZero for a project, you agree to these terms. For our current promotional offer, see the separate Offer Terms page — these general terms apply alongside it.",
    ],
  },
  {
    title: "2. Project Scope & Quotations",
    body: [
      "Every project begins with a discussion of what you need, followed by an agreed scope and price for that specific project. Quotations are based on the scope described to us at the time; they are not a guarantee of final pricing if the scope later changes.",
      "Normal website development pricing will be published on our website once finalized. Until then, pricing is discussed and agreed with each client individually.",
    ],
  },
  {
    title: "3. Deposits & Installment Payments",
    body: [
      "Projects typically begin once an agreed deposit has been paid. Installment payments may be available for the remaining balance, on a schedule agreed with you before work begins.",
      "Work on your project generally proceeds once payment milestones agreed with you have been met.",
    ],
  },
  {
    title: "4. Revisions",
    body: [
      "A reasonable number of revisions during the agreed project stages are included as part of normal delivery. Requests that go beyond the agreed scope, or that are requested after a project stage has been signed off, may be treated as additional work and quoted separately.",
    ],
  },
  {
    title: "5. Client Responsibilities & Supplied Content",
    body: [
      "You're responsible for providing the content, images, text, logos, and other assets needed for your project in a timely manner, and for having the right to use anything you provide us. Delays in supplying required content or feedback can delay your project timeline.",
      "We are not responsible for the accuracy of content you supply, or for verifying that you hold the rights to any assets you give us to use.",
    ],
  },
  {
    title: "6. Domains, Hosting & Third-Party Services",
    body: [
      "Domain registration, hosting, and any third-party services, plugins, APIs or software licenses your project needs are separate from our development fees, unless we've specifically agreed otherwise in writing.",
      "Where we help set up a domain or hosting account on your behalf, ownership of that domain or hosting account belongs to you, the client, unless otherwise agreed. We recommend keeping your own login credentials for any accounts registered in your name.",
    ],
  },
  {
    title: "7. Intellectual Property",
    body: [
      "Once a project is paid for in full, ownership of the final delivered website, application or design created specifically for you transfers to you, excluding any third-party assets, libraries, stock content, or tools that carry their own separate licenses.",
      "TopZero may retain the right to showcase completed work in our own portfolio or marketing materials, unless you ask us not to.",
    ],
  },
  {
    title: "8. Delays & Timelines",
    body: [
      "We aim to deliver projects within the timeline agreed at the start. Timelines can shift due to delayed feedback, delayed content from the client, scope changes, or factors outside our control. We'll communicate with you if a timeline needs to change.",
    ],
  },
  {
    title: "9. Cancellation",
    body: [
      "Either party may raise cancellation of a project in progress. Work completed and costs already incurred up to the point of cancellation are payable. Deposits already paid are generally non-refundable once work has begun, reflecting time and resources already committed to your project.",
    ],
  },
  {
    title: "10. Maintenance & Support",
    body: [
      "Website maintenance and support is available as an ongoing service after your project launches, separate from the initial development cost, on terms agreed with you at the time.",
    ],
  },
  {
    title: "11. SEO Limitations",
    body: [
      "Basic SEO is included with websites we build. Advanced SEO is available as a separately paid, ongoing service. We do not guarantee specific search engine rankings, traffic levels, leads, or sales — SEO improves your website's odds of being found, but rankings are ultimately determined by search engines, which are outside our control.",
    ],
  },
  {
    title: "12. Website Launch",
    body: [
      "We'll work with you to agree on a launch date once a project is complete and approved. Delays in approvals, content, domain/hosting access, or third-party dependencies can affect the launch date.",
    ],
  },
  {
    title: "13. Limitations",
    body: [
      "We provide our Services with reasonable skill and care, but we don't guarantee that any website or application will be completely error-free or uninterrupted at all times, or that it will achieve any particular business outcome.",
    ],
  },
  {
    title: "14. Acceptable Use",
    body: [
      "You agree not to use our Services to build or host anything illegal, fraudulent, or that infringes on the rights of others. We reserve the right to decline or discontinue work on a project that we reasonably believe involves unlawful content or activity.",
    ],
  },
  {
    title: "15. Changes to These Terms",
    body: [
      "We may update these Terms from time to time, for example as our services evolve. The updated version will be posted on this page. Continued use of our Services after changes are posted means you accept the updated Terms.",
    ],
  },
  {
    title: "16. Contact",
    body: [
      "Questions about these Terms can be sent to us via WhatsApp or through our Contact page.",
    ],
  },
];

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/terms", text: "Terms & Conditions" },
  ];

  return (
    <>
      <HeroSub
        title="Terms & Conditions"
        description="Please read these terms carefully before engaging TopZero for a project."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 max-w-3xl">
          <p className="text-black/50 dark:text-white/50 mb-10">
            These general Terms & Conditions are provided for clarity and are
            not a substitute for legal advice specific to your situation or
            jurisdiction. They apply alongside our{" "}
            <Link href="/offer-terms" className="text-primary underline hover:text-secondary">
              Offer Terms
            </Link>{" "}
            for any active promotion, and the specific written agreement for
            your project governs where the two differ.
          </p>
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">
                  {section.title}
                </h3>
                {section.body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-black/70 dark:text-white/70 mb-3 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;