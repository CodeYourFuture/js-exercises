function setAlarm() { 
  let getSetTimeTo = document.getElementById('alarmSet');
  let getTimeRemaing = document.getElementById('timeRemaining');
  let getStopBtn = document.getElementById('stop');
  let audioFile = document.createElement('audio');
  audioFile.src = './alarmsound.mp3';
  
  
  /*1. When the `Set Alarm` button is clicked, get the value of the input field*/
   let userInput = getSetTimeTo.value;
  /*3. Work out how to update the `Time Remaining` title every second set interval funtion will update the counter every second*/
   
  let countDown = setInterval(finalCountDown,1000);
   function finalCountDown(){
    let minutes = Math.floor(userInput/60); // to get the minutes the user input has to be divided by 60
    let seconds = userInput % 60;// to get the secound the I need to get remainder of the division by 60
      minutes = minutes<10?'0'+ minutes: minutes; // if minutes less 10 add a 0 to the left side of minutes
     seconds = seconds < 10 ? '0' + seconds : seconds;// if seconds less 10 add a 0 to the left side of seconds
   /*2. When you have the input field value, set the title to the correct value*/

       getTimeRemaing.textContent = `Time Remaining: ${minutes}:${seconds}`;
    --userInput;
    /*4. When the remaining time left is 0, play the alarm sound*/
    if (userInput<0) {
        clearInterval(countDown);
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