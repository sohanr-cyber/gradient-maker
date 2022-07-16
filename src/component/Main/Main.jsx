import React, { useState } from "react";
import "./main.css";
import Color from "../Misc/Color/Color";
import Position from "../Misc/Position/Position";
import Slider from "../Slider/Slider";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { data } from "../../data";
import { gradientCode } from "../../utils";
import Example from "../Example/Example";

const Main = () => {
  const [colors, setColors] = useState([
    {
      code: "#40c9ff",
      position: "0",
      index: 0,
    },

    {
      code: "#e81cff",
      position: "100",
      index: 1,
    },
  ]);

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [code, setCode] = useState(null);

  console.log({ colors, selectedColor });

  const [state, setState] = useState({
    position: "0",
    rotation: "90",
    type: "linear",
  });

  const handlePosition = (value) => {
    setColors(
      colors.map((color) =>
        color.index == selectedColor.index
          ? {
              code: color.code,
              position: value,
              index: color.index,
            }
          : color
      )
    );

    setSelectedColor((prev) => ({ ...prev, position: value }));
  };
  const handleRotation = (value) => {
    setState((prev) => ({ ...prev, rotation: value }));
  };
  const handleType = (value) => {
    setState((prev) => ({ ...prev, type: value }));
  };

  const addColor = () => {
    setColors((prev) => [
      ...prev,
      {
        ...prev[0],
        index: prev.length,
      },
    ]);
  };

  return (
    <>
      <div className="main__wrapper">
        <h2 className="main__heading">Gradient Maker</h2>
        <div className="main__title">Create and export beautiful gradient</div>
        <div className="main__container">
          <div
            className="main__right__top"
            style={{
              background: `${gradientCode(state, colors)}`,
            }}
          ></div>
          <div className="main__left">
            <div className="main__slider">
              {colors.map((color) => (
                <Slider
                  color={color}
                  setSelectedColor={setSelectedColor}
                  colors={colors}
                  setColors={setColors}
                />
              ))}
            </div>
            <div className="main__scrollbar">
              {colors.map((color) => (
                <>
                  <span
                    className="main__color__selection"
                    style={{
                      background: color.code,
                      border: `${
                        color.index == selectedColor.index
                          ? "2px solid black"
                          : ""
                      }`,
                    }}
                    onClick={() => setSelectedColor(color)}
                  ></span>
                </>
              ))}
              <span>
                <AddIcon className="main__icon" onClick={() => addColor()} />
              </span>
            </div>

            <div className="main__grids">
              <div className="main__grids__item">
                <div className="main__item__heading">Color</div>
                <Color
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                  colors={colors}
                  setColors={setColors}
                />
              </div>

              <div className="main__grids__item">
                <div className="main__item__heading">Position (%) </div>
                <Position
                  options={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                  unit={"%"}
                  handleChange={handlePosition}
                  value={selectedColor.position}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                  colors={colors}
                  setColors={setColors}
                />
              </div>

              <div className="main__grids__item">
                <div className="main__item__heading">Rotation (in degree) </div>
                <Position
                  options={[0, 45, 90, 135, 180, 225, 270, 315, 360]}
                  unit={"%"}
                  handleChange={handleRotation}
                  value={state.rotation}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                  colors={colors}
                  setColors={setColors}
                />
              </div>
              <div className="main__grids__item">
                <div className="main__item__heading">Type</div>
                <Position
                  options={["linear", "radial"]}
                  unit={""}
                  handleChange={handleType}
                  value={state.type}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                  colors={colors}
                  setColors={setColors}
                />
              </div>

              <div
                className="btn"
                onClick={() =>
                  setColors([...data[Math.floor(Math.random() * data.length)]])
                }
              >
                Random
              </div>

              <div
                className="btn"
                onClick={() =>
                  setCode(`
            
            background:${gradientCode(state, colors)}
            
            `)
                }
              >
                Copy CSS
              </div>
            </div>
          </div>
          <div
            className="main__right"
            style={{
              background: `${gradientCode(state, colors)}`,
            }}
          ></div>
        </div>
        {/* <div className="example"> */}

        {/* </div> */}

        {code && (
          <div className="code__container">
            <div className="code">
              <div className="code__border"> {code}</div>
              <div className="code__close" onClick={() => setCode(null)}>
                <CloseIcon />
              </div>
            </div>
          </div>
        )}
      </div>
      <Example limit={6} />
    </>
  );
};

export default Main;
