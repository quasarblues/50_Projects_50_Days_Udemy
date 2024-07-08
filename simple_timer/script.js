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
const hoursInput = document.querySelector('#hours');
const minutesInput = document.querySelector('#minutes');
const secondsInput = document.querySelector('#seconds');

// Initial Setup
let totalSeconds = 0;
let playing = false;
let currentSeconds = totalSeconds;
timerEl.innerText = formatTime(totalSeconds);

const timerInterval = setInterval(run, 1000);

playBtn.addEventListener('click', () => {
    playing = !playing;
    playBtn.classList.toggle('play');
    playBtn.classList.toggle('bg-green-500'); // Toggle the color class
    const playIcon = playBtn.querySelector('i');
    playIcon.classList.toggle('fa-play'); // Toggle the play icon
    playIcon.classList.toggle('fa-pause'); // Toggle the pause icon
});
resetBtn.addEventListener('click', resetAll);

// Run the timer
function run() {
    if (playing) {
        currentSeconds -= 1;
        if (currentSeconds <= 0) {
            clearInterval(timerInterval);
            resetAll();
        }

        timerEl.innerText = formatTime(currentSeconds);
        root.style.setProperty('--degrees', calcDeg());
    }
}

// Format the time
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSecondsAfterHours = seconds % 3600;
    const minutes = Math.floor(remainingSecondsAfterHours / 60);
    const newSeconds = remainingSecondsAfterHours % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
}

// Calculate the degrees
function calcDeg() {
    return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}

// Reset all the values
function resetAll() {
    playing = false;
    playBtn.classList.remove('play');
    playBtn.classList.remove('bg-green-500'); // Remove the color class
    const playIcon = playBtn.querySelector('i');
    playIcon.classList.remove('fa-pause'); // Remove the pause icon
    playIcon.classList.add('fa-play'); // Add the play icon
    currentSeconds = totalSeconds;
    timerEl.innerText = formatTime(totalSeconds);
    root.style.setProperty('--degrees', '0deg');
}
// ************ Edit Time Screen ****************
// **********************************************

// Launch Edit Timer Screen
projectContainer.addEventListener('click', (e) => {
    if (!playing) {
        if (e.target.matches('#reset, #play, .fas')) {
            e.stopPropagation();
        } else {
            editTimer.classList.remove('hidden');
            projectContainer.classList.remove('hover:bg-gray-800', 'hover:-translate-y-1', 'group');
            projectContainer.classList.add('active');
        }
    }
})

// Handle confirm button
confirmBtn.addEventListener('click', (e) => {
    const hours = +hoursInput.value;
    const minutes = +minutesInput.value;
    const seconds = +secondsInput.value;

    totalValueinSeconds = (hours * 3600) + (minutes * 60) + seconds;

    totalSeconds = totalValueinSeconds;
    currentSeconds = totalSeconds;
    timerEl.innerText = formatTime(totalSeconds);

    closeEdit(e);
})


// Close Edit Timer Screen
cancelBtn.addEventListener('click', (e) => {
    closeEdit(e);
})

function closeEdit(e) {
    e.stopPropagation();
    editTimer.classList.add('hidden');
    projectContainer.classList.add('hover:bg-gray-800', 'hover:-translate-y-1', 'group');
    projectContainer.classList.remove('active');
}
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
