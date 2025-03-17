"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PlateSelector from "../PlateSelector/PlateSelector";
import { plates } from "@/app/utils/platesInfo";
import PlateComponent from "../Plate/PlateComponent";

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
          <PlateSelector
            currentSelectedPlate={plateSelected}
            updatedSelectedPlate={updatedSelectedPlate}
          />
          <PlateComponent plate={plates[plateSelected]} />
        </>
      )}
    </main>
  );
}
