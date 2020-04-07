function setAlarm() {
  let inputField = document.querySelector("#alarmSet");
  let title = document.querySelector("#timeRemaining");
  let counter = inputField.value;
  return setInterval(function() {
    let audio = document.querySelector("#myAudio");
    title.innerHTML = "Time Remaining: 00:" + counter;

    if (counter > 0) {
      counter--;
      if (counter == 0) {
        // clearInterval();
        playAlarm(audio);
      }
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

function setup() {
  var audio = new Audio("alarmsound.mp3");

  console.log(document.getElementById("set"));

  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm(audio);
  });
}

function playAlarm(audio) {
  audio.play();
}

function pauseAlarm(audio) {
  audio.pause();
}

window.onload = setup;
