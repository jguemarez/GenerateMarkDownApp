//Using "shields.io" and the data input from the user, we create a badge for the selected open-source software license
function renderLicenseBadge(license) {

  if(!license){
    return "";
  }

  return `![${license} license badge](https://img.shields.io/badge/license-${license.split('-').join('')}-blue)`
}

//Using the data input and the URL endpoint provided by "opensource.org", we can dynamicaly provide a link with more info concerning the license chosen.
function renderLicenseLink(license) {
  
  if(!license){
    return "";
  }
    return `https://opensource.org/license/${license.toLowerCase()}`;

  }

//This function will be used to print the relevant data in the "License" section of the .md file
function renderLicenseSection(license) {
  return `This is an open-source project under the terms of agreement provided by the ${license} license. 
  For more information, click on the following link: ${renderLicenseLink(license)}`
}

//This function will be used to print the relevant data in the "Questions" section of the .md file
function renderQuestionsSection(username, email){
 return`My GitHub username is "${username}" and you can checkout my profile at: https://www.github.com/${username}.
 For further questions and comments, you can mail them to the following address: ${email}.`;
}

//When called with the right "data" argument, this function will generate all the markdown needed for a professional README file. Its implementation uses JS template literals.
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## How to Contribute
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}

  ## Questions

  ${renderQuestionsSection(data.username, data.email)}
  
  ## License
  
  ${renderLicenseSection(data.license)}

`;
}

//We are specifying that the public interface of this module consists of the "generateMarkdown" function only. We are going to export this function to our app.
module.exports = generateMarkdown;
