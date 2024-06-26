let totalBoxes = 16;
const boxesContainer = document.querySelector('#boxes');
const magicBtn = document.querySelector('#btn');

for (i = 0; i < totalBoxes; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    const x = -125 * (i % 4);
    const y = -125 * Math.floor(i / 4);
    box.style.backgroundPosition = `${x}px ${y}px`;
    boxesContainer.append(box);
}
magicBtn.addEventListener('click', () => {
    boxesContainer.classList.toggle('big');
})