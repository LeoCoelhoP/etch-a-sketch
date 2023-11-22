function createGrid(size, gridContainer) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let isMouseDown = false 
        pixelGrid.push(document.createElement('div'));
        pixelGrid[i].setAttribute('style', 'margin: 0; padding: 0; border: 1px solid black; width: 19px; height: 19px;background-color: white;')
        pixelGrid[i].addEventListener('mouseover', () => {
            if(isMouseDown === true) {
                const colorPicker = document.querySelector('#color-picker');
                pixelGrid[i].setAttribute('style', `background: ${colorPicker.value}; margin: 0; padding: 0; border: 1px solid black; width: 19px; height: 19px;`);
            }
        });
        gridContainer.appendChild(pixelGrid[i]);

        
        gridContainer.addEventListener('mousedown', () => isMouseDown = true);
        gridContainer.addEventListener('mouseup', () => isMouseDown = false);
    }    
}

gridSize = 0;
pixelGrid = [];


const gridContainer = document.querySelector('.grid-container');

const smallButton = document.querySelector('.small');
smallButton.addEventListener('click', () => {
    gridSize = 8;
    gridContainer.innerHTML = '';
    createGrid(gridSize, gridContainer);
    gridContainer.setAttribute('style', 'display: flex; width: 170px; height: fit-content; flex-wrap: wrap; gap: 0; margin: 0; align-self: center; justify-content: center; background-color: transparent;');
});

const midButton = document.querySelector('.mid');
midButton.addEventListener('click', () => {
    gridSize = 16;
    gridContainer.innerHTML = '';
    createGrid(gridSize, gridContainer);
    gridContainer.setAttribute('style', 'display: flex; width: 340px; height: fit-content; flex-wrap: wrap; gap: 0; margin: 0; align-self: justify-content: center; center; background-color: transparent;');
});

const bigButton = document.querySelector('.big');
bigButton.addEventListener('click', () => {
    gridSize = 32;
    gridContainer.innerHTML = '';
    createGrid(gridSize, gridContainer);
    gridContainer.setAttribute('style', 'display: flex; width: 680px; height: fit-content; flex-wrap: wrap; gap: 0; margin: 0; align-self: justify-content: center; center; background-color: transparent; padding: 0;');
});





const resetButton = document.querySelector('.reset-button')
resetButton.addEventListener('click', () => {
    for (let i = 0; i < gridSize * gridSize; i++) {
        pixelGrid[i].setAttribute('style', 'background: white; margin: 0; padding: 0; border: 1px solid black; width: 19px; height: 19px;')
        
    };
});

