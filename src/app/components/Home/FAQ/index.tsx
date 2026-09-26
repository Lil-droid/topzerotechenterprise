"use client";
import SingleQuestion from "./SingleQuestion";

const faqs = [
  {
    question: "What services does TopZero offer?",
    answer:
      "We build custom business websites, e-commerce stores, mobile apps and web applications, plus SEO optimization and ongoing website maintenance and support.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Reach out through our contact form or WhatsApp and tell us what you need. We'll discuss your project, agree on scope and pricing, and get started.",
  },
  {
    question: "Do you offer any current promotions?",
    answer:
      "Check our Offer page for any current promotions and their terms — offers and eligibility can change, so that page always reflects what's currently available.",
  },
  {
    question: "Do I need to pay the full amount upfront?",
    answer:
      "No. Projects begin with a deposit, and installment payments are available for the remainder — we'll agree on a schedule that works for you.",
  },
  {
    question: "Is SEO included with my website?",
    answer:
      "Basic SEO is included with every website we build. Advanced SEO is available as a separate service if you want more focused, ongoing optimization.",
  },
  {
    question: "What about domain, hosting and other costs?",
    answer:
      "Domain registration, hosting, server costs, and any paid third-party services, plugins or licenses your project needs are separate from our development cost.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-grey dark:bg-darklight">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="text-center">
          <p className="text-black/50 dark:text-white/50 text-lg pb-1.875 ">
            Frequently Asked Questions
          </p>
          <h3 className="md:text-6xl sm:text-40 text-3xl font-semibold text-black dark:text-white">
            Want to ask something from us?
          </h3>
        </div>
        <div className="mt-3.125">
          <div className="grid lg:grid-cols-2 grid-cols-1 justify-between">
            {faqs.map((item, index) => (
              <SingleQuestion key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;