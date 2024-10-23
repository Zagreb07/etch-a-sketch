document.addEventListener("DOMContentLoaded", () => {
    const containerSize = 540; 
    const defaultSquares = 16;
    createGrid(defaultSquares);
    function randomInteger(max){
        return Math.floor(Math.random()*max+1);
    }
    function rgbColor(){
        let r = randomInteger(255);
        let g = randomInteger(255);
        let b = randomInteger(255);
        return `rgb(${r},${g},${b}`;
    }

    const containerBtn = document.createElement('div');
    containerBtn.classList.add('containerBtn');
    const btn = document.createElement('button');
    containerBtn.appendChild(btn);
    btn.textContent = "Set number of squares";
    document.getElementById('container').insertAdjacentElement('beforebegin', containerBtn);

    btn.addEventListener('click', () => {
        let value = prompt('How many squares per side do you want? (1-99)');
        let numberOfSquares = parseInt(value, 10);
        
        if (numberOfSquares < 1 || numberOfSquares > 99) {
            alert('Number of squares per side must be in the range 1-99!');
        } else {
            createGrid(numberOfSquares);
        }
    });

    function createGrid(numberOfSquares) {
        const container = document.getElementById('container');
        container.style.width = `${containerSize}px`;
        container.style.height = `${containerSize}px`;
        
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        
        const sizeGrid = Math.floor(containerSize / numberOfSquares);

        for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
            let squareDiv = document.createElement('div');
            squareDiv.classList.add('grid');
            squareDiv.style.width = `${sizeGrid}px`;
            squareDiv.style.height = `${sizeGrid}px`;
            container.appendChild(squareDiv);

            squareDiv.addEventListener('mouseenter', () => {
                squareDiv.style.backgroundColor = rgbColor();
            });
        }
    }
});