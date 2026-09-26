import Link from "next/link";
import SingleDoc from "./SingleDoc";

const processSteps = [
  {
    icon: "solar:chat-round-line-bold-duotone",
    title: "1. Tell Us About Your Project",
    text: "Reach out through WhatsApp or our contact form and tell us what you need — a website, online store, or app.",
  },
  {
    icon: "solar:document-text-bold-duotone",
    title: "2. Scope & Deposit",
    text: "We agree on the project scope and pricing, and you get started with a deposit — installments are available.",
  },
  {
    icon: "solar:rocket-2-bold-duotone",
    title: "3. Build, Launch & Support",
    text: "We build your project, keep you updated throughout, and support you after launch.",
  },
];

const ProductDoc = () => {
  return (
    <section className="bg-blue relative bg-[url(/images/productdoc/portfolio-backoverlay.svg)] bg-center bg-no-repeat bg-contain">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="">
          <p className="text-lg text-primary sm:text-start text-center">How We Work</p>
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-6 justify-between items-center mt-1.875">
            <h3 className="text-white md:text-6xl sm:text-40 text-3xl font-semibold">
              A Simple, Transparent
              <br />
              Process
            </h3>
            <Link
              href="/contact"
              className="px-2.188 py-1.125 bg-primary rounded-lg text-white text-lg font-semibold hover:bg-secondary duration-500"
            >
              Start a Project
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 pt-17 gap-x-6 gap-y-8 lg:pb-20 pb-10">
          {processSteps.map((item, index) => (
            <SingleDoc key={index} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDoc;