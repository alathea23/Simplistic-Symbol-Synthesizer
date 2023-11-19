const { Circle, Triangle, Rectangle } = require("./classes");
const Shape = require("./shapes");

describe("Triangle", () => {
  it("should correctly render a blue triange when setColor is used", () => {
    const shape = new Triangle();
    shape.setColor("blue", "red"); //(stroke color, shape color)
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" 
    fill="blue" stroke="red" stroke-width="5"/>`);
  });
});

describe("Rectangle", () => {
  it("should correctly render a blue rectangle when setColor is used", () => {
    const shape = new Rectangle();
    shape.setColor("blue", "red"); //(stroke color, shape color)
    expect(shape.render()).toEqual(`<rect x="10" y="10" width="90%" height="90%" fill="blue" stroke="red" stroke-width="5"/>`);
  });
});

describe("Circle", () => {
  it("should correctly render a blue circle when setColor is used", () => {
    const shape = new Circle();
    shape.setColor("blue", "red"); //(stroke color, shape color)
    expect(shape.render()).toEqual(
       `<circle cx="150" cy="100" r="100" fill="blue" stroke="red" stroke-width="5"/>`
    );
  });
});
