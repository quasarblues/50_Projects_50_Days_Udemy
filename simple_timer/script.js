const resetBtn = document.querySelector('#reset');
const playBtn = document.querySelector('#play');
const timerEl = document.querySelector('#timer');
const root = document.querySelector(':root');

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
