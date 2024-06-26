const imgs = document.querySelectorAll('#img-container img');
const navEls = document.querySelectorAll('.mobile-nav li');

navEls.forEach((navEl, idx) => {
    navEl.addEventListener('click', () => {
        removeActive();
        removeShow();

        navEl.classList.add('active');
        imgs[idx].classList.add('show');
    })
})



function removeActive() {
    navEls.forEach(navEl => {
        navEl.classList.remove('active')
    })
}

function removeShow() {
    imgs.forEach(img => {
        img.classList.remove('show');
    })
}


