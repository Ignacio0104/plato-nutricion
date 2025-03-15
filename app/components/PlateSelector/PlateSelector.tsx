import React from "react";

interface PlateSelectorProps {
  selectPlate: (index: number) => void;
}

function PlateSelector({ selectPlate }: PlateSelectorProps) {
  return (
    <div className="flex justify-center gap-6">
      <h2 className="cursor-pointer" onClick={() => selectPlate(0)}>
        Plato Uno
      </h2>
      <p>|</p>
      <h2 className="cursor-pointer" onClick={() => selectPlate(1)}>
        Plato Dos
      </h2>
      <p>|</p>
      <h2 className="cursor-pointer" onClick={() => selectPlate(2)}>
        Plato Tres
      </h2>
    </div>
  );
}

export default PlateSelector;
