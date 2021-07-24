const grid = document.getElementById('grid');
const INITIAL_GRID_SIZE = 16;

// Adding 16^2 cells into the grid container
generateGrid(INITIAL_GRID_SIZE);

// Change colour to black on hover
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('mouseenter', e => {
        cell.style.cssText = 'background-color: black;';
    });
});

function generateGrid(size) {
    for(let i=0; i<Math.pow(size,2); i++) {
        const cell = document.createElement("div");
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}