const container = document.querySelector('#container');

//Makes div's for a grid of specified rows and columns and clears out when recalled
function makeGrid(rows, cols) {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
      };
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        //cell.innerText = (i + 1);
        container.appendChild(cell).className = "gridCell";
    };
    const mainGrid = document.querySelectorAll('.gridCell')
    let trigger = false;
    //Event to change div color to make pixel art
    mainGrid.forEach((gridCell) => {
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
};
makeGrid(16,16);

let slider = document.getElementById('myRange');
let output = document.getElementById('output');
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function() {
    if (this.value % 8 == 0 ) {
    output.innerHTML = this.value + " x " + this.value;
    makeGrid(this.value,this.value);
    }
}






