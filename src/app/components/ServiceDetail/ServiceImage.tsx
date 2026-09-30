"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

type ServiceImageProps = {
  src: string;
  alt: string;
};

const ServiceImage = ({ src, alt }: ServiceImageProps) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center text-center gap-3 p-8">
        <Icon icon="solar:gallery-bold-duotone" width="40" height="40" className="text-white/70" />
        <p className="text-white/70 text-sm">Image coming soon</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={600}
      className="w-full h-auto rounded-2xl"
      onError={() => setFailed(true)}
    />
  );
};

export default ServiceImage;