import React from "react";
import "./option.css";
import DoneIcon from "@mui/icons-material/Done";

const Option = ({ options, unit, selected, handleChange, setSelectOption }) => {
  return (
    <div className="card">
      <div className="items">
        {options.map((i, k) => (
          <div
            className="item"
            key={k}
            onClick={() => {
              handleChange(i);
              setSelectOption(false);
            }}
            style={{
              backgroundColor: `${selected == i ? "rgb(20, 20, 205,0.2)" : ""}`,
            }}
          >
            <div className="value">
              {i} {unit}
            </div>
            {selected == i && (
              <div className="selected">
                <DoneIcon style={{ fontSize: "90%" }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Option;
