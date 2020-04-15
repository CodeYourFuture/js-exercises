// set alarm button
function setAlarm() {
  let curren]Time = document.getElementById("alarmSet").value;
  let x = setInterval(function(){
    if (currentTime < 10 && currentTime >= 0){
      document.getElementById('timeRemaining').innerHTML= "00:0"+ currentTime ;
    }else{
      document.getElementById('timeRemaining').innerHTML= "00:"+ currentTime ;
    }
    currentTime = currentTime - 1;
    if (currentTime < 0 ) {
      playAlarm();
      colorB(z=0);
      clearInterval(x);
    } 
}, 1000);
}

// change color :

function colorB(co){ 
  console.log(co);
  let col = setInterval(function(){
    let color = ["orange", "purple", "yellow","red","brown"];
    for(let i = 0; i < 5; i++){
      document.body.style.backgroundColor = color[Math.floor(Math.random() * 4)];  
    }
  }, 300);
  document.body.style.backgroundColor = "white";
  if (co === true ){
    console.log("inside: " + co);
    clearInterval(col);
    
  }
}

// The Timer in top left :
var Timer = setInterval(myTimer, 1000);
let Time = document.createElement("h1");
function myTimer() {
  var d = new Date();
  Time.innerHTML =  d.toLocaleTimeString();
  Time.style.color = 'red';
  Time.style.fontSize = '25px';
  document.body.appendChild(Time);
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
  let co = true;
  colorB(co);
}
window.onload = setup;