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
            alt="Plato"
            width={250}
            height={200}
            priority
            className="pb-4 hidden md:block"
          />
        </div>
        <div className="">
          <Image
            src={plate.photo}
            alt="Plato"
            width={800}
            height={800}
            priority
            className=""
          />
        </div>
        <div className="">
          <Image
            src="/resources/images/grasas.png"
            alt="Plato"
            width={250}
            height={200}
            priority
            className="pt-4  hidden md:block"
          />
        </div>
        <div className="block md:hidden flex justify-between">
          <Image
            src="/resources/images/frutas.png"
            alt="Plato"
            width={130}
            height={150}
            priority
            className=""
          />
          <Image
            src="/resources/images/grasas.png"
            alt="Plato"
            width={130}
            height={150}
            priority
            className=""
          />
        </div>
      </div>
    </div>
  );
}
