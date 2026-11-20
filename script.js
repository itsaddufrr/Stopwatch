// Stopwatch Variables
let timer;
let isRunning = false;
let time = 0;   // time in milliseconds

// Elements 
const clockDisplay = document.getElementById('MyClockDisplay');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');

// Start/Stop Button Functionality 
startStopButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 10);    // update every 10 milliseconds
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

// Reset Button Functionality 
resetButton.addEventListener('click', () => {
    clearInterval(timer);
    time = 0;
    isRunning = false;
    clockDisplay.textContent = formatTime(time);
    startStopButton.textContent = 'Start';  // Change button back to Start
});

// Update Stopwatch Time
function updateTime() {
    time += 10;     // increment by 10ms
    clockDisplay.textContent = formatTime(time);
}

// Format Time as MM:SS.MS
function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;
    return `${padZero(minutes)}:${padZero(seconds)}.${padZero(Math.floor(milliseconds / 10), 3)}`;
}

// Pad Time Values (e.g., 5 becomes 05 or 5 becomes 005)
function padZero(num, length = 2) {
    return num.toString().padStart(length, '0');
}