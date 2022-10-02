// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Welcome to the README Generator! First, what is your name?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for usage?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please describe any tests written for your application and instructions on how to run them '
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Please choose the license you would like to include.',
        choices: ['Apache','GNU', 'ISC', 'MIT', 'Mozilla', 'Perl', 'SIL', 'WTFPL', 'None']
    }
];

// TODO: Create a function to write README file
const writeToFile = (data) => {
    fs.writeFile(`./readme/${data.name.split(' ').join('')}-README.md`, data, (err) => {
        if (err){
            return console.log('There was an error.')
        } else {
            console.log('Please check the readme folder for your generated README.md file! Thank you!')
        }
    })
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init
.then((userInput) => {
    return generateMarkdown(userInput)
})
.then((mdInfo) => {
    return writeToFile(mdInfo)
})
.catch((err) => {
    console.log(err)
})