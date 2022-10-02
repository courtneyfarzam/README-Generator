// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseType = ''
  
  switch(license) {
    case 'MIT':
      licenseType = 'MIT-yellow.svg'
      break
    case 'ISC':
      licenseType = ''
      break
    case 'GNU':
      licenseType = ''
      break
    case 'Apache':
      licenseType = ''
      break
    case 'Mozilla':
      licenseType = ''
      break
    case '':
      licenseType = ''
      break
    case '':
      licenseType = ''
      break
    }
  
  let badge = `https://img.shields.io/badge/license-${licenseType}`;
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
