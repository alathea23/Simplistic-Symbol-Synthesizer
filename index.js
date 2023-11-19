const inquirer = require("inquirer");
const fs = require("fs");
const Shape = require("./lib/shapes");
const generateSVG = require("./lib/logoCreator")

//let answers = []

//Creating an array of questions for user input
inquirer.prompt([
  {
    type: "list",
    message: "What shape would you like",
    choices: ["Circle", "Triangle", "Square"],
    name: "name",
  },
  {
    type: "input",
    message: "What color would you like your logo background?",
    name: "color",
  },
  {
    type: "input",
    maxLength: 3,
    message: "What script would you like on your logo",
    name: "text",
  },
  {
    type: "input",
    message: "What color would you like your text?",
    name: "borderColor",
  },
]).then((answers) =>{
  const filePath = `./examples/${answers.text}.svg`
  const logoParams = generateSVG(answers)
    //console to test code
    console.log(logoParams);

  fs.writeFile(filePath, logoParams, (err) =>
    err ? console.error(err) : console.log(`Generated ${answers.text}.svg`)
  );
}
);

