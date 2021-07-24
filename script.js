const grid = document.getElementById('grid');
const GRID_SIZE = 16;

// Adding 16^2 cells into the grid container
for(let i=0; i<Math.pow(GRID_SIZE,2); i++) {
    const cell = document.createElement("div");
    cell.classList.add('cell');
    grid.appendChild(cell);
}

// Change colour to black on hover
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('mouseenter', e => {
        cell.style.cssText = 'background-color: black;';
    });
});