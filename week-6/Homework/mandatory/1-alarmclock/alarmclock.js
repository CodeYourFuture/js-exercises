// ## How the clock should work

// When you click the `Set Alarm` button the counter at the top of the screen should change to the number you entered in the `input` field. For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.

// Every one second the title should count down by one.

// When the `Time Remaining` reaches `00:00` the alarm should play a sound. You can make the sound happen by using `playAlarm()`.

// You can stop the alarm sound by pressing the `Stop Alarm` button.

let reset = document.querySelector('#reset')

function setAlarm(){
  let inputField = document.querySelector('#alarmSet')
  let title = document.querySelector('#timeRemaining')
  let time = document.querySelector("#time");
  let audioEl = document.querySelector("#myAudio")
  let body = document.querySelector('body')
  let set = inputField.value*1000
  let countdown = setInterval(timer, 1000)

    function timer() {
      let min = Math.floor((set % (1000 * 60 * 60)) / (1000 * 60));
      let sec = Math.floor((set % (1000 * 60)) / 1000);
    
      time.innerHTML = `${min} : ${sec}`
      set = set-1000
      if (set < 10000) {
        let red = setTimeout(function () {
          time.style.color = 'white'
          title.style.color = 'white'
        }, 700)
        let white= setTimeout(function white () {
          time.style.color = 'red'
          title.style.color = 'red'
        }, 300)
        if (set < 0) {
          clearTimeout(red)
          clearTimeout(white)
          body.style.background = 'red'
          title.style.color = 'white'
          time.style.color = 'white'
        }
      }
      if (set < 0) {
        clearInterval(countdown)
        playAlarm(audioEl);
      }
    }
}

reset.addEventListener('click', ()=>{
  location.reload(true)
})


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
window.onload = setup