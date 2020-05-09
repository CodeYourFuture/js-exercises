function setAlarm() {
  let currentTime = document.getElementById("alarmSet").value;
  let x = setInterval(function(){
    if (currentTime > 0 && currentTime <= 60){
      document.getElementById('timeRemaining').innerHTML= "00:0"+ currentTime ;
    }else{
      document.getElementById('timeRemaining').innerHTML= "00:"+ currentTime ;
    }
    currentTime = currentTime - 1;
    if (currentTime < 0 ) {
      currentTime = 0;
      playAlarm();
      //pauseAlarm();
      

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
