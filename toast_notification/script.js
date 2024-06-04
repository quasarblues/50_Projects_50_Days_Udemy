const toastBtn = document.querySelector('#button');
const toastsContainer = document.querySelector('#toasts');

const messages = [
    'New message',
    'Deleted',
    'Friend request',
    'Comment Posted',
    'Submitted'
]

function generateMessage() {
    const randNum = Math.floor(Math.random() * messages.length);
    return messages[randNum];
}

toastBtn.addEventListener('click', () => {
    showToast();
});


function showToast() {
    const message = generateMessage();
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    toastsContainer.append(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
