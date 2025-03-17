"use client";
import { Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface PlateSelectorProps {
  currentSelectedPlate: number;
  updatedSelectedPlate: (index: number) => void;
}

function PlateSelector({
  currentSelectedPlate,
  updatedSelectedPlate,
}: PlateSelectorProps) {
  const router = useRouter();

  const setNewSelectedPlate = (index: number) => {
    updatedSelectedPlate(index - 1);
    router.replace(`/?plato=${index}`);
  };

  return (
    <div className="flex justify-center md:gap-6 gap-1 font">
      <Button
        onClick={() => setNewSelectedPlate(1)}
        sx={{
          backgroundColor:
            currentSelectedPlate === 0
              ? "var(--dark-green)"
              : "var(--white-cream)",
          color:
            currentSelectedPlate === 0
              ? "var(--white-cream)"
              : "var(--dark-green)",
        }}
        variant="outlined"
      >
        <span className="block md:hidden flex font-coralRegular ">
          Uno
          <Image
            src="/resources/images/plate.png"
            alt="Icono Plato"
            width={20}
            height={20}
            priority
            className="ml-2"
          ></Image>
        </span>
        <span className="hidden md:block font-coralRegular ">Plato Uno</span>
      </Button>
      <Button
        variant="outlined"
        sx={{
          backgroundColor:
            currentSelectedPlate === 1
              ? "var(--dark-green)"
              : "var(--white-cream)",
          color:
            currentSelectedPlate === 1
              ? "var(--white-cream)"
              : "var(--dark-green)",
        }}
        onClick={() => setNewSelectedPlate(2)}
      >
        <span className="block md:hidden flex font-coralRegular ">
          Dos
          <Image
            src="/resources/images/plate.png"
            alt="Icono Plato"
            width={20}
            height={20}
            priority
            className="ml-2"
          ></Image>
        </span>
        <span className="hidden md:block font-coralRegular ">Plato Dos</span>
      </Button>
      <Button
        variant="outlined"
        className="con"
        sx={{
          backgroundColor:
            currentSelectedPlate === 2
              ? "var(--dark-green)"
              : "var(--white-cream)",
          color:
            currentSelectedPlate === 2
              ? "var(--white-cream)"
              : "var(--dark-green)",
        }}
        onClick={() => setNewSelectedPlate(3)}
      >
        <span className="block md:hidden flex font-coralRegular ">
          Tres
          <Image
            src="/resources/images/plate.png"
            alt="Icono Plato"
            width={20}
            height={20}
            priority
            className="ml-2"
          ></Image>
        </span>
        <span className="hidden md:block font-coralRegular ">Plato Tres</span>
      </Button>
      <Button
        variant="outlined"
        sx={{
          backgroundColor:
            currentSelectedPlate === 3
              ? "var(--dark-green)"
              : "var(--white-cream)",
          color:
            currentSelectedPlate === 3
              ? "var(--white-cream)"
              : "var(--dark-green)",
        }}
        onClick={() => setNewSelectedPlate(4)}
      >
        <span className="block md:hidden flex font-coralRegular ">
          Cuatro
          <Image
            src="/resources/images/plate.png"
            alt="Icono Plato"
            width={20}
            height={20}
            priority
            className="ml-2"
          ></Image>
        </span>
        <span className="hidden md:block font-coralRegular ">Plato Cuatro</span>
      </Button>
    </div>
  );
}

export default PlateSelector;
