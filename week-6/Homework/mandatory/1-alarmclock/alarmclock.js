function setAlarm() {
  let alarmSet = document.querySelector('#alarmSet');
  let timeRemaining = document.querySelector('#timeRemaining');
  let stop = document.querySelector('#stop');
  let audio = document.createElement('audio');
  audio.src = './alarmsound.mp3';
  let input = alarmSet.value;
  let setAlarm = setInterval(countDown, 1000);
  
  let setColor = setInterval(colorChange, 100)

  function countDown(){

    if (input >= 10 && input < 60) {
    timeRemaining.textContent = `Time Remaining: 00:${input}`;
    input--;
    } else if (input > 0 && input < 10) {
      timeRemaining.textContent =`Time Remaining: 00:0${input}`;
      input--;
    
    } else if (input === 0) {
      timeRemaining.textContent = `Time Remaining: 00:00`;
      audio.play();
      clearInterval(setAlarm)
      // document.body.style.backgroundColor = "red"

    }
  }

  function colorChange(){
    if (input === 0) {
      document.body.style.backgroundColor === "white" ? document.body.style.backgroundColor = "red" : document.body.style.backgroundColor = "white"
    }
  }


  stop.addEventListener('click', () => {
    audio.pause();
    alarmSet.value = ''
    audio.src='';

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
