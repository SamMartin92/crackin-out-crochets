let grid = document.getElementById('grid');

function setGridHTML(){
    let tilesHTML ='';
    for (let i = 0; i < 9; i++) {
        tilesHTML += '<div class="tile hover"></div>';
    }
    grid.innerHTML = tilesHTML;
    grid.classList.add('container')
}

setGridHTML();