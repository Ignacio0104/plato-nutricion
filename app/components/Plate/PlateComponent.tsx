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
      <div className="flex flex-col sm:flex-row pt-8 md:pt-0">
        <div className="mt-auto">
          <Image
            src="/resources/images/frutas.png"
            alt="Frutas"
            width={250}
            height={200}
            priority
            className="pb-4 hidden md:block"
          />
        </div>
        <div className="pt-0 sm:pt-10 lg:pt-4">
          <Image
            src={plate.photo}
            alt="Plato"
            width={400}
            height={500}
            priority
            className="block lg:hidden"
          />
          <Image
            src={plate.photo}
            alt="Plato"
            width={600}
            height={600}
            priority
            className="hidden lg:block"
          />
        </div>
        <div className="">
          <Image
            src="/resources/images/grasas.png"
            alt="Grasas"
            width={250}
            height={180}
            priority
            className="pt-4 hidden md:block"
          />
        </div>
        <div className="block md:hidden flex justify-between">
          <Image
            src="/resources/images/frutas.png"
            alt="Frutas"
            width={150}
            height={150}
            priority
            className=""
          />
          <Image
            src="/resources/images/grasas.png"
            alt="Grasas"
            width={150}
            height={150}
            priority
            className=""
          />
        </div>
      </div>
    </div>
  );
}
