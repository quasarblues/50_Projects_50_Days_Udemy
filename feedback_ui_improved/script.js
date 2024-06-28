const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating;

//Allows a user to click the div, icon, or small tag and have their rating registered.
ratings.forEach(rating => {
    rating.addEventListener('click', (e) => {
        removeActive();
        rating.classList.add('active');
        selectedRating = rating.lastElementChild.innerHTML;
        console.log(selectedRating);
    })
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong?
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We appreciate your feedback. Have a pleasant day!</p>
    `
})
function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}