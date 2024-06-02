const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', function () {
    if (currentActive < circles.length) {
        currentActive++
    }
    update();
})

prev.addEventListener('click', function () {
    if (currentActive > 1) {
        currentActive--
    }
    update();
})


function update() {
    circles.forEach(() => {
        circles.forEach((circle, idx) => {
            if (currentActive > idx) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        })
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    console.log(progress.style.width);
    console.log(currentActive);

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

// function update() {
//     for (const circle of circles) {
//         const idx = Array.from(circles).indexOf(circle);
//         if (currentActive > idx) {
//             circle.classList.add('active');
//         }
//     }
// }
