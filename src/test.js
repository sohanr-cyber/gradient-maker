let colors = [
  {
    code: "#333",
    position: "10",
    index: 0,
  },

  {
    code: "green",
    position: "10",
    index: 1,
  },
];

const selectedColor = colors[0];

const newcolors = colors.map((color) =>
  color.index == selectedColor.index
    ? { code: "yellowgreen", position: color.position, index: color.index }
    : color
);

console.log(newcolors);
