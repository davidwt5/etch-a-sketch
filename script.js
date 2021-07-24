const mainContainer = document.getElementById('main-container');
const GRID_SIZE = 16;

// Adding 16^2 grids into the main container
for(let i=0; i<Math.pow(GRID_SIZE,2); i++) {
    const grid = document.createElement("div");
    grid.classList.add('grid');
    mainContainer.appendChild(grid);
}

// Change colour to black on hover
const grids = document.querySelectorAll('.grid');
grids.forEach(grid => {
    grid.addEventListener('mouseenter', e => {
        grid.style.cssText = 'background-color: black;';
    });
});