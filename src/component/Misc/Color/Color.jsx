import React from "react";
import "./color.css";

const Color = ({ selectedColor, setSelectedColor, colors, setColors }) => {
  return (
    <div className="color__container">
      <label>{selectedColor.code}</label>
      <input
        type="color"
        className="color__input"
        value={selectedColor.code}
        onChange={(e) => {
          setColors(
            colors.map((color) =>
              color.index == selectedColor.index
                ? {
                    code: e.target.value,
                    position: color.position,
                    index: color.index,
                  }
                : color
            )
          );
          setSelectedColor((prev) => ({
            ...prev,
            code: e.target.value,
          }));
        }}
      />
    </div>
  );
};

export default Color;
