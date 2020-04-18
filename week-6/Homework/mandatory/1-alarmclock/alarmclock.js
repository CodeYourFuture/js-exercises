function secondsToHms(d) {
  d = Number(d);
var h = Math.floor(d / 3600).toString().padStart(2, '0');
var m = Math.floor(d % 3600 / 60).toString().padStart(2, '0');
var s = Math.floor(d % 3600 % 60).toString().padStart(2, '0');
return `${h}: ${m}: ${s}` 
}
let myTime = -1;
function setAlarm() {	
dPlay = document.getElementById('timeRemaining');
let time = document.getElementById('alarmSet'); 
clearInterval(myTime);
newTime = time.value

myTime = setInterval(()=>{

newTime--;
dPlay.innerHTML = `Time Remaining: ${secondsToHms(newTime)}`;
if(newTime === 0){
  clearInterval(myTime);
  dPlay.style.color = '#FF6347';
  playAlarm();
  
}else{
dPlay.style.color = 'dodgerblue';}},1000)

}


document.getElementById("pause").addEventListener("click", () => {
if(myTime == -1){
document.getElementById("pause").innerHTML =  'pause'
myTime = setInterval(()=>{
  newTime--;
dPlay.innerHTML = `Time Remaining: ${secondsToHms(newTime)}`
if(newTime === 0){
  clearInterval(myTime);
  dPlay.style.color = '#FF6347';
  playAlarm();
  
}},500)
}else{
document.getElementById("pause").innerHTML =  'start'
clearInterval(myTime);
myTime = -1;

}});
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