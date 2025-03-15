import Image from "next/image";
import React from "react";

interface PlateComponentProps {
  plate: {
    title: string;
    photo: string;
  };
}

export default function PlateComponent({ plate }: PlateComponentProps) {
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <h1 className="py-6">{plate.title}</h1>
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
