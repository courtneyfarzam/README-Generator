// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {

  let licenseIcon = ''
  
  switch(license) {
    case 'Apache':
      licenseIcon = 'Apache_2.0-yellow.svg'
      break
    case 'GNU':
      licenseIcon = 'GNU-blue.svg'
      break
    case 'ISC':
      licenseIcon = 'ISC-red.svg'
      break
    case 'MIT':
      licenseIcon = 'MIT-yellow.svg'
      break
    case 'Mozilla':
      licenseIcon = 'MPL_2.0-brightgreen.svg'
      break
    case 'Perl':
      licenseIcon = 'Perl-0298c3'
      break
    case 'SIL':
      licenseIcon = 'OFL_1.1-blue.svg'
      break
    case 'WTFPL':
      licenseIcon = 'WTFPL-brightgreen.svg'
      break
    case 'None':
      licenseIcon = 'none-red.svg'
      break
    }
  
  let badge = `https://img.shields.io/badge/license-${licenseIcon}`;
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {

  let licenseLink = ''

  switch(license) {
    case 'Apache':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0'
      break
    case 'GNU':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
      break
    case 'ISC':
      licenseLink = 'https://opensource.org/licenses/ISC'
      break
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT'
      break
    case 'Mozilla':
      licenseLink = 'https://opensource.org/licenses/MPL-2.0'
      break
    case 'Perl':
      licenseLink = 'https://opensource.org/licenses/Artistic-2.0'
      break
    case 'SIL':
      licenseLink = 'https://opensource.org/licenses/OFL-1.1'
      break
    case 'WTFPL':
      licenseLink = 'http://www.wtfpl.net/about/'
      break
    case 'None':
      licenseLink = ''
      break
    }

    let link = licenseLink;
    return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === 'None') {
    return ''
  } else
  return `This application is covered under ${license}. Please click on the badge for more information`
}

//function to generate markdown for README
const generateMarkdown = (data) => {
  return `
# ${data.title}        
[![License](${renderLicenseBadge(data.licenses)})](${renderLicenseLink(data.licenses)})

## Description    

${data.description}    

## Table of Contents (Optional)    

- [Installation](#installation)
- [Usage](#usage)    
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)

## Installation    

${data.installation}    

## Usage

${data.usage}    

## License
[![License](${renderLicenseBadge(data.licenses)})](${renderLicenseLink(data.licenses)})
${renderLicenseSection(data.licenses)}    

## Contributing
${data.contributing}    

## Tests
${data.tests}    

## Questions
Have questions? Please feel free to contact me:    
* GitHub: https://github.com/${data.github}    
* Email: ${data.email}    

## Credits    
${data.name} 
  `;
}

module.exports = generateMarkdown;
