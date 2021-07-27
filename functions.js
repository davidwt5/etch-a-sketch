// Attaches an event listener to every cell to change colour on hover
function attachHoverColourEventListener(colour){
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', e => {
            setBackgroundColour(cell, colour);
        });
    });
}

// Generates a grid of a given size
function generateGrid(size) {
    const grid = document.getElementById('grid');
    for(let i=0; i<Math.pow(size,2); i++) {
        const cell = document.createElement("div");
        cell.classList.add('cell');
        grid.appendChild(cell);
        attachHoverColourEventListener('black');
    }
}

function deleteAllChildren(node){
    node.innerHTML = '';
}

function setBackgroundColour(node, colour){
    node.style.cssText = `background-color: ${colour};`
}