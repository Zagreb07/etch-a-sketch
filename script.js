document.addEventListener("DOMContentLoaded",() => {
    for (let i = 1; i<= 256; i++){
        var squareDivs = document.createElement('div');
        squareDivs.textContent = i;
        document.getElementById('container').appendChild(squareDivs);
        }
});