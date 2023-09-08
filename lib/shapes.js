class Shape {
    constructor(name, color, text, textcolor,) {
        this.name = name;
        this.color = color;
        this.text = text;
        this.textcolor = textcolor;
    }
}


const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
