// Implement the missing functionality according to the task description.
// Hint: Remember which function you need to call when it's time to alarm.
let intervalID;
let timeRemainingdisplay = document.querySelector('#timeRemaining');
let timeInput = document.querySelector('#alarmSet');
let setAlarmButton = document.querySelector('#set');
setAlarmButton.addEventListener('click', setAlarm);


function setAlarm() { 
  intervalID = setInterval (function () {
    if(timeInput.value > 0){
    timeRemainingdisplay.textContent = `Time remaining: 00:0${timeInput.value}` 
    timeInput.value --;
    
  } else if (timeInput.value <= 0) {
    timeRemainingdisplay.textContent = `Time remaining: 00:00`;
    playAlarm();
    stopNoise();
  }
  
}, 1000);
}
  
function stopNoise () {
  clearInterval(intervalID);
}

  

// DO NOT EDIT BELOW HERE
/* 
 Try to reason about the code below and understand what it will do.
 You will see that it attaches some event listeners to buttons on the page 
 as well as how to play Audio from JS.
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
// when display value = 00:00 play music

function playAlarm() {
   audio.play();
  }





//when click on button, stop playing music. 
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
