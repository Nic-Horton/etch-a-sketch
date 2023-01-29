const container = document.querySelector('#container');
const singleSquare = document.querySelectorAll('div');

//Makes div's for a grid 16 by 16
function makeGrid() {
    for (i = 1; i < 17; i++) {
        for(j = 1; j <17; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.className = 'row'
            container.appendChild(gridSquare);
            //gridSquare.textContent = `${i},${j}`;
                gridSquare.addEventListener('mouseover', () => {
                    gridSquare.style.backgroundColor = 'black';
                });
        }
    }
}
makeGrid(); 