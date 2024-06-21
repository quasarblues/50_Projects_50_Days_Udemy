const hoverboardEl = document.querySelector('#hoverboard');
let cubeEls;

const colorArry = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'indigo', 'white', 'pink'];

function makeGrid() {
    for (let i = 0; i < 500; i++) {
        const cube = document.createElement('div');
        cube.classList.add('cube');
        hoverboardEl.append(cube);
    }
    cubeEls = hoverboardEl.querySelectorAll('.cube');
    return cubeEls;
}

makeGrid();

cubeEls.forEach(cubeEl => {
    cubeEl.addEventListener('mouseenter', () => {
        const randColor = colorArry[Math.floor(Math.random() * colorArry.length - 1)];
        cubeEl.style.backgroundColor = randColor;
    })
})

cubeEls.forEach(cubeEl => {
    cubeEl.addEventListener('mouseleave', () => {
        cubeEl.style.backgroundColor = '#1d1d1d';
    })
})






