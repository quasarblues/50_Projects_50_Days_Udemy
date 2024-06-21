const imgs = document.querySelectorAll('#imgs img');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');

let currIdx = 0;
let interval;

const updateImages = () => {
    imgs.forEach(img => {
        img.style.transform = `translateX(-${currIdx * 100}%)`
    });
};

const startInerval = () => {
    interval = setInterval(() => {
        if (currIdx < imgs.length - 1) {
            currIdx++;
        } else {
            currIdx = 0;
        }
        updateImages();
    }, 3000);
};

const resetInterval = () => {
    clearInterval(interval);
    startInerval();
};


rightBtn.addEventListener('click', () => {
    if (currIdx < imgs.length - 1) {
        currIdx++;
    } else {
        currIdx = 0;
    }
    updateImages();
    resetInterval();
})


leftBtn.addEventListener('click', () => {
    if (currIdx > 0) {
        currIdx--;
    } else {
        currIdx = imgs.length - 1;
    }
    updateImages();
    resetInterval();
})

startInerval();

