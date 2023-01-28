const container = document.querySelector('#container');

//Makes div's for a grid 16 by 16
function makeGrid() {
    for (i = 1; i < 17; i++) {
        for(j = 1; j <17; j++) {
            const gridSquare = document.createElement('div');
            container.appendChild(gridSquare);
            gridSquare.textContent = `${i},${j}`;
        }
    }
}
makeGrid();