import React, { FC } from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import { BreadcrumbLink } from "@/app/types/breadcrumb";

interface HeroSubProps {
  title: string;
  description: string;
  breadcrumbLinks: BreadcrumbLink[];
}

const HeroSub: FC<HeroSubProps> = ({ title, description, breadcrumbLinks }) => {
  return (
    <section className="relative overflow-hidden bg-grey dark:bg-darkmode pt-36 pb-16 lg:pt-44 lg:pb-20">
      {/* Subtle brand glow — soft, low-opacity accents instead of a hard
          two-tone diagonal block. */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <Breadcrumb links={breadcrumbLinks} />
          <h2 className="dark:text-white md:text-5xl text-3xl font-bold text-black mt-4">
            {title}
          </h2>
          <p className="md:text-xl text-lg text-black/50 dark:text-white/50 font-medium mt-4">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSub;