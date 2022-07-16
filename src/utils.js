export const gradientColor = (colors) => {
  let colorSchema = "";
  [...colors]
    .sort((a, b) => a.position - b.position)
    .forEach((color) => {
      colorSchema += `${color.index > 0 ? "," : ""} ${color.code} ${
        color.position
      }%`;
    });

  return colorSchema;
};

export const gradientCode = (state, colors) => {
  const code = `${
    state.type == "linear" ? "linear-gradient" : "radial-gradient"
  }(${
    state.type == "radial" ? "circle" : `${state.rotation}deg`
  }, ${gradientColor(colors)})`;

  return code;
};
