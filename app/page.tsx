"use client";
import { useState } from "react";
import PlateComponent from "./components/Plate/PlateComponent";
import PlateSelector from "./components/PlateSelector/PlateSelector";

export default function Home() {
  const [plateSelected, setPlateSelected] = useState(0);

  const updatedSelectedPlate = (index: number) => {
    setPlateSelected(index);
  };

  const plates = [
    {
      title: "Plato Uno",
      photo: "/resources/images/plato1.png",
    },
    {
      title: "Plato Dos",
      photo: "/resources/images/plato2.png",
    },
    {
      title: "Plato Tres",
      photo: "/resources/images/plato3.png",
    },
  ];
  return (
    <main className="w-full h-full flex flex-col items-center justify-center pt-20">
      <PlateSelector selectPlate={updatedSelectedPlate} />
      <PlateComponent plate={plates[plateSelected]} />
    </main>
  );
}
