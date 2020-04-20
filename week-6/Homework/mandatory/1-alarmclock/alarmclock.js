let reset = document.querySelector('#reset')
let input = document.querySelector('#alarmSet')

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
          time.style.color = 'red'
          title.style.color = 'red'
        }, 300)
        let white = setTimeout(function white () {
          time.style.color = 'white'
          title.style.color = 'white'
        }, 600)
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
  document.getElementById("set").addEventListener("click", () => {
    clearInterval(countdown)
  });
  if (set <= 0 || null) {
    alert('Please enter a value bigger than 0')
    clearInterval(countdown)
  }
}

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("set").click();
  }
});

reset.addEventListener('click', ()=>{
  location.reload(true)
})

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