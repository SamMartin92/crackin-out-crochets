let grid = document.getElementById('grid');
let gridButton =document.getElementById('grid-btn');




function setGridHTML(j){
    let tilesHTML ='';
    for (let i = 0; i < j; i++) {
        tilesHTML += '<div class="tile hover"></div>';
    }
    grid.innerHTML = tilesHTML;
    grid.classList.add('container')
}

gridButton.addEventListener('click',function(){
    setGridHTML(9)
});

