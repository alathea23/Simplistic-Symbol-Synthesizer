const shapes = require('./shapes')

function shapeGenerator(data) {
    if (data.shape == circle) {
        let shape = 'circle class="cls-1" cx="100" cy="150" r="100"'
    }
}

function generateLogo(data) {
    const shape = renderLicenseBadge(data)
    const link = renderLicenseLink(data)
    //console.log(data.license)
  
    //drafting return in markdown of the README file
    //code for writing .svg file https://blog.hubspot.com/website/what-is-an-svg-file
    svg = `<svg id=Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/200/svg" viewBox = "0 0 200 300"><defs><style>.cls-1{fill:${color};}</style></defs><  <${shape}/></svg> 
    
    ${data.title} 
  
    ${badge}
  
    ## Description:
    
    ${data.description}
  
    ## Table of Contents:
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
  ## Installation:
  
  ${data.instructions || 'N/A'}
  
  ## Usage:
  
  ${data.usage || 'See Description'}
  
  ## License:
  
  This application is covered under [${data.license}](${link})
  ${link}
  
  ## Contributing:
  
  ${data.contributors || 'Contribution parameters in development.  See contact info below to find out more.'}
  
  ## Tests:
  
  ${data.tests || 'None Created Yet'}
  
  ## Questions:
  
  We would love to hear from you! Visit Github repository: [${data.github}](https://github.com/${data.github}/)  
  or Contact via Email: [${data.email}](mailto:${data.email}) with addition questions.
  `;
    //removing code testing console.logs to keep terminal clean -- console.log(markdown)
    return svg
  }
  
  module.exports = generateSVG;
  