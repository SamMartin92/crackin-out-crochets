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
                cell.addEventListener('click', () => fillCol(rows, c));
                cell.addEventListener('mouseover', () => colHover(rows,c));
                cell.addEventListener('mouseleave', () => colHover(rows,c));
            } else if (c == 0 || c == cols - 1) {
                container.appendChild(cell).className = "outer-cell";
                cell.addEventListener('click', () => fillRow(cols, r));
                cell.addEventListener('mouseover', () => rowHover(cols,r));
                cell.addEventListener('mouseleave', () => rowHover(cols,r));
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
    }
}



function fillCell(cell) {
    cell.style.setProperty('background-color', 'red');
}

function fillCol(rows, c) {
    for (let r = 1; r < rows - 1; r++) {
        let colCell = document.getElementById(`${r}.${c}`)
        if (colCell) {
            colCell.style.setProperty('background-color', 'green');
        }
    }
}

function fillRow(cols, r) {
    for (let c = 1; c < cols - 1; c++) {
        let rowCell = document.getElementById(`${r}.${c}`)
        if (rowCell) {
            rowCell.style.setProperty('background-color', 'pink');
        }
    }
}

function colHover(rows, c){
    for (let r = 1; r < rows - 1; r++) {
        let colCell = document.getElementById(`${r}.${c}`)
        if (colCell) {
            colCell.classList.toggle("dim-brightness");
        }
    }
}

function rowHover(cols, r) {
    for (let c = 1; c < cols - 1; c++) {
        let rowCell = document.getElementById(`${r}.${c}`)
        if (rowCell) {
            rowCell.classList.toggle("dim-brightness");
        }
    }
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

