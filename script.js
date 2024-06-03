const aboveGridSection = document.getElementById('above-grid')
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

            if (r == 0 && c == 0 || r == 0 && c == cols - 1 || c == 0 && r == rows - 1 || c == cols - 1 && r == rows - 1) {
                container.appendChild(cell).className = "corner-cell";
            }
            else if (r == 0 || r == rows - 1) {
                container.appendChild(cell).className = "outer-cell";
                cell.addEventListener('click', () => fillRow());
            } else if (c == 0 || c == cols - 1) {
                container.appendChild(cell).className = "outer-cell";
                cell.addEventListener('click', () => fillCol());
            } else {
                container.appendChild(cell).className = "grid-item";
                cell.addEventListener('click', () => fillCell(cell));
                cell.addEventListener('mouseenter', () => {
                    if (mouseDown) {
                        fillCell(cell);
                    }
                });
            }
        }
    };
}

function fillCell(cell) {
    cell.style.setProperty('background-color', 'red')
}

function fillRow() {
    alert('shit workin')
}

function fillCol() {
    alert('same here')
}

function fillGrid() {
    let fillGridButtonHTML = document.getElementById('fill-grid-btn');
    fillGridButtonHTML.removeAttribute('class', 'hidden');
    fillGridButtonHTML.addEventListener('click', () => {
        let cells = Array.from(document.querySelectorAll('.grid-item'));
        cells.forEach(cell => {
            cell.style.setProperty('background-color', 'black');
        });
    });

}

gridButton.addEventListener('click', () => {
    const rows = parseInt(rowsInput.value) + 2;
    const cols = parseInt(colsInput.value) + 2;
    setGridHTML(rows, cols);
    fillGrid();
});

