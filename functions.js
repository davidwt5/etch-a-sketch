// Generates a grid of a given size
function generateGrid(size) {
    const grid = document.getElementById('grid');
    for(let i=0; i<Math.pow(size,2); i++) {
        const cell = document.createElement("div");
        cell.classList.add('cell');
        grid.appendChild(cell);
        attachHoverColourEventListener(cell, getRandomColor());
    }
}

// Attaches an event listener to every cell to change colour on hover
function attachHoverColourEventListener(cell, colour){
    cell.addEventListener('mouseenter', e => {
        setBackgroundColour(cell, colour);
    });
}

// Source: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function deleteAllChildren(node){
    node.innerHTML = '';
}

function setBackgroundColour(node, colour){
    node.style.cssText = `background-color: ${colour};`
}