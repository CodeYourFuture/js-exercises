function setAlarm() {
  //get the value of the input field
  let inputField = document.querySelector("#alarmSet").value;

  //set the title to the correct value
  const timeRemaining = document.querySelector("#timeRemaining");
  timeRemaining.textContent = `Time Remaining: ${inputField}:00`;

  let myAlarm;

  document.getElementById("set").removeEventListener("click", () => {
    setAlarm();
  });
  // add `pause` functionality
  document.getElementById("set").textContent = "Pause";

  document.getElementById("set").addEventListener("click", pauseCount);
  function pauseCount() {
    clearInterval(myAlarm);
    //then restart it later

    document.getElementById("set").textContent = "Restart";
    document.getElementById("set").removeEventListener("click", pauseCount);
    document.getElementById("set").addEventListener("click", () => {
      setAlarm();
    });
  }

  //update the `Time Remaining` title every second
  myAlarm = setInterval(() => {
    if (inputField == 0) {
      clearInterval(myAlarm);
      //play the alarm sound
      playAlarm();

      //Make the background change color when the alarm clock finishes
      setTimeout(() => {
        document.body.style.backgroundColor = "orange";
        //making the background flash
        let index = 0;
        setInterval(function () {
          if (index % 2) {
            document.body.style.backgroundColor = "white";
            index++;
          } else {
            document.body.style.backgroundColor = "orange";
            index++;
            timeRemaining.textContent = `Time Remaining: ${inputField}:00`;
          }
        }, 1000);
        //
      }, audio.duration);
    } else {
      inputField--;
      timeRemaining.textContent = `Time Remaining: ${inputField}:00`;
    }
  }, 1000);
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
