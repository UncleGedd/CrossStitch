import { Square } from "./Square";
import React from "react";

export const columnGenerator = (colNumber, colSize, selectedColor) => {
  let column = [];
  for (let row = 0; row < colSize; row++) {
    column.push(
      <Square
        selectedColor={selectedColor}
        key={row}
        index={[row, colNumber]}
      />
    );
  }

  return (
    <div key={colNumber} className="column">
      {column}
    </div>
  );
};
