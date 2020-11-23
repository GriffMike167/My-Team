const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const { selectNewTeamMember } = require("./selectNewTeamMember");
const { employeeInfor, employees } = require("./app");

function promptIntern() {
    let newPrompt = [];
    console.log(
        `
          ----------------- 
          Add a Team Intern
          -----------------
        `);
    newPrompt = employeeInfor.concat({
        type: "input",
        name: "school",
        message: "Please enter school name",
    });
    return inquirer.prompt(newPrompt)
        .then(({ name, id, email, school }) => {
            employees.push(new Intern(name, id, email, school));
            return selectNewTeamMember(employees);
        });

}
