const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require(".generatorMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user

function promptUser(){
    return inquirer.prompt([
        {
    type: "input",
    name: "titleOfProject",
    message: "What is the title of the project?",
   
},
{   type: "input",
    name: "descriptionOfProject",
    message: "Write a description about your project?",
    
},
{   type: "input",
    message: "Was there an instilation proccess, if so what was it?",
    name: "installationOfProject",
},
{   type: "input",
    message: "what is the usage of this project?",
    name: "usageOfProject",
},
{   type: "list",
    message: "Did you use a licsense in this project, if so choose from the options below?",
    name: "licenseOfProject",
    choices: [
        "Open",
        "Academic",
        "Mozilla",
        "GNU",
        "MIT",
        "ISC"
    
    ]
},
{   type: "input",
    message: "Did you have any issues when creating this project?",
    name: "issuesOfProject",
},
{   type: "input",
    message: "Does the project include a test?",
    name: "testOfProject",
},
{   type: "input",
    message: "Did anyone work on this project with you?",
    name: "contributorsOfProject",
},
{   type: "input",
    message: "Enter your Github user name: ",
    name: "githubUsername",
},
{   type: "input",
    message: "Enter your email: ",
    name: "Email",
},

])

    };

async function init() {
    try { 
          const answers = await promptUser();
          const generateAnswers = generateMarkdown(answers);
          await writeFileAsync('README.md', generateAnswers);
          console.log('Successfully wrote to README.md');
        }catch(err) {
            console.log(err);
        }
    }



// function call to initialize program
init();