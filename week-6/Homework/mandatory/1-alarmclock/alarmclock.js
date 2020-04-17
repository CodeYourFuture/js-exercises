function setAlarm() {
  let alarmSet = document.querySelector('#alarmSet');
  let timeRemaining = document.querySelector('#timeRemaining');
  let stop = document.querySelector('#stop');
  let audio = document.createElement('audio');
  audio.src = './alarmsound.mp3';
  let input = alarmSet.value;
  let setAlarm = setInterval(countDown, 1000);
  let setBtn = document.getElementById("set")
  setBtn.disabled = true
  let stopBtn = document.getElementById("stop")
  stopBtn.disabled = false




  let setColor = setInterval(colorChange, 100)

  function countDown(){

    if (input>= 1 && input <= 3600){
      let minutes = Math.floor(input / 60);
      let seconds = input - minutes * 60;
      seconds < 10 ? seconds = ('0' + seconds.toString()).slice(-2) : 0
      minutes < 10 ? minutes = ('0' + minutes.toString()).slice(-2) : 0
      timeRemaining.textContent = `Time Remaining: ${minutes}:${seconds}`;
      input--;
    }
    else if (input === 0) {
      timeRemaining.textContent = `Time Remaining: 00:00`;
      audio.play();
      clearInterval(setAlarm)
    }
  }

  function colorChange(){
    if (input === 0) {
      document.body.style.backgroundColor === "white" ? document.body.style.backgroundColor = "red" : document.body.style.backgroundColor = "white"
    }
  }


  stop.addEventListener('click', () => {
    audio.pause();

    audio.src='';
    setBtn.disabled = false
    stopBtn.disabled = true
    clearInterval(setAlarm)
    clearInterval(setColor)
    document.body.style.backgroundColor = "white"

   
  });
 

}











// DO NOT EDIT BELOW HERE

function setup() {
  var audio = new Audio("alarmsound.mp3");

  console.log(document.getElementById("set"));

  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm(audio);
  });
}

function playAlarm(audio) {
  audio.play();
}

function pauseAlarm(audio) {
  audio.pause();
}

window.onload = setup;
