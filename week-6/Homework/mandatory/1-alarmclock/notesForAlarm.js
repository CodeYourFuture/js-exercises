//alarm sound
function setup() {
    var audio = new Audio("alarmsound.mp3");
    console.log(document.getElementById("set"));

    //append the button to a onclick eventListerner   
    document.getElementById("set").addEventListener("click", () => {
        setAlarm();
    });

    //get button and append to the stop event   
    document.getElementById("stop").addEventListener("click", () => {
        pauseAlarm(audio);
    });
}

// plays the alarm  
function playAlarm(audio) {
    audio.play();
}

// this pauses the alarm sound 
function pauseAlarm(audio) {
    audio.pause();
}

window.onload = setup;