// set alarm button
function setAlarm() {
  let currentTime = document.getElementById("alarmSet").value;
  let x = setInterval(function(){
    if (currentTime < 10 && currentTime >= 0){
      document.getElementById('timeRemaining').innerHTML= "00:0"+ currentTime ;
    }else{
      document.getElementById('timeRemaining').innerHTML= "00:"+ currentTime ;
    }
    currentTime = currentTime - 1;
    if (currentTime < 0 ) {
      playAlarm();
      colorB(co);
      clearInterval(x);
    } 
}, 1000);
} 

// change color :
let col = 0 ;
let co;
function colorB(co){ 
  if (co === 1 ){
     setInterval(function(){
    console.log("play"+ co);
    let color = ["orange", "purple", "yellow","red","brown"];
    for(let i = 0; i < 5; i++){
       document.body.style.backgroundColor = color[Math.floor(Math.random() * 4)];  
     }
  }, 300); 
  }else{ 
    console.log("stop: "+ co);
    clearInterval(col);
    document.body.style.backgroundColor = "white";
    co = 0;
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
  co = 1;
}
function pauseAlarm() {
  audio.pause();
  colorB(co = 0);
}
window.onload = setup;