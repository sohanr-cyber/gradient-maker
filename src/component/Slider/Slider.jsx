import React from "react";
import "./slider.css";
import RemoveIcon from "@mui/icons-material/Remove";

const Slider = ({
  color,
  setColors,
  selectedColor,
  setSelectedColor,
  colors,
}) => {
  console.log(colors.map((color) => color.position));
  return (
    <div className="slider__wrapper">
      <input
        style={{
          backgroundColor: `${color.code}`,
        }}
        type="range"
        min="0"
        max="100"
        className="range blue"
        value={color.position}
        onChange={(e) => {
          setSelectedColor({
            ...color,
            position: e.target.value,
          });
          setColors(
            colors.map((c) =>
              c.index == color.index
                ? {
                    position: e.target.value,
                    code: c.code,
                    index: c.index,
                  }
                : c
            )
          );
        }}
      />
      {colors.length > 2 && (
        <RemoveIcon
          className="icon"
          onClick={() => {
            setColors(colors.filter((c) => c.index != color.index));
          }}
        />
      )}
    </div>
  );
};

export default Slider;
