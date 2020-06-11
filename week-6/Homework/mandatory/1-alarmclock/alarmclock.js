// Implement the missing functionality according to the task description.
// Hint: Remember which function you need to call when it's time to alarm.
var myInterval;
//var theBackground = document.getElementsByTagName("body").style.backgroundColor;

function setAlarm() {
    if (myInterval !== undefined) {
        clearInterval(myInterval);
        audio.pause();
        document.body.style.backgroundColor = "white";
    }
    var getTheTime = document.getElementById("alarmSet");
    var timeRemaining = document.getElementById("timeRemaining");
    var leftTime = getTheTime.value;

    function time_convert(num) {
        var minutes = Math.floor(num / 60);
        var seconds = num % 60;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        return minutes + ":" + seconds;
    }

    myInterval = setInterval(function() {
        if (leftTime > 0) {
            timeRemaining.innerText = "Time Remaining:" + time_convert(leftTime);
            leftTime--;
        } else {
            timeRemaining.innerText = "Time Remaining:" + time_convert(leftTime);
            playAlarm();
            document.body.style.backgroundColor =
                "rgb(" +
                Math.floor(Math.random() * 256) +
                "," +
                Math.floor(Math.random() * 256) +
                "," +
                Math.floor(Math.random() * 256) +
                ")";
        }
    }, 1000);
    //setTimeout(playAlarm, getTheTime.value * 1000);
}

// var pauseButt = document.getElementById("set");
// pauseButt.innerText = "Pause Alarm";
// pauseButt.addEventListener("click", function () {
//   var pauseLeftTime = leftTime;
//   pauseButt.innerText = "Set Alarm";
// puase =true;
//   return getTheTime.value.pauseLeftTime
// });

// DO NOT EDIT BELOW HERE
/* 
 Try to reason about the code below and understand what it will do.
 You will see that it attaches some event listeners to buttons on the page as well as how to play Audio from JS.
 If you don't remember how to use events, please revisit the previous lession.
*/

/* 
 Open the documentation below if you are keen to know what is Audio object and how it works
 Audio documentation: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
*/
var audio = new Audio("alarmsound.mp3");

function setup() {
    document.getElementById("set").addEventListener("click", () => {
        setAlarm();
    });

    document.getElementById("stop").addEventListener("click", () => {
        pauseAlarm();
        if (myInterval !== undefined) {
            clearInterval(myInterval);
            document.body.style.backgroundColor = "white";
        }
    });
}

function playAlarm() {
    audio.play();
}

function pauseAlarm() {
    audio.pause();
}

/*
 This "window.onload" construct below might be something new that you haven't seen before.
 
 Window Object represents the current open window (tab) in the browser.
 The Window interface contains loads of functionality among others the reference to the DOM Object.
 
 Here you can read more about window interface and see what properties it has:
 https://developer.mozilla.org/en-US/docs/Web/API/Window

 We use the "onload" Window event to run a function when all resources and the DOM has been loaded and ready to use.
 This ensures that "setup" function can find the elements defined in index.html file even if the script HTML tag
 in the index file is appears earlier than the actual HTML elements we look up inside that function. 
 
 You can play and try to see what happens if you replace "window.onload = setup;" with "setup();" function call instead.
 If you open the browser console, you should see an error "Cannot read property 'addEventListener' of null".
 It occurs because this script is being executed earlier and the elements it tries to find hasn't been yet loaded.
 (An alternative way to fix it is by moving the script tags after element with the id "stop".)
 
 Documentation for onload event documentation: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
*/
window.onload = setup;