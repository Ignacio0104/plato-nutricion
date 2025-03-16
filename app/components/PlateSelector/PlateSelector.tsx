"use client";
import { Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

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
    router.push(`/?plato=${index}`);
  };

  return (
    <div className="flex justify-center md:gap-6 gap-1">
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
        <span className="block md:hidden">Uno</span>
        <span className="hidden md:block">Plato Uno</span>
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
        <span className="block md:hidden">Dos</span>
        <span className="hidden md:block">Plato Dos</span>
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
        <span className="block md:hidden">Tres</span>
        <span className="hidden md:block">Plato Tres</span>
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
        <span className="block md:hidden">Cuatro</span>
        <span className="hidden md:block">Plato Cuatro</span>
      </Button>
    </div>
  );
}

export default PlateSelector;
