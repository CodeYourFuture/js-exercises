function setAlarm() {
  let currentTime = document.getElementById("alarmSet").value;
  let s = 60;
  let x = setInterval(function(){
    document.getElementById('timeRemaining').innerHTML=" " + currentTime + ":" + s;
    currentTime = currentTime - 1;
     if (s > 0 ){
       s= s - 1;
     }
    if (currentTime < 0 ) {
      clearInterval(x);
    }
  }, 1000);

  console.log(currentTime);

}
function myTimer() {
  let Dive = document.querySelector('center');
  let Time = document.createElement("p");
  //Dive.append(Time);
  var d = new Date();
  document.getElementById(Time).innerHTML = d.toLocaleTimeString();
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