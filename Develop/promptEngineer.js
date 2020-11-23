const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const { employeeInfor, employees } = require("./app");
const { selectNewTeamMember } = require(".selectNewTeamMember");

function promptEngineer() {
    let newPrompt = [];
    console.log(
        `
          -------------------- 
          Add a Team Engineeer
          --------------------
        `);
    newPrompt = employeeInfor.concat({
        type: "input",
        name: "github",
        message: "Please enter Github",
    });
    return inquirer.prompt(newPrompt)
        .then(({ name, id, email, github }) => {
            employees.push(new Engineer(name, id, email, email, github));
            return selectNewTeamMember(employees);
        });


}

