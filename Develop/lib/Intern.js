// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Inturn extends Employee {
    constructor(name, id, email, github){
    super (name, id, email)
    
    this.github = github;
    this.role = 'Inturn';
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return this.role;
    }


}

module.exports = Intern;