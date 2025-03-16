"use client";
import { useEffect, useState } from "react";
import PlateComponent from "./components/Plate/PlateComponent";
import PlateSelector from "./components/PlateSelector/PlateSelector";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const [plateSelected, setPlateSelected] = useState(0);
  const [lastSeachedParams, setLastSeachedParams] = useState<
    number | undefined
  >(undefined);

  const updatedSelectedPlate = (index: number) => {
    setPlateSelected(index);
  };

  const updatedLastSearchParams = (plateIndex: number) => {
    setLastSeachedParams(plateIndex);
  };

  useEffect(() => {
    const plateIndex = Number(searchParams.get("plato"));
    if (plateIndex >= 0 && plateIndex < 5) {
      updatedSelectedPlate(plateIndex - 1);
    } else {
      updatedSelectedPlate(0);
    }
    updatedLastSearchParams(plateIndex);
  }, [searchParams]);

  const plates = [
    {
      title: "Plato Uno",
      photo: "/resources/images/PlatoUno.png",
    },
    {
      title: "Plato Dos",
      photo: "/resources/images/PlatoDos.png",
    },
    {
      title: "Plato Tres",
      photo: "/resources/images/PlatoTres.png",
    },
    {
      title: "Plato Cuatro",
      photo: "/resources/images/PlatoCuatro.png",
    },
  ];
  return (
    <main className="w-full h-full flex flex-col items-center justify-center pt-20">
      <PlateSelector
        currentSelectedPlate={plateSelected}
        updatedSelectedPlate={updatedSelectedPlate}
      />
      <PlateComponent plate={plates[plateSelected]} />
    </main>
  );
}
