// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [];

inquirer
.prompt([
    {
        type: '',
        name: '',
        message: ''
    },
])
.then((data) => {

})
.catch((error) => {
    if (error.isTtyError){

    } else {

    }
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
