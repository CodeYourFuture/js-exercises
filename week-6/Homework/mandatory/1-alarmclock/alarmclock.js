// Implement the missing functionality according to the task description.
// Hint: Remember which function you need to call when it's time to alarm.
// Global variables
let setbtn = document.getElementById("set");
let stopbtn = document.getElementById("stop");
let display = document.getElementById("timeRemaining");
let timeValue = document.getElementById("alarmSet");
let timer;

// This function will have a counter in seconds and will change the display by deducting a second everytime it's called. when the counter is 0 it will call playAlarm function
function trigger() {
  let counter = parseInt(display.innerText.slice(0,2) * 60) + parseInt(display.innerText.slice(3));
  if (counter > 0 ) {
    counter--;
    let seconds = counter % 60;
    let minutes =  Math.floor(counter/60);
    display.innerText = minutes.toString().padStart(2,"0") + ":" + seconds.toString().padStart(2,"0");
  } else if (counter === 0) {
    playAlarm();
  }
}

// This function will read the value inputed by user, convert it to minutes and seconds then display it and call the trigger function every second.
function setAlarm() {
  if (timeValue.value <60 && timeValue.value > 0){
    display.innerText = "00:" + timeValue.value.toString().padStart(2,"0");
  } else {
    display.innerText = Math.floor(timeValue.value/60).toString().padStart(2,"0") + ":" + (timeValue.value % 60).toString().padStart(2,"0");
  }
  timer = setInterval(trigger,1000);
}
// This is an event handler for the stop button that will clear the interval to stop the alarm 
stopbtn.addEventListener("click", () =>{
  clearInterval(timer); 
})



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
