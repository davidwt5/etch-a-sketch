const DEFAULT_COLOUR = 'lightgrey';
const INITIAL_GRID_SIZE = 16;

// Adding 16^2 cells into the grid container
generateGrid(INITIAL_GRID_SIZE);

// Change colour to black on hover
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('mouseenter', e => {
        setBackgroundColour(cell, 'black');
    });
});

// resetBtn resets the colour of all cells
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', e => {
    cells.forEach(cell => {
        setBackgroundColour(cell, DEFAULT_COLOUR);
    });
});

function generateGrid(size) {
    const grid = document.getElementById('grid');
    for(let i=0; i<Math.pow(size,2); i++) {
        const cell = document.createElement("div");
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}

function deleteAllChildren(node){
    node.innerHTML = '';
}

function setBackgroundColour(node, colour){
    node.style.cssText = `background-color: ${colour};`
}