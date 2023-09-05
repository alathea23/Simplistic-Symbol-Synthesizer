const inquirer = require('inquirer')
const fs = require('fs');
const markdown = require('./utils/generateMarkdown')

//let answers = []

//Creating an array of questions for user input
const questions = inquirer
    .prompt([
        {
            type: 'list',
            message: 'What license are you using?',
            choices: ['MIT', "Apache", "Eclipse", "GPLv3", "GPL", "Mozilla", "Perl", "N/A"],
            name: 'license'
        },
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Give a brief project description',
            name: 'description'
        },
    ])



        async function init() {
            const port = process.env.PORT || 3001
            await questions
            writeFile(answers)
        }
        
        // Function call to initialize app
        init();
        