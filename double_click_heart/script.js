const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');


let timesClicked = 0;

let lastClickTime = 0;
const dblClickThreshold = 300;

loveMe.addEventListener('click', handleClick);

function handleClick(e) {
    const currTime = new Date().getTime();
    if (currTime - lastClickTime < dblClickThreshold) {
        handleDdblClick(e);
    }
    lastClickTime = currTime;
}

function handleDdblClick(e) {
    timesClicked++;
    times.innerText = timesClicked;
    createHeart(e);
}

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    // Get coordinates from clicks on the Image instead of the viewport
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.append(heart);

    // Remove hearts from HTML document
    setTimeout(() => heart.remove(), 1000);
}