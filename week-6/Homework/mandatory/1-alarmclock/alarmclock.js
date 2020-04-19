function setAlarm() { 
  let getSetTimeTo = document.getElementById('alarmSet');
  let getTimeRemaing = document.getElementById('timeRemaining');
  let getStopBtn = document.getElementById('stop');
  let audioFile = document.createElement('audio');
  audioFile.src = './alarmsound.mp3';
  
  /*1. When the `Set Alarm` button is clicked, get the value of the input field*/
  let userInput = getSetTimeTo.value;
  
  /*3. Work out how to update the `Time Remaining` title every second set interval funtion will update the counter every second*/
  setInterval(finalCountDown,1000);
  function finalCountDown(){
    --userInput

    if (userInput>10 && userInput<60) {
    
  /*2. When you have the input field value, set the title to the correct value*/
      getTimeRemaing.textContent = `Time Remaining: 00:${userInput}`;
    } else if (userInput>0 && userInput <=10) {
      getTimeRemaing.textContent =`Time Remaining: 00:0${userInput}`;
    
  /*4. When the remaining time left is 0, play the alarm sound*/
    } else if (userInput===0) {
      getTimeRemaing.textContent = `Time Remaining: 00:0${userInput}`;
      audioFile.play();
    } 
    
  }
  getStopBtn.addEventListener('click', () => {
    audioFile.pause();
    audioFile.src='';
    
  });
}

 /*extra code Just for reference*/

 //let getAlarmBtn = document.getElementById('set');
//getAlarmBtn.addEventListener('click',()=>{
  //});
  




// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");
=======


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