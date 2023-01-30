const container = document.querySelector('#container');

//Makes div's for a grid of specified rows and columns
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        container.appendChild(cell).className = "gridCell";
    };
};

makeGrid(16,16);

const mainGrid = document.querySelectorAll('div')
let trigger = false;

mainGrid.forEach((gridCell) => {
    gridCell.addEventListener('mouseover', () => {
        if (trigger === true) {
        gridCell.style.backgroundColor = "black";
        }
    });
    document.addEventListener('mousedown',function() {
        trigger = true;
    });
    document.addEventListener('mouseup', function() {
        trigger = false;
    });
});