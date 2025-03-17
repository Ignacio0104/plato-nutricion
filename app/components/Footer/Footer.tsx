import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="block sm:hidden fixed bottom-0 flex w-full justify-between px-4 items-center">
      <div className=" flex justify-center cursor-pointer bg-dark-green pr-2 rounded-[100%]">
        <Image
          src="/resources/images/anto-logo-white.png"
          alt="Icono Plato"
          width={35}
          height={35}
          priority
          className="ml-2"
        ></Image>
      </div>
      <div className="flex justify-center bg-dark-green h-full rounded-[100%] cursor-pointer">
        <Image
          src="/resources/images/instagram_icon.png"
          alt="Icono Plato"
          width={35}
          height={35}
          priority
          className="ml-2"
        ></Image>
      </div>
    </div>
  );
}
