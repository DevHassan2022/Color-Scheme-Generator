
const color = document.getElementById('color');
const colorPicker = document.getElementById('color-picker');
const getBgBtn = document.getElementById('getbg-btn');
const colorContainer = document.getElementById('color-container');


function renderColorScheme(){
     let colorsHtml = '';
     let colorsCode = '';
     const option = colorPicker.options[colorPicker.selectedIndex].value;
     fetch(`https://www.thecolorapi.com/scheme?hex=${color.value.slice(1)}&mode=${option}`)
          .then(res => res.json())
          .then(data => {
              let colors = data.colors
              colors.forEach(colorEl => {
                  const newColor = colorEl.hex.value;
                  colorsHtml += `<div class="color-columns" style="background:${newColor}"> </div>`
                  colorsCode += `<p class="codes">${newColor}</p>`
                  return colorsHtml;               
                  return colorsCode;
                 })
              colorContainer.innerHTML = colorsHtml;
              document.getElementById('codes').innerHTML = colorsCode;
                 })
}

getBgBtn.addEventListener('click', () => {
  renderColorScheme()  
})
renderColorScheme()