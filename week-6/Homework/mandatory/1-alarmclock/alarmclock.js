function setAlarm() {

    var timmer = document.getElementById("timeRemaining")
    var counter = document.getElementById("alarmSet").value
    console.log(counter);
    timmer.innerHTML = counter
    for (let i = counter; i > 0; i--) {
        timmer.innerHTML = i
        setTimeout(1000);
    }


}




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
=======
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