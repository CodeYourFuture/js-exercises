function setAlarm() {
  let count = document.getElementById("timeRemaining");
  let setIt = document.getElementById("set");
  let pause = document.getElementById("p");
  let Restart = document.getElementById("re");
  let Counter;
  pause.addEventListener("click", function () {
    clearInterval(Counter);
  });
  Restart.addEventListener("click", function () {
    Counter = setInterval(CountDown, 1000);
  });
  let TheTime;
  setIt.addEventListener("click", function () {
    TheTime = document.getElementById("alarmSet").value;

    if (TheTime <= 60) {
      count.innerHTML = "Time Remaining: 00:" + TheTime;
    }
  });
  Counter = setInterval(CountDown, 1000);
  function CountDown() {
    if (TheTime <= 60) {
      count.innerHTML = "Time Remaining: 00:" + TheTime;
    }
    if (TheTime == 0 || null) {
      count.innerHTML = "Time Remaining: 00:00";
      playAlarm();
      alert("Time is up");
      clearInterval(Counter);
      document.body.style.backgroundColor = "gray";
    } else {
      TheTime = TheTime - 1;
    }
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}
window.onload = setup;
