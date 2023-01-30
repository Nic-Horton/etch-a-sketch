const container = document.querySelector('#container');

//Makes div's for a grid 16 by 16
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