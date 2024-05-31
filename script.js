const grid = document.getElementById('grid');
const container =document.getElementById('container');
const gridButton = document.getElementById('grid-btn');
const rowsInput = document.getElementById('rows');
const colsInput = document.getElementById('columns');




function setGridHTML(rows, cols) {
    container.innerHTML = '';
    container.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`);
    container.style.setProperty('grid-template-columns', `repeat(${cols}, 1fr)`);
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c <cols; c++){
            let cell = document.createElement("div");
            // cell.innerText = `${r}.${c}`;
            cell.setAttribute('id', `${r}.${c}`);
            container.appendChild(cell).className = "grid-item";
        }      
      };
}

gridButton.addEventListener('click', function () {
    const rows = rowsInput.value;
    const cols = colsInput.value;
    setGridHTML(rows, cols);
});

