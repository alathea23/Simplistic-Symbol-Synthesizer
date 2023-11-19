const { Circle, Triangle, Rectangle } = require("./classes");
const Shape = require("./shapes");

function generateSVG(data) {
  let borderColor = data.borderColor;
  let text = data.text;
  let color = data.color;
  let name = data.name;
  if (name === "Triangle") {
    logo = new Triangle(color, name, borderColor, text)
    align = '150';
  } else if (name === "Circle") {
    logo = new Circle(color, name, borderColor, text)
    align = '110';
  } else if (name === "Rectangle") {
    logo = new Rectangle(color, name, borderColor, text)
    align = '110';
  }
  //drafting return of svg return
  return `
  <svg viewBox = "0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <g>
      ${logo.render()}
      <text y="${align} ${logo.printText()}
    </g>
      </svg>`;
}

module.exports = generateSVG;
