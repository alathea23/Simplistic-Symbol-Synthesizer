const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");

//let answers = []

//Creating an array of questions for user input
const questions = inquirer.prompt([
  {
    type: "list",
    message: "What shape would you like",
    choices: ["Circle", "Triangle", "Square"],
    name: "shape",
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
    name: "textcolor",
  },
]);

function writeFile(answers) {
  fileName = "logo.svg";
  (writeText = shapes(answers)),
    //console to test code
    console.log(logoParams);

  fs.writeFile(fileName, logoParams, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}

async function init() {
  await questions;
  writeFile(answers);
}

// Function call to initialize app
init();
