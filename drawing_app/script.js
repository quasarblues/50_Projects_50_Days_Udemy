const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');
let sizeEl = document.querySelector('#size');
const colorEl = document.querySelector('#color');
const clearEl = document.querySelector('#clear');


let size = 5;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        //Set x & y to current position to make line effect
        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    // to match radius of a circle
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function updateSizeDisplay() {
    sizeEl.textContent = size;
}

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
})

increaseBtn.addEventListener('click', () => {
    size += 5;
    // Set max size to 50
    if (size > 50) {
        size = 50
    }
    updateSizeDisplay();
})

decreaseBtn.addEventListener('click', () => {
    size -= 5;
    // Set min size to 5
    if (size < 5) {
        size = 5;
    }
    updateSizeDisplay();
})

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})