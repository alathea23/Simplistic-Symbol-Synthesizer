const Text = require("../text.js");
const  Triangle = require("../triangle.js");
const  Circle = require("../circle.js");
const  Rectangle = require("../rectangle.js");

describe('Triangle', () => {
    it('should correctly render a blue triange when setColor is used', () => {
        const shape = new Triangle();
        shape.setColor("blue"); //(stroke color, shape color)
        expect(shape.render()).toEqual(`<polygon fill="blue" points="150, 18 244, 182 56, 182"  />`);
    })
})

describe('Rectangle', () => {
    it('should correctly render a blue rectangle when setColor is used', () => {
        const shape = new Rectangle();
        shape.setColor("blue"); //(stroke color, shape color)
        expect(shape.render()).toEqual(`<rect width="90%" height="90%" x="10" y="10" " fill="blue"/>`);
    })
})

describe('Circle', () => {
    it('should correctly render a blue circle when setColor is used', () => {
        const shape = new Circle();
        shape.setColor("blue"); //(stroke color, shape color)
        expect(shape.render()).toEqual(`<circle circle cx="150" cy="100" r="100" fill="blue"/>`);
    })
})