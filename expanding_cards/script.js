const panels = document.querySelectorAll('.panel');

for (panel of panels) {
    panel.addEventListener('click', function () {
        removeActiveClasses();
        this.classList.toggle('active');
    })
}

function removeActiveClasses() {
    for (panel of panels) {
        panel.classList.remove('active');
    }
}
