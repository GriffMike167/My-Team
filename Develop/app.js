const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const NumberPrompt = require("inquirer/lib/prompts/number");
const { type } = require("os");
const { selectNewTeamMember } = require("./selectNewTeamMember");
const { promptIntern } = require("./promptIntern");
const { promptManager } = require("./promptManager");
const { promptEngineer }  = require("./promptEngineer");


const role = 'Manager';
const employees = [];
exports.employees = employees;


const employeeInfor = [
    {
        type: "input",
        name: "name",
        message: "What is employess name?",
    },
    {
        type: "input",
        name: "id",
        message: "Please enter employee id number:",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter employee email address: ",

    }
];
// exports.employeeInfor = employeeInfor;
exports.promptManager = promptManager;
exports.promptEngineer = promptEngineer;
exports.promptIntern = promptIntern;
exports.selectNewTeamMember = selectNewTeamMember;
// return selectNewTeamMember();


    




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects, the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
