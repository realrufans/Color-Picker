const myColors = document.querySelector(".myColors")
let colorCount = 10;


function displayColors(colors) {
    const colorHtml = colors.map(color => {
        const rgbvalue = hexToRgb(color.value)


        return `<div class="myColor" style="background-color:${color.value}">Hex: ${color.value} </br> Rgb: (${rgbvalue.r}, ${rgbvalue.g},${rgbvalue.b})</div>`

    }).join('')
    myColors.innerHTML = colorHtml
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}





async function getColors(colorCount) {
    const response = await fetch(`https://apis.scrimba.com/hexcolors/?count=${colorCount}`)
    const data = await response.json()
    const colors = data.colors
    console.log(colors)

    displayColors(colors)
}

getColors(colorCount)