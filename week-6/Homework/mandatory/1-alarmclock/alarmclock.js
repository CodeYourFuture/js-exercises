function setAlarm() {
  let inputField = document.querySelector("#alarmSet");
  let title = document.querySelector("#timeRemaining");
  let counter = inputField.value;
  return setInterval(function() {
    title.innerHTML = "Time Remaining: 00:" + counter;
    counter--;
    if (counter === 0) {
      clearInterval();
      pauseAlarm(audio);
    }
  }, 1000);

  //title.innerHTML = "Time Remaining: 00:" + inputField.value
  // setinterval (updateTitle, 1000)
  // function updateTitle (){
  //   title.innerHTML = "Time Remaining: 00:" + inputField.value
  //   inputField.value -= 1
  //
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
