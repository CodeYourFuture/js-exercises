let inputField;
function setAlarm(timeout) {
  //set the title to the correct value
  const timeRemaining = document.querySelector("#timeRemaining");
  timeRemaining.textContent = `Time Remaining: ${timeout}:00`;

  let myAlarm;
  ///
  document.getElementById("set").hidden = true;

  // add `pause` functionality
  document.getElementById("set").textContent = "Pause";

  //create new button Pause
  let pauseButton = document.createElement("button");
  pauseButton.textContent = "Pause";
  let divButton = document.querySelector(".centre >:last-child");
  divButton.prepend(pauseButton);
  pauseButton.className = "pauseButton";

  document.querySelector(".pauseButton").addEventListener("click", () => {
    clearInterval(myAlarm);
    document.querySelector(".pauseButton").hidden = true;

    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    let divButton = document.querySelector(".centre >:last-child");
    divButton.prepend(restartButton);
    restartButton.className = "restartButton";

    //create new button Resume
    let resumeButton = document.createElement("button");
    resumeButton.textContent = "Resume";

    divButton.prepend(resumeButton);
    resumeButton.className = "resumeButton";

    //restart functionality
    document.querySelector(".restartButton").addEventListener("click", () => {
      location.reload();
    });

    //resume functionality
    document.querySelector(".resumeButton").addEventListener("click", () => {
      document.querySelector(".pauseButton").hidden = true;
      document.querySelector(".restartButton").hidden = true;
      document.querySelector(".resumeButton").hidden = true;
      setAlarm(timeout);
    });
  });

  //update the `Time Remaining` title every second
  myAlarm = setInterval(() => {
    if (timeout == 0) {
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
            timeRemaining.textContent = `Time Remaining: ${timeout}:00`;
          }
        }, 1000);
        //
      }, audio.duration);
    } else {
      timeout--;
      timeRemaining.textContent = `Time Remaining: ${timeout}:00`;
    }
  }, 1000);
}

function checkInputField(inputtedValue) {
  if (inputtedValue < 0 || inputtedValue.match(/^[0-9]+$/) === null) {
    alert("Interval must be greater than 0. Please input again");
    location.reload();
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  //get the value from  the input field
  document.getElementById("set").addEventListener("click", () => {
    inputField = document.querySelector("#alarmSet").value;
    checkInputField(inputField);
    setAlarm(inputField);
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
