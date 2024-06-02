const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // Retrieve coordinates relative to viewport
        const x = e.clientX;
        const y = e.clientY;

        // Calculate position of button (relative to nearest positioned ancestor)
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        // Calculate coordinates relative to top-left corner of clicked button
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        button.append(circle);

        setTimeout(() => circle.remove(), 500);
    })
})