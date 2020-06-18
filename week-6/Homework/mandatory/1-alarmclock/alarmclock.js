function setAlarm() {
  let timeValue = document.getElementById("alarmSet").value;
  let minValue = Math.floor(timeValue / 60);
  let secValue = timeValue % 60;
  alarmSet = setInterval(() => {
    if (secValue === 0 && minValue > 0) {
      minValue--;
      secValue = 59;
    } else if (secValue > 0) {
      secValue--;
    } else {
      playAlarm();
    }
    document.getElementById("timeRemaining").innerText =
      "Time Remaining: ${addZero(minValue)} : ${addZero(secValue)}";
  }, 1000);
}
let alarmSet;
window.clearInterval(alarmSet);
function addZero(number) {
  return (parseInt(number) < 10 ? "0" : "") + number;
}

// function setAlarm() {
//   let counting = document.getElementById("timeRemaining");
//   setTime = document.getElementById("alarmSet");
//   let num = setTime.value;

//   let myAlarm = setInterval(function () {
//     // if (isNaN(timeValue)) {
//     //   alert("Invalid Date")};
//     if (num > 0) num--;
//     num < 10
//       ? (counting.innerText = "Time Remaining: 00:0" + num)
//       : (counting.innerText = "Time Remaining: 00:" + num);
//     if (num === 0) {
//       playAlarm();
//     }
//   }, 3000);
// }
// function myStopFunction() {
//   clearInterval(myAlarm);
// }

// function pauseAlarm() {
//   audio.pause();
//   alarmSound.currentTime = 0;
//   document.getElementById ("stop").style.display = 'none';
//   cancelAlarm(document.getElementById('alarmButton'))
// };

//   var alert = new Date(ms)
//   var alertTime = Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm,getUTCHours(), alarm.UTCMinutes(), alarm.getUTCSeconds());
//   var remainingTime = alarmTime.getTime() - (new Date()).getTime(),
//   if (remainingTime <0) {
//     alert("specified time is already passed!");
//     return;
//   }
//   alarmTimer = setTimeout(initAlarm, remainingTime);
//   button.innerText = 'Cancel Alarm';
//   button.setAttribute('onclick', 'cancelAlarm(this);');
//   clearTimeout(alarm)
// };
// function cancelAlarm(button) {
//   button.innerText = 'Set Alarm';
//   button.setAttribute('onclick', 'setAlarm(this);');
// };
// function initAlarm() {
//   alarmSound.play();
//   document.getElementById("alarmOptions").style.display = "";
// };
// function stopAlarm() {
//   alarmSound.pause();
//   alarmSound.currentTime = 0;
//   document.getElementById ("alarmOption").style.display = 'none';
//   cancelAlarm(document.getElementById('alarmButton'))
// };
// function snooze() {
//   stopAlarm();
//   setTimeout(initAlarm, 30000)
// }

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
