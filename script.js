const grid = document.getElementById('grid');
const container = document.getElementById('container');
const gridButton = document.getElementById('grid-btn');
const rowsInput = document.getElementById('rows');
const colsInput = document.getElementById('columns');

// mouseevents

let mouseDown = false;

document.body.onmousedown = () => {
    mouseDown = true;
}

document.body.onmouseup = () => {
    mouseDown = false
}





function setGridHTML(rows, cols) {
    container.innerHTML = '';
    container.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`);
    container.style.setProperty('grid-template-columns', `repeat(${cols}, 1fr)`);
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let cell = document.createElement("div");
            cell.setAttribute('id', `${r}.${c}`);
            container.appendChild(cell).className = "grid-item";
            cell.addEventListener('click', () => fillCell(cell));
            cell.addEventListener('mouseenter', () => {
                if (mouseDown){
                    fillCell(cell);
                }
            });
        }
    };
}

function fillCell(cell) {
    cell.style.setProperty('background-color', 'red')
}

gridButton.addEventListener('click', () => {
    const rows = rowsInput.value;
    const cols = colsInput.value;
    setGridHTML(rows, cols);
});

