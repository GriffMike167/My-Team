const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const { selectNewTeamMember } = require("./selectNewTeamMember");
const { employeeInfor, employees } = require("./app");

function promptManager() {
    let newPrompt = [];
    console.log(
        `
          ------------------ 
          Add a Team Manager
          ------------------
        `);
    newPrompt = employeeInfor.concat({
        type: "input",
        name: "officeNumber",
        message: "Please enter office number",
    });
    return inquirer.prompt(newPrompt)
        .then(({ name, id, email, officeNumber }) => {
            employees.push(new Manager(name, id, email, officeNumber));
            return selectNewTeamMember(employees);
        });


}
