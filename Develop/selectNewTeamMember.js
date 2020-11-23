const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const { promptEngineer } = require("./promptEngineer");
const { promptIntern } = require("./promptIntern");
const { promptManager } = require("./promptManager");

function selectNewTeamMember(employees) {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Which postion are you adding?",
            choices: [Engineer, Intern, Manager, 'None']
        }
    ]).then(({ role }) => {
        if (role === 'Engineer') { return promptEngineer(employees); }
        else if (role === "Intern") { return promptIntern(employees); }
        else if (role === "Manager") { return promptManager(employees); }
        else { return employees; }
    });
};

module.exports = selectNewTeamMember();
