import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="block sm:hidden fixed bottom-0 bg-dark-green flex w-full justify-between px-4 items-center">
      <div className=" flex justify-center cursor-pointer">
        <Link href="https://strangio-nutrition.vercel.app/" target="_blank">
          <Image
            src="/resources/images/anto-logo-white.png"
            alt="Icono Antonella Stangio"
            width={35}
            height={35}
            priority
            className="ml-2"
          ></Image>
        </Link>
      </div>
      <div className="flex justify-center cursor-pointer">
        <Link
          href="https://www.instagram.com/antostrangio.nutricion"
          target="_blank"
        >
          <Image
            src="/resources/images/instagram_icon.png"
            alt="Icono Instagram"
            width={35}
            height={35}
            priority
            className="ml-2"
          ></Image>
        </Link>
      </div>
    </div>
  );
}
