// Variables to keep track of the timer and its state
let timer;
let isRunning = false; // Is the stopwatch running?
let startTime; // When the stopwatch started
let elapsedTime = 0; // Time elapsed in milliseconds

// DOM elements for display and buttons
const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

// Event listener for Start/Stop button
startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        // If running, stop the timer
        clearInterval(timer);
        startStopBtn.textContent = 'Start'; // Change button text to 'Start'
    } else {
        // If not running, start the timer
        startTime = Date.now() - elapsedTime; // Calculate start time
        timer = setInterval(updateDisplay, 1000); // Update display every second
        startStopBtn.textContent = 'Stop'; // Change button text to 'Stop'
    }
    isRunning = !isRunning; // Toggle running state
});

// Event listener for Reset button
resetBtn.addEventListener('click', () => {
    clearInterval(timer); // Stop the timer
    isRunning = false; // Reset running state
    elapsedTime = 0; // Reset elapsed time
    display.textContent = '00:00:00'; // Reset display
    startStopBtn.textContent = 'Start'; // Reset button text to 'Start'
});

// Function to update the display with the elapsed time
function updateDisplay() {
    elapsedTime = Date.now() - startTime; // Calculate elapsed time
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60)); // Calculate hours
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000); // Calculate seconds
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`; // Update display with padded values
}

// Helper function to pad numbers with leading zeros
function pad(num) {
    return num.toString().padStart(2, '0'); // Pad number to ensure two digits
}
