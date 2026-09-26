import React from "react";
import Link from "next/link";

const Location = () => {
  return (
    <section className="bg-blue py-24">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-24 gap-6 items-center">
          <div>
            <h2 className="text-white text-4xl leading-tight font-bold">
              Based in Lagos
            </h2>
          </div>
          <div>
            <p className="text-lg font-normal leading-8 text-white/50">
              Lagos, Nigeria
            </p>
          </div>
          <div>
            <Link
              href="https://wa.me/2349057778626"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white font-medium underline hover:text-white/80"
            >
              WhatsApp: +234 905 777 8626
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;