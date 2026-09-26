import Link from "next/link";

const Info = () => {
  return (
    <section className="bg-blue relative bg-no-repeat bg-[url('/images/info/contact-background-layer.svg')] bg-cover">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md relative z-1 px-4 py-20 text-center">
        <p className="text-lg font-medium text-primary pb-1.875">Ready to Get Started?</p>
        <h3 className="text-white md:text-6xl sm:text-40 text-3xl font-medium pb-6 max-w-2xl mx-auto">
          Let&apos;s build something that helps your business grow
        </h3>
        <p className="text-white/50 text-lg font-medium max-w-xl mx-auto pb-10">
          Tell us about your project and we&apos;ll get back to you — whether
          that&apos;s a new website, an online store, or a mobile app.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-4 bg-primary text-white hover:bg-secondary rounded-lg duration-500 font-semibold"
          >
            Start a Project
          </Link>
          <Link
            href="https://wa.me/2349057778626"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-transparent border border-white/30 text-white hover:bg-white hover:text-blue rounded-lg duration-500 font-semibold"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Info;