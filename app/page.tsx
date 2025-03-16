"use client";
import { useEffect, useState } from "react";
import PlateComponent from "./components/Plate/PlateComponent";
import PlateSelector from "./components/PlateSelector/PlateSelector";
import { useSearchParams } from "next/navigation";
import { plates } from "./utils/platesInfo";

export default function Home() {
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
