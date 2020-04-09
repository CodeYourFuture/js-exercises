function setAlarm() {
  let alarmSet = document.getElementById("alarmSet").value;

  let timeRemaining = document.getElementById("timeRemaining");
  timeRemaining.style.width = "500 px";
  rounded = parseFloat(alarmSet);
  let timer = setInterval(function () {
    timeRemaining.innerHTML = `Time Remaining: ${rounded.toFixed(2)}`;
    console.log(rounded);
    if (rounded > 0) {
      rounded -= 0.01;
    } else {
      timeRemaining.innerHTML = `ALARM!!!!!`;
      var audio = new Audio("alarmsound.mp3");
      playAlarm(Audio);
      clearInterval(timer);
      setInterval(function () {
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector("body").style.color = "green";
      }, 100);
      setTimeout(function () {
        setInterval(function () {
          document.querySelector("body").style.backgroundColor = "orange";
          document.querySelector("body").style.color = "green";
          document.querySelector("body").style.color = "green";
        }, 300);
      }, 150);
    }
  }, 10);
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
