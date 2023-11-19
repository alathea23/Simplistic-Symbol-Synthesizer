const Shape = require("./shapes");

class Triangle extends Shape {
  constructor(color, name, borderColor, text) {
    this.color = color;
    this.borderColor = borderColor;
  }

  setColor(newColor, newBorderColor) {
    this.color = newColor;
    this.borderColor = newBorderColor;
  }
  render() {
    return `<svg viewBox = "0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <g>
             <polygon points="150, 18 244, 182 56, 182" 
             fill="${this.color}"
            stroke="${this.bordercolor}" stroke-width="5""
             /></g>
             </svg>`;
  }
}

class Rectangle extends Shape {
    constructor(color, name, borderColor, text) {
      this.color = color;
      this.borderColor = borderColor;
    }
  
    setColor(newColor, newBorderColor) {
      this.color = newColor;
      this.borderColor = newBorderColor;
    }
    render() {
      return `<svg viewBox = "0 0 300 200" xmlns="http://www.w3.org/2000/svg">
              <g>
               <rect x="10" y="10" width="90%" height="90%" 
               fill="${this.color}"
              stroke="${this.bordercolor}" stroke-width="5""
               /></g>
               </svg>`;
    }
  }

  class Circle extends Shape {
    constructor(color, name, borderColor, text) {
      this.color = color;
      this.borderColor = borderColor;
    }
  
    setColor(newColor, newBorderColor) {
      this.color = newColor;
      this.borderColor = newBorderColor;
    }
    render() {
      return `<svg viewBox = "0 0 300 200" xmlns="http://www.w3.org/2000/svg">
              <g>
               <circle cx="150" cy="100" r="100" 
               fill="${this.color}"
              stroke="${this.bordercolor}" stroke-width="5""
               /></g>
               </svg>`;
    }
  }

/*  taking out, reference code

function generateSVG(data) {
  const shape = shapeGenerator(data);
  const align = textAlign(data);
  //console.log(data.license)

  //drafting return of svg return
  //code for writing .svg file https://blog.hubspot.com/website/what-is-an-svg-file
  svg = `<svg viewBox = "0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <g>
    <${shape}
    fill="${color}"
    stroke="${data.bordercolor}" stroke-width="5""
    />
    <text x="105" y="${align}" font-family="Verdana" font-size="35" fill="${fontcolor}">${text}</text>
    </g>
    </svg> `;

  //removing code testing console.logs to keep terminal clean -- console.log(markdown)
  return svg;
}
*/ 
module.exports = Triangle, Circle, Rectangle;
