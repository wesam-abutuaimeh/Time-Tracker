"use strict";
const timeInputs = {
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const controlsBtns = {
  submitBtn: document.getElementById("submit"),
  resetBtn: document.getElementById("reset"),
};

controlsBtns.submitBtn.addEventListener("click", startCountDown);
controlsBtns.resetBtn.addEventListener("click", resetCountDown);

let countDownInterval;
function startCountDown() {
  let hours = parseInt(timeInputs.hours.value) || 0;
  let minutes = parseInt(timeInputs.minutes.value) || 0;
  let seconds = parseInt(timeInputs.seconds.value) || 0;
  let allSeconds = hours * 60 * 60 + minutes * 60 + seconds;
  let totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;
  countDownInterval = setInterval(() => {
    let currentSeconds = --totalSeconds;
    displayTime(currentSeconds);
    totalSeconds <= 0 ? clearInterval(countDownInterval) : "";
    document.getElementById("progress").style.width = `${Math.floor((currentSeconds / allSeconds) * 100)}%`;
  }, 1000);
  blockReload();
}

function displayTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  timeInputs.hours.value = hours.toString().padStart(2, "0");
  timeInputs.minutes.value = minutes.toString().padStart(2, "0");
  timeInputs.seconds.value = remainingSeconds.toString().padStart(2, "0");
}

function resetCountDown() {
  clearInterval(countDownInterval);
  timeInputs.hours.value = timeInputs.hours.getAttribute("value");
  timeInputs.minutes.value = timeInputs.minutes.getAttribute("value");
  timeInputs.seconds.value = timeInputs.seconds.getAttribute("value");
}

function blockReload() {
  window.onbeforeunload = function (event) {
    return confirm("Changes you made may not be saved !");
  };
}

// ! StopWatch Timer Code Start

const StopWatchTimeInputs = {
  hours: document.getElementById("stopWatch-hours"),
  minutes: document.getElementById("stopWatch-minutes"),
  seconds: document.getElementById("stopWatch-seconds"),
};

const stopWatchControlsBtns = {
  submitBtn: document.getElementById("stopWatch-submit"),
  resetBtn: document.getElementById("stopWatch-reset"),
};

stopWatchControlsBtns.submitBtn.addEventListener("click", stopWatch);
stopWatchControlsBtns.resetBtn.addEventListener("click", resetStopWatch);
let stopWatchInterval;
function stopWatch() {
  let time = 0;
  stopWatchInterval = setInterval(() => {
    let currTime = time++;
    console.log(`${currTime} seconds`);
    console.log(`${currTime / 60} Minutes`);
    displayStopWatchTime(currTime);
    controlsBtns.resetBtn.addEventListener("click", () => {
      clearInterval(Interval);
    });
  }, 1000);
}

function displayStopWatchTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  StopWatchTimeInputs.hours.value = hours.toString().padStart(2, "0");
  StopWatchTimeInputs.minutes.value = minutes.toString().padStart(2, "0");
  StopWatchTimeInputs.seconds.value = remainingSeconds
    .toString()
    .padStart(2, "0");
}

function resetStopWatch(stop) {
  StopWatchTimeInputs.hours.value = "00";
  StopWatchTimeInputs.minutes.value = "00";
  StopWatchTimeInputs.seconds.value = "00";
  clearInterval(stopWatchInterval);
}

const timerButton = document.getElementById("timer");
const stopWatchButton = document.getElementById("stopWatch");

timerButton.addEventListener("click", showTimer);
stopWatchButton.addEventListener("click", showStopWatch);

function showTimer() {
  const timerArea = document.getElementById("timer-area");
  const stopWatchArea = document.getElementById("stopWatch-area");
  timerArea.style.display = "block";
  stopWatchArea.style.display = "none";
}

function showStopWatch() {
  const timerArea = document.getElementById("timer-area");
  const stopWatchButton = document.getElementById("stopWatch-area");
  timerArea.style.display = "none";
  stopWatchButton.style.display = "block";
}
