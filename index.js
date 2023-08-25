/* Storing references to the packages needed for this application within 'const' variables.*/

//fs(File System) is a Node.js built-in module
const fs = require('fs');

//Inquirer.js is a npm package. We installed v8.2.4 using "npm i" command
const inquirer = require('inquirer');

//This module was created for use in this specific application. We are importing the "generateMarkdown" function from it.
const genMD = require('./utils/generateMarkdown.js');

/* This array, whose elements are objects of type "input" or "list", will be passed to the "prompt" method of the "inquirer" module, so that the user can answer the questions ("message" property).
The answers are stored within a "data" object, as values of properties whose keys are the names of the question objects.*/
const questions = [
    {
        type:"input",
        message:"What is the title for your project?",
        name: "title"
    },
    {
        type:"input",
        message:"Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:"
        +"\n- What was your motivation?"
        +"\n- Why did you build this project?"
        +"\n- What problem does it solve?"
        +"\n- What did you learn?\n",
        name: "description"
    },
    {
        type:"input",
        message:"What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n",
        name:"installation"
    },
    {
        type:"input",
        message:"Provide instructions and examples for use.\n",
        name:"usage"
    },
    {
        type:"input",
        message:"In order for other developers to contribute to your project, please include guidelines for how to do so.\n",
        name:"contributing"
    },
    {
        type:"input",
        message:"Specify tests for your application. Then provide examples on how to run them here.\n",
        name:"tests"
    },
    {
        type:"input",
        message:"List your collaborators, if any, with links to their GitHub profiles."
        + "\n If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section."
        + "\n If you followed tutorials, include links to those here as well.\n",
        name:"credits"
    },
    {
        type:"input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type:"input",
        message: "What is your email?",
        name: "email"
    },
    {
        type:"list",
        message:"Choose a license from the following options:\n",
        choices: ["MIT","APACHE-2.0","GPL-3.0","BSD-3"],
        name:"license"
    }
];

/* With arguments passed through the "file" and "data" parameters, this function will: create a markdown file; print all the data necessary for a complete README on the file;
 and tell the user (in the terminal) whether the operation was successful or not */

function writeToFile(file, data) {

    fs.writeFile(file, genMD(data), (err) =>
    err ? console.error(err) : console.log('\nSuccess!'));
}

// When invoked, this function will initialize the app.
function init() {

    inquirer
        .prompt(questions)
        .then((answers)=>{
            //Creating a name for the dynamically generated markdown file
            const fileName = `${answers.title.split(' ').join('')}-README.md`;  
            //Calling  the "writeToFile" with ""
            writeToFile(fileName, answers); 

         }) 
}

//Initializing the application. The user needs to input "node index" or "node index.js" to the terminal.
init();
