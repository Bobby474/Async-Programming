let timer;
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let timerDisplay = document.getElementById('timer');

function startTimer() {
  const hours = parseInt(hoursInput.value) || 0;
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  timer = setInterval(function () {
    if (totalSeconds <= 0) {
      clearInterval(timer);
      resetTimer();
    } else {
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      timerDisplay.textContent = `${padZero(h)}:${padZero(m)}:${padZero(s)}`;
      totalSeconds--;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  hoursInput.value = 0;
  minutesInput.value = 0;
  secondsInput.value = 0;
  timerDisplay.textContent = '00:00:00';
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}