const myColors = document.querySelector(".myColors")
let colorCount = 10;


function displayColors(colors) {
    const colorHtml = colors.map(color => {
        return `<div class="myColor" style="background-color:${color.value}">${color.value}</div>`
    }).join('')
    myColors.innerHTML = colorHtml
}



async function getColors(colorCount) {
    const response = await fetch(`https://apis.scrimba.com/hexcolors/?count=${colorCount}`)
    const data = await response.json()
    const colors = data.colors

    displayColors(colors)
}

getColors(colorCount)