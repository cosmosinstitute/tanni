let timer;
let secondsLeft = 0;
let isRunning = false;

document.getElementById('start-button').addEventListener('click', startTimer);
document.getElementById('reset-button').addEventListener('click', resetTimer);

function startTimer() {
    if (isRunning) return;

    const taskLabel = document.getElementById('task-label').value.trim();
    const duration = parseInt(document.getElementById('duration').value) * 60;

    if (!taskLabel || isNaN(duration) || duration <= 0) {
        alert('Please enter a valid task label and a positive duration.');
        return;
    }

    secondsLeft = duration;
    isRunning = true;
    updateDisplay();

    timer = setInterval(() => {
        secondsLeft--;
        updateDisplay();

        if (secondsLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            addHistory(taskLabel, duration);
        }
    }, 1000);
}

function updateDisplay() {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    document.getElementById('time-display').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // Corrected template literal
}

function resetTimer() {
    clearInterval(timer);
    secondsLeft = 0;
    isRunning = false;
    updateDisplay();
}

function addHistory(task, duration) {
    const historyList = document.getElementById('history-list');
    const date = new Date();
    const formattedDate = date.toLocaleString();
    const completedTask = document.createElement('li');
    completedTask.textContent = `Task: ${task}, Duration: ${Math.floor(duration / 60)} minutes, Completed at: ${formattedDate}`; // Corrected template literal
    historyList.appendChild(completedTask);
}
