function setAlarm() {
  let alarmSet = document.querySelector('#alarmSet');
  let timeRemaining = document.querySelector('#timeRemaining');
  let stop = document.querySelector('#stop');
  let audio = document.createElement('audio');
  audio.src = './alarmsound.mp3';
  document.body.style.backgroundColor = "white"

  let isPaused = false;

  
  /*1. When the `Set Alarm` button is clicked, get the value of the input field*/
  let input = alarmSet.value;
  
  /*3. Work out how to update the `Time Remaining` title every second set interval funtion will update the counter every second*/
  
  
let setAlarm = setInterval(countDown,1000);
  
  

  function countDown(){
    if (!isPaused){
    if (input >= 10 && input < 60) {
    
  /*2. When you have the input field value, set the title to the correct value*/
    timeRemaining.textContent = `Time Remaining: 00:${input}`;
    input--;
    } else if (input > 0 && input < 10) {
      timeRemaining.textContent =`Time Remaining: 00:0${input}`;
      input--;
    
  /*4. When the remaining time left is 0, play the alarm sound*/
    } else if (input === 0) {
      timeRemaining.textContent = `Time Remaining: 00:00`;
      audio.play();
      clearInterval(setAlarm)
      document.body.style.backgroundColor = "red"
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
