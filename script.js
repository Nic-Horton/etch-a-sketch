const container = document.querySelector('#container');

//Make div's for a grid of specified rows and columns and clears out when recalled
function makeGrid(rows, cols) {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
      };
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "gridCell";
    };
    paint();
};
makeGrid(16,16);

//Add paint feature to grid under conditions
function paint() {
const fullGrid = document.querySelectorAll('div.gridCell')
    let trigger = false;
    //Event to change div color to make pixel art
    fullGrid.forEach((gridCell) => {
        gridCell.addEventListener('mousemove', () => {
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
}

//Resets the canvas to be blank
function resetPaint() {
    const fullGrid = document.querySelectorAll('div.gridCell');
    fullGrid.forEach((gridCell) => {
        gridCell.style.backgroundColor = "white";
    });
}

let slider = document.getElementById('myRange');
let output = document.getElementById('output');
output.innerHTML = slider.value + " x " + slider.value;

//Changes total number of grid squares
slider.oninput = function() {
    if (this.value % 8 == 0 ) {
    output.innerHTML = this.value + " x " + this.value;
    makeGrid(this.value,this.value);
    }
}

const resetButton = document.getElementById('reset');
resetButton.innerText = "Reset Canvas";
resetButton.addEventListener('click', () => {
    resetPaint();
});

