// Main Variables
const resetBtn = document.querySelector('#reset');
const playBtn = document.querySelector('#play');
const timerEl = document.querySelector('#timer');
const root = document.querySelector(':root');
const projectContainer = document.querySelector('#project-container');

// Edit Timer Variables
const editTimer = document.querySelector('#edit-timer');
const confirmBtn = document.querySelector('#confirm');
const cancelBtn = document.querySelector('#cancel');

// Initial Setup
const totalSeconds = 3600;
let playing = false;
let currentSeconds = totalSeconds;
timerEl.innerText = formatTime(totalSeconds);

// Run the run() function every second
const timerInterval = setInterval(run, 1000);

// Event Listeners
playBtn.addEventListener('click', () => {
    playing = !playing;
    playBtn.classList.toggle('play');
    playBtn.classList.toggle('bg-green-500');
    const playIcon = playBtn.querySelector('i');
    playIcon.classList.toggle('fa-play');
    playIcon.classList.toggle('fa-pause');
});

resetBtn.addEventListener('click', () => {
    resetAll();
})

// Launch Edit Timer Screen
projectContainer.addEventListener('click', (e) => {
    if (e.target.matches('#reset, #play, .fas')) {
        e.stopPropagation();
    } else {
        editTimer.classList.remove('hidden');
        projectContainer.classList.remove('hover:bg-gray-800', 'hover:-translate-y-1', 'group');
        projectContainer.classList.add('active');
    }
})

// Close Edit Timer Screen
cancelBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    editTimer.classList.add('hidden');
    projectContainer.classList.add('hover:bg-gray-800', 'hover:-translate-y-1', 'group');
    projectContainer.classList.remove('active');
})

// Run Timer
function run() {
    if (playing) {
        currentSeconds -= 1;
        if (currentSeconds <= 0) {
            clearInterval(timerInterval);
            resetAll();
        }
        timerEl.innerText = formatTime(currentSeconds);
        root.style.setProperty('--degrees', calcDeg())
    }
}

// Calculate degrees
function calcDeg() {
    return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}

// Reset the timer 
function resetAll() {
    playing = false;
    playBtn.classList.remove('play');
    playBtn.classList.remove('bg-green-500');
    const playIcon = playBtn.querySelector('i');
    playIcon.classList.add('fa-play');
    playIcon.classList.remove('fa-pause');
    currentSeconds = totalSeconds;
    timerEl.innerText = formatTime(totalSeconds);
    root.style.setProperty('--degrees', '0deg');
}

// Format time
function formatTime(seconds) {
    const newSeconds = seconds % 60;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
}

// Timer Edit
const hoursInput = document.querySelector('#hours');
const minutesInput = document.querySelector('#minutes');
const secondsInput = document.querySelector('#seconds');

function formatHours(e) {
    let value = e.target.value
    // If input length is > 2, keep last 2 digits
    if (value.length > 2) {
        value = value.slice(-2);
    }
    //Pad with leading 0 if needed
    if (value.length === 1) {
        value = '0' + value;
    } else if (value.length === 0) {
        value = '00';
    }
    e.target.value = value;
}

function formatMinSec(e) {
    let value = e.target.value;
    // If input length is > 2, keep last 2 digits
    if (value.length > 2) {
        value = value.slice(-2);
    }

    //Pad with leading 0 if needed
    if (value < 60) {
        if (value.length === 1) {
            value = '0' + value;
        } else if (value.length === 0) {
            value = '00';
        }
        // Make sure can't be more than 59
    } else if (value > 59) {
        value = '00';
    }
    e.target.value = value;
}

hoursInput.addEventListener('input', formatHours);

minutesInput.addEventListener('input', formatMinSec);

secondsInput.addEventListener('input', formatMinSec);

// YOu formatted the input. Tomorrow we need to make the inputs reflect the value on the timer