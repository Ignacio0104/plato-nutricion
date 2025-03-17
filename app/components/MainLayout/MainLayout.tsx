"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PlateSelector from "../PlateSelector/PlateSelector";
import { plates } from "@/app/utils/platesInfo";
import PlateComponent from "../Plate/PlateComponent";
import Image from "next/image";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  const searchParams = useSearchParams();
  const [plateSelected, setPlateSelected] = useState<number | undefined>(
    undefined
  );

  const updatedSelectedPlate = (index: number) => {
    setPlateSelected(index);
  };

  useEffect(() => {
    const plateIndex = searchParams.get("plato")
      ? Number(searchParams.get("plato"))
      : 1;
    if (plateIndex >= 0 && plateIndex < 5) {
      updatedSelectedPlate(plateIndex - 1);
    } else {
      updatedSelectedPlate(0);
    }
  }, [searchParams]);

  return (
    <main className="w-full h-full flex flex-col items-center justify-center pt-6">
      {plateSelected !== undefined && (
        <>
          <div className="hidden sm:block absolute left-8 top-6 cursor-pointer">
            <Image
              src="/resources/images/anto-logo-white.png"
              alt="Icono Plato"
              width={80}
              height={80}
              priority
              className="ml-2"
            ></Image>
          </div>
          <PlateSelector
            currentSelectedPlate={plateSelected}
            updatedSelectedPlate={updatedSelectedPlate}
          />
          <PlateComponent plate={plates[plateSelected]} />
          <div className="hidden sm:block absolute right-10 bottom-6 cursor-pointer">
            <Image
              src="/resources/images/instagram_icon.png"
              alt="Icono Plato"
              width={80}
              height={80}
              priority
              className="ml-2"
            ></Image>
          </div>
          <Footer />
        </>
      )}
    </main>
  );
}
