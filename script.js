document.addEventListener("DOMContentLoaded",() => {
    for (let i = 1; i<= 256; i++){
        let squareDivs = document.createElement('div');
        squareDivs.id ="grid";
        // squareDivs.textContent = i;
        document.getElementById('container').appendChild(squareDivs);

        squareDivs.addEventListener('mouseenter',()=> {
            squareDivs.style.backgroundColor = "purple";
        })
        }

    const containerBtn = document.createElement('div');
    containerBtn.classList.add('containerBtn');
    const btn = document.createElement('button');
    containerBtn.appendChild(btn);
    btn.textContent ="Set number of squares";
    document.getElementById('container').insertAdjacentElement('beforebegin',containerBtn);

    btn.addEventListener('click',()=> {
        let value = prompt('How many number of squares per side do u want?(1-99)');
        let numberOfSquares = parseInt(value, 10);

        if (numberOfSquares <= 0 || numberOfSquares >= 100){
            alert('Number of squares per side could be in range 1-99!')
            console.log(typeof numberOfSquares);
        } else{
            const container = document.querySelector('#container');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
                }
            for (let i = 1; i<= numberOfSquares; i++){
                let squareDivs = document.createElement('div');
                squareDivs.id = "grid";
                // squareDivs.textContent = i;
                document.getElementById('container').appendChild(squareDivs);
        
                squareDivs.addEventListener('mouseenter',()=> {
                    squareDivs.style.backgroundColor = "purple";
                })
                }
        }
    });
    });