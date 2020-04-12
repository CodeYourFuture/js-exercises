function setAlarm() {

    var timmer = document.getElementById("timeRemaining")
    var counter = document.getElementById("alarmSet").value
    console.log(counter);
    timmer.innerHTML = "00:" + counter


    setInterval(() => {
        if (counter > 0) {
            counter--
            timmer.innerHTML = "00:" + counter
            if (counter == 0) {
                playAlarm()
            }
        }
    }, 1000);
}


 

function setAlarm() {}

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