const background = document.querySelector('.background');
const password = document.querySelector('#password');
const initalBlur = 20;

password.addEventListener('input', (e) => {
    const blurValue = initalBlur - (e.target.value.length * 0.5);
    background.style.filter = `blur(${blurValue}px)`
})

