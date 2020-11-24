const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");




const employees = [];


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

const promptManager = () => {
    let newPrompt = [];
    console.log (
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
        .then (({name, id, email, officeNumber}) => {
            employees.push(new Manager(name, id, email, officeNumber));
            return selectNewTeamMember(employees)});
        
    
};

const promptIntern = () => {
    let newPrompt = [];
    console.log (
        `
          ----------------- 
          Add a Team Intern
          -----------------
        `);
        newPrompt = employeeInfor.concat({
            type: "input",
            name: "school",
            message: "Please enter school name",

        })
        return inquirer.prompt(newPrompt)
        .then (({name, id, email, school}) => {
            employees.push(new Intern(name, id, email, school));
            return selectNewTeamMember(employees)});

};
const promptEngineer = () => {
    let newPrompt = [];
    console.log (
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
        .then (({name, id, email,github}) => {
            employees.push(new Engineer (name, id, email, github));
            
            return selectNewTeamMember(employees)});
             
    
};  

const selectNewTeamMember = (employees) => {
    return inquirer.prompt([
        {
    type: "list",
    name: "role",
    message: "Which postion are you adding?",
    choices: [Engineer, Intern, Manager, 'None']
        }      
    ]).then(({role}) => {
        if (role === "Manager"){return promptManager(employees);}
            else if (role === "Intern") {return promptIntern(employees);}
            else if (role === 'Engineer'){return promptEngineer(employees);}
            else {return employees;}
    });
};

async function init(){
    try {
        const answer = await  promptManager(); promptIntern(); promptEngineer();
        const promptAnswers = render(answer);
        await fs.writeFileSync(outputPath, promptAnswers)
        console.log('successfully wrote to html')
    }catch(err){
        console.log(err);
    }
}
init();


