const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');
const textInput = document.querySelector('#textInput');
let text = textInput.placeholder;
let idx = 1;
let speed = 300 / speedEl.value;

writeText();
// Display text on screen 1 char at a time
function writeText() {
    textEl.innerText = text.slice(0, idx);
    idx++
    if (idx > text.length) {
        idx = 1;
    }
    setTimeout(writeText, speed);
}

// Adjust speed
speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
})

textInput.addEventListener('input', (e) => {
    text = e.target.value || textInput.placeholder;
    idx = 1;
})