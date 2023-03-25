const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let intervalId;
let randomColor;

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function onStopClick() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(intervalId);
  document.body.style.backgroundColor = randomColor;
}

function changeBackgroundColor() {
  randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
