function setAlarm() {
  let alarmSet = document.querySelector('#alarmSet');
  let timeRemaining = document.querySelector('#timeRemaining');
  let stop = document.querySelector('#stop');
  let audio = document.createElement('audio');
  audio.src = './alarmsound.mp3';
  document.body.style.backgroundColor = "white"
  let isPaused = false;
  
  let input = alarmSet.value;
 
let setAlarm = setInterval(countDown,1000);
  function countDown(){
    if (!isPaused){
    if (input >= 10 && input < 60) {

    timeRemaining.textContent = `Time Remaining: 00:${input}`;
    input--;
    } else if (input > 0 && input < 10) {
      timeRemaining.textContent =`Time Remaining: 00:0${input}`;
      input--;

    } else if (input === 0) {
      timeRemaining.textContent = `Time Remaining: 00:00`;
      audio.play();
      clearInterval(setAlarm)
      document.body.style.backgroundColor = "green"
    }
  } 
  }
  stop.addEventListener('click', () => {
    audio.pause();
    alarmSet.value = ''
    audio.src='';
    isPaused=!isPaused;
    clearInterval(setAlarm)
  }); 

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



