import { Metadata } from "next";
import HeroSub from "@/app/components/SharedComponent/HeroSub";

export const metadata: Metadata = {
  title: "Privacy Policy | TopZero",
  description:
    "How Top Zero Technologies Enterprise collects, uses and protects your information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "We collect information you choose to give us directly — such as your name, business name, email address, phone number, and details about your project — when you fill out our contact form, message us on WhatsApp, or use our website's AI assistant.",
      "We also collect basic technical information automatically when you visit our website, such as general usage and device information, through analytics tools (see Analytics below).",
    ],
  },
  {
    title: "2. Contact Forms",
    body: [
      "When you submit our contact form, the information you enter is used to open a pre-filled WhatsApp message on your own device, which you then choose whether to send to us. We don't store contact form submissions on our servers — the information travels directly from your browser to WhatsApp.",
    ],
  },
  {
    title: "3. WhatsApp",
    body: [
      "Messages you send us on WhatsApp are handled through WhatsApp's own platform, which has its own privacy practices and terms. Anything you share with us over WhatsApp is used to discuss and deliver your project, and to respond to your enquiry.",
    ],
  },
  {
    title: "4. AI Assistant",
    body: [
      "Our website includes an AI assistant to help answer common questions about our services. Messages you send to the assistant are processed server-side and sent to a third-party AI provider to generate a response; they are not used to independently confirm promotional eligibility or make commitments on TopZero's behalf. Please avoid sharing sensitive personal information in the chat that you wouldn't want processed by an AI service.",
    ],
  },
  {
    title: "5. Analytics",
    body: [
      "We use privacy-conscious website analytics to understand how our site is used — for example, which pages are visited and general traffic patterns — so we can improve it. This is aggregate, non-identifying usage data, not used to individually track visitors across other websites.",
    ],
  },
  {
    title: "6. Cookies & Local Storage",
    body: [
      "Our website may use cookies or browser local storage for essential functionality, such as remembering your light/dark theme preference. We don't use cookies for third-party advertising.",
    ],
  },
  {
    title: "7. Third-Party Services",
    body: [
      "We rely on a small number of third-party services to run our website and respond to enquiries — for example, WhatsApp for messaging, our AI provider for the chat assistant, and hosting/analytics providers. These providers process data under their own privacy policies.",
    ],
  },
  {
    title: "8. Data Retention",
    body: [
      "We keep the information you share with us for as long as reasonably needed to respond to your enquiry, deliver your project, and meet any legitimate business record-keeping needs — and no longer than necessary for those purposes.",
    ],
  },
  {
    title: "9. Security",
    body: [
      "We take reasonable steps to protect information shared with us, including keeping sensitive configuration and API keys server-side and out of our website's public code. No method of transmission or storage is completely secure, so we can't guarantee absolute security.",
    ],
  },
  {
    title: "10. Your Rights",
    body: [
      "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it, by contacting us using the details below. We'll respond to reasonable requests as quickly as we can.",
    ],
  },
  {
    title: "11. Contact",
    body: [
      "Questions about this Privacy Policy, or requests relating to your information, can be sent to us via WhatsApp or through our Contact page.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time, for example as our services or tools change. The updated version will be posted on this page.",
    ],
  },
];

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/privacy", text: "Privacy Policy" },
  ];

  return (
    <>
      <HeroSub
        title="Privacy Policy"
        description="How we collect, use and protect your information."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 max-w-3xl">
          <p className="text-black/50 dark:text-white/50 mb-10">
            This Privacy Policy explains how Top Zero Technologies Enterprise
            ("TopZero", "we", "us") handles information in connection with
            our website and services. It's provided for transparency and
            isn't a substitute for legal advice specific to your situation or
            jurisdiction.
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