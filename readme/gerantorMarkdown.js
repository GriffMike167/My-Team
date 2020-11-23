// function to generate markdown for README
function generateMarkdown(answers) {
    return `
    <h1 align="center">${answers.titleOfProject}</h1>
    ## Description
    ${answers.descriptionOfProject}
    ## Table Of Contents
      - [Description](#discriptionOfProject)
      - [Installation](#installationOfProject)
      - [Usage](#usageOfProject)
      - [License](#licenseOfProject)
      - [Test](#testOfProject)
      - [Issues](#issuesOfProject)
      - [Contributors](#contributorsOfProject)
    ##Instalation
    ${answers.instalationOfProject}
    ##Usage
    ${answers.usageOfProject}
    ##License
    ${answers.licenseOfProject}
    This apllication is covered by the ${answers.licenseOfProject} license.
    ##Test
    ${answers.testOfProject}
    ##Issues
    ${answers.issuesOfProject}
    ##Contributors
    ${answers.contributorsOfProject}
    #Github
    ${answers.githubUsername}
    #Email
    ${answers.Email}
  `;
  };
  
  export default generateMarkdown;