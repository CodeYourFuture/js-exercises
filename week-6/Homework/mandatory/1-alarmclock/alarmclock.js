// Implement the missing functionality according to the task description.
// Hint: Remember which function you need to call when it's time to alarm.

function setAlarm() {
  let getTime = document.getElementById("alarmSet").value;
  let setTime = setTimeout(playAlarm, getTime * 1000 + 1000);
  let minutes = Math.floor(getTime / 60);
  let seconds = Math.floor(getTime - minutes) % 60;
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const displayRemainingTime = document.getElementById("timeRemaining");
  const alarmPause = document.getElementById("pause");
  const continueAlarm = document.getElementById("continue");
  var countDown;

  countDown = setInterval(function set() {
    if (seconds < 10 && minutes > 10) {
      displayRemainingTime.innerHTML =
        "Time Remaining is " + minutes + ":0" + seconds;
    } else if (minutes < 10 && seconds > 10) {
      displayRemainingTime.innerHTML =
        "Time Remaining is 0" + minutes + ":" + seconds;
    } else if (seconds < 10 && minutes < 10) {
      displayRemainingTime.innerHTML =
        "Time Remaining is 0" + minutes + ":0" + seconds;
    } else {
      displayRemainingTime.innerHTML =
        "Time Remaining is " + minutes + ":" + seconds;
    }

    if (seconds < 0) {
      displayRemainingTime.innerHTML = "Time Remaining is 00:00";
      clearInterval(countDown);
    } else if (seconds == 0 && minutes >= 1) {
      seconds = 60;
      minutes--;
    }

    seconds--;
  }, 1000);

  alarmPause.addEventListener("click", function () {
    console.log(seconds);
    clearInterval(countDown);
    clearTimeout(setTime);
    clearTimeout(backgroundColor);
  });

  continueAlarm.addEventListener("click", () => {
    setTimeout(playAlarm, seconds * 1000 + 1000);
    setTimeout(() => {
      document.body.style.backgroundColor =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")";
    }, seconds * 1000 + 1000);
    setTimeout(() => {
      document.body.style.backgroundColor = "#" + randomColor;
    }, seconds * 1000 + 1000);

    countDown = setInterval(function set() {
      if (seconds < 10 && minutes > 10) {
        displayRemainingTime.innerHTML =
          "Time Remaining is " + minutes + ":0" + seconds;
      } else if (minutes < 10 && seconds > 10) {
        displayRemainingTime.innerHTML =
          "Time Remaining is 0" + minutes + ":" + seconds;
      } else if (seconds < 10 && minutes < 10) {
        displayRemainingTime.innerHTML =
          "Time Remaining is 0" + minutes + ":0" + seconds;
      } else {
        displayRemainingTime.innerHTML =
          "Time Remaining is " + minutes + ":" + seconds;
      }

      if (seconds < 0) {
        displayRemainingTime.innerHTML = "Time Remaining is 00:00";
        clearInterval(countDown);
      } else if (seconds == 0 && minutes >= 1) {
        seconds = 60;
        minutes--;
      }

      seconds--;
    }, 1000);
  });

  var backgroundColor = setTimeout(() => {
    setInterval(() => {
      document.body.style.backgroundColor = "#" + randomColor;
    }, 1000);
  }, getTime * 1000);
}

// DO NOT EDIT BELOW HERE
/* 
 Try to reason about the code below and understand what it will do.
 You will see that it attaches some event listeners to buttons on the page as well as how to play Audio from JS.
 If you don't remember how to use events, please revisit the previous lession.
*/

/* 
 Open the documentation below if you are keen to know what is Audio object and how it works
 Audio documentation: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
*/
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

/*
 This "window.onload" construct below might be something new that you haven't seen before.
 
 Window Object represents the current open window (tab) in the browser.
 The Window interface contains loads of functionality among others the reference to the DOM Object.
 
 Here you can read more about window interface and see what properties it has:
 https://developer.mozilla.org/en-US/docs/Web/API/Window

 We use the "onload" Window event to run a function when all resources and the DOM has been loaded and ready to use.
 This ensures that "setup" function can find the elements defined in index.html file even if the script HTML tag
 in the index file is appears earlier than the actual HTML elements we look up inside that function. 
 
 You can play and try to see what happens if you replace "window.onload = setup;" with "setup();" function call instead.
 If you open the browser console, you should see an error "Cannot read property 'addEventListener' of null".
 It occurs because this script is being executed earlier and the elements it tries to find hasn't been yet loaded.
 (An alternative way to fix it is by moving the script tags after element with the id "stop".)
 
 Documentation for onload event documentation: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
*/
window.onload = setup;
