const shapes = require('./shapes')

function shapeGenerator(data) {
    if (data.shape == circle) {
        let shape = 'circle cx="150" cy="100" r="100"'
    }
    if (data.shape == rectangle) {
        let shape = `rect x="10" y="10" width="90%" height="90%" `
    }
    if (data.shape == triangle) {
        let shape = `polygon points="150, 18 244, 182 56, 182" `
    }
    return shape
}


function textAlign(data) {
    if (data.shape == circle) {
        let align = '110'
    }
    if (data.shape == rectangle) {
        let align = `110`
    }
    if (data.shape == triangle) {
        let align = `150`
    }
    return align
}

function borderRender(data) {
    let bordercolor = `stroke="${data.bordercolor}" `
}

function generateLogo(data) {
    const shape = renderLicenseBadge(data)
    const link = renderLicenseLink(data)
    //console.log(data.license)
  
    //drafting return in markdown of the README file
    //code for writing .svg file https://blog.hubspot.com/website/what-is-an-svg-file
    svg = `<svg viewBox = "0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <g>
    <${shape}
    fill="${color}"
    ${bordercolor}"
    />
    <text x="105" y="${align}" font-family="Verdana" font-size="35" fill="${fontcolor}">${text}</text>
    </g>
    </svg> `;

    //removing code testing console.logs to keep terminal clean -- console.log(markdown)
    return svg
  }
  
  module.exports = generateSVG;
  