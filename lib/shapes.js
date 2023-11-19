function textAlign(data) {
    if (data.shape == circle) {
        var align = '110'
    }
    if (data.shape == rectangle) {
        var align = `110`
    }
    if (data.shape == triangle) {
        var align = `150`
    }
    return align
}

class Shape {
    constructor(color, name, borderColor, text) {
        this.align = textAlign(name)
        this.name = name;
        this.borderColor = borderColor;
        this.color = color;
        this.text = text;
    }
    printText() {
        if(this.text > 3) {
          throw new Error('Please entere less 3 or less characters');
        }
        return `<text x="105" y="${this.align} font-family="Verdana" font-size="35" fill="${this.borderColor}">${this.text}</text>`
      }
}


module.exports = Shape

