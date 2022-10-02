// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: ''
    },
    {
        type: 'input',
        name: 'github',
        message: ''
    },
    {
        type: 'input',
        name: 'email',
        message: ''
    },
    {
        type: 'input',
        name: 'title',
        message: ''
    },
    {
        type: 'input',
        name: 'description',
        message: ''
    },
    {
        type: 'input',
        name: 'installation',
        message: ''
    },
    {
        type: 'input',
        name: 'usage',
        message: ''
    },
    {
        type: 'input',
        name: 'contributing',
        message: ''
    },
    {
        type: 'input',
        name: 'tests',
        message: ''
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: ''
    },
    {
        type: 'list',
        name: 'license',
        message: ''
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init();
