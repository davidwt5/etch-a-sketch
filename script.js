const DEFAULT_COLOUR = 'lightgrey';
const INITIAL_GRID_SIZE = 16;

// Adding 16^2 cells into the grid container
generateGrid(INITIAL_GRID_SIZE);

// resetBtn resets the colour of all cells
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', e => {
    cells.forEach(cell => {
        setBackgroundColour(cell, DEFAULT_COLOUR);
    });
});

// Change the grid size depending on value 
const gridSize = document.getElementById('grid-size-input');
gridSize.addEventListener('change', e => {
    const grid = document.getElementById('grid');
    deleteAllChildren(grid);
    generateGrid(gridSize.value);
    // (1 / gridSize) * 100 == size of 1 cell in percentage.
    // I.e. In a 16x16, one cell is 6.25% in width and height
    const cellSize = (1/gridSize.value)*100 + '%';
    document.documentElement.style.setProperty('--cell-size', `${cellSize}`);
});

gridSize.addEventListener('input', e => {
    // Displays the current grid size to the user
    const output = document.getElementById('grid-size-output');
    output.innerText = `${gridSize.value}x${gridSize.value}`;
});