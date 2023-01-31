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
};

const colorButton = document.getElementById('color');
colorButton.innerText = "Rainbow";
const noColorButton = document.getElementById('noColor');
noColorButton.innerText = "Black"

makeGrid(16,16);
paint();
// Depending on which button is pressed determines color
if(true) {
    colorButton.addEventListener('click', () => {
        paintRainbow(getColor());
    });
}
if(true) {
    noColorButton.addEventListener('click', () => {
        paint();
    });
}

//function to create random color
function getColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

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

//This paint function allows random color painting
function paintRainbow(color) {
    const fullGrid = document.querySelectorAll('div.gridCell')
    let trigger = false;
    fullGrid.forEach((gridCell) => {
        gridCell.addEventListener('mousemove', () => {
            if (trigger === true) {
            color = getColor();
            gridCell.style.backgroundColor = color;
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
    paint();
}

const resetButton = document.getElementById('reset');
resetButton.innerText = "Reset";
resetButton.addEventListener('click', () => {
    resetPaint();
});

