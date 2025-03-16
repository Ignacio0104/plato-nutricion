import Image from "next/image";
import React, { useEffect } from "react";

interface PlateComponentProps {
  plate: {
    title: string;
    photo: string;
  };
}

export default function PlateComponent({ plate }: PlateComponentProps) {
  useEffect(() => {
    console.log(plate.title);
  }, [plate]);

  return (
    <div className="w-full justify-center items-center flex flex-col">
      <h2 className="pt-8 font-tan text-white-cream text-2xl md:text-3xl">
        {plate.title}
      </h2>
      <Image
        src={plate.photo}
        alt="Plato"
        width={600}
        height={600}
        priority
        className=""
      />
    </div>
  );
}
