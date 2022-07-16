import React, { useState } from "react";
import { data } from "../../data";
import { gradientCode } from "../../utils";
import "./example.css";

const Example = ({ limit }) => {
  const [state, setState] = useState({
    position: "0",
    rotation: "90",
    type: "linear",
  });

  console.log(data);

  return (
    <div className="wrapper">
      <div className="heading">Example Gradients</div>
      <div className="gradients">
        {data.slice(0, limit).map((item, index) => (
          <div
            className="gradient"
            key={index}
            style={{
              background: `${gradientCode(state, item)}`,
            }}
          >
            <div className="left">
              <div className="left__color__code">{item[0].code}</div>
            </div>
            <div className="right">
              <div className="right__color__code">{item[0].code}</div>
            </div>
          </div>
        ))}
      </div>
      {limit && <a href="/example">See More</a>}
    </div>
  );
};

export default Example;
