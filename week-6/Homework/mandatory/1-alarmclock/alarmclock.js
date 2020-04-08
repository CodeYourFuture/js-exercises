


function setAlarm() {
  let getAlarmBtn = document.getElementById('set');
  let getSetTimeTo = document.getElementById('alarmSet');
  let getTimeRemaing = document.getElementById('timeRemaining');
  let getStopBtn = document.getElementById('stop');
  let audioFile = document.createElement('audio');
  audioFile.src = './alarmsound.mp3';
  let userInput = getSetTimeTo.value;
  
  getAlarmBtn.addEventListener('click',()=>{
    setInterval(finalCountDown,1000);
    function finalCountDown(){
      if (userInput>10 && userInput<60) {
        getTimeRemaing.textContent = `Time Remaining: 00:${--userInput}`;
      }else if(userInput>0 && userInput <=10){
        getTimeRemaing.textContent =`Time Remaining: 00:0${--userInput}`;
      }else if(userInput===0){
        getTimeRemaing.textContent = `Time Remaining: 00:0${userInput}`;
        audioFile.play();
      } 
      
    }
  });
  getStopBtn.addEventListener('click', () => {
    audioFile.pause();
    audioFile.src='';

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