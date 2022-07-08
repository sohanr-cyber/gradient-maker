import React, { useState } from "react";
import "./position.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Option from "./Option";

const Position = ({
  options,
  unit,
  handleChange,
  value,
  colors,
  setColors,
  selectedColor,
  setSelectedColor,
}) => {
  const [selectOption, setSelectOption] = useState(false);
  return (
    <div className="box">
      <input
        type="text"
        className="value"
        value={value}
        onChange={(e) => {
          setColors(
            colors.map((color) =>
              color.index == selectedColor.index
                ? {
                    position: e.target.value,
                    code: color.code,
                    index: color.index,
                  }
                : color
            )
          );
          setSelectedColor((prev) => ({
            ...prev,
            position: e.target.value,
          }));
        }}
      />
      <div
        className="selection"
        onClick={() => setSelectOption((prev) => !prev)}
      >
        <KeyboardArrowDownIcon />
      </div>
      {selectOption && (
        <div className="options">
          <Option
            options={options}
            unit={unit}
            selected={value}
  
            setSelectOption={setSelectOption}
            handleChange={handleChange}
            setSelectedColor={setSelectedColor}
          />
        </div>
      )}
    </div>
  );
};

export default Position;
