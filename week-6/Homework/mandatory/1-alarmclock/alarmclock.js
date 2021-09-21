// Implement the missing functionality according to the task description.
// Hint: Remember which function you need to call when it's time to alarm.
var buttonType = document.getElementById("set");
var TimeToset = document.querySelector("#alarmSet");
var clocStart = document.getElementById("timeRemaining");
function playAlarm() {
	setInterval(function (num) {
		if (num < 10) {
			num = "00" + num;
		} else {
			num = num.toString();
		}
		return num;
	}, 1000);
}

var CurrentTime = document.getElementById("timeTostart");
document.getElementById("alarmSet").appendChild(alarmClock.timeHour);

function initiateAlarm() {
	alarmClock.sound = document.getElementById("alarm-sound");
	setInterval(alarmClock.updateCurrentTime, 1000);
}

// Week6 homework solution bellow

//this is the simple version, if you like to see the advance version you need to uncomment some stuff in the html file
const userInput = document.getElementById("alarmSet");
const displayScreen = document.getElementById("timeRemaining");
let secondsRemaining;
let intervalId;
function setAlarm() {
	secondsRemaining = getSecondsFromInput();
	updateDisplay(secondsRemaining);
	intervalId = setInterval(() => tick(), 1000);
}

function tick() {
	secondsRemaining -= 1;
	updateDisplay(secondsRemaining);
	if (secondsRemaining <= 0) {
		playAlarm();
		clearInterval(intervalId);
	}
}
//SOLID
function getSecondsFromInput() {
	return Number(userInput.value);
}

function updateDisplay(seconds) {
	const pad = function (n) {
		return n.toString().padStart(2, "0");
	}; //if you don't want padstart (browser compatibility), you can use a mix of repeat and slice to do same effect

	const mm = pad(Math.floor(seconds / 60));
	const ss = pad(seconds % 60);

	const msg = `Time Remaining: ${mm}:${ss}`;
	displayScreen.textContent = msg;
}
function stopAlarm() {
	clearInterval(intervalId);
}

// Alarm clock advance

//Simple countdown timer.
//One button "setAlarm" sets the timer
//One button "stopAlarm" mutes the alarm *sound*.

//Deployed at: https://cyf-alarm-clock-sample-soln.glitch.me/

//This solution uses a global to track secondsRemaining instead of a closure in setAlarm.

//Multiple presses of the "set alarm" button will
//all reset and set this singleton interval.

//DOM elements
// (we can add the button, but as task says don't change it, we won't. For consistency)
const userInput = document.getElementById("alarmSet");
const displayScreen = document.getElementById("timeRemaining");

//setting a variable to use with setinterval
// setinterval return a value that can be used to clear it later on by clearinterval method, Try googling setinterval
let intervalID;
let flashIntervalId;
//number of seconds remaining before timer should ring, the countdown
let secondsRemaining;

//Sets and starts the alarm countdown,
//based on a value it finds in the DOM
let paused = false;
function setAlarm() {
	clearIntervalIfSet();

	if (!paused) {
		var temp = getSecondsFromInput();
		if (!temp) {
			alert("Please enter a valid time");
			return;
		}
		secondsRemaining = temp;
		updateDisplay(secondsRemaining);
	}
	paused = false;

	//to get the first second to display
	//call tick every second, update the value of intervalID, to be able to clear it later
	intervalID = setInterval(() => tick(), 1000);
}
//Called every second,
//Decrements remaining time,
//updates display
//if time is up, trigger alarm and stop timer
function tick() {
	secondsRemaining -= 1;
	updateDisplay(secondsRemaining);
	if (secondsRemaining <= 0) {
		playAlarm();
		flashIntervalId = setInterval(flashColor, 500);
		clearIntervalIfSet();
	}
}

//Clear the timer interval, if it has been set.
//It's ok to call this if interval is not set.
function clearIntervalIfSet() {
	if (intervalID) {
		clearInterval(intervalID);
		//  intervalID = undefined; //we are reseting the id instantly, but if you have more intervals you can have some overlapping
		//as the value is created on the fly, so it can be helpful in more than one interval to set each intervalid to undefiend in the end
	}
}

//Get the user input from the DOM as a number (in seconds)
function getSecondsFromInput() {
	var secondsAmount = Number(userInput.value);
	if (secondsAmount <= 0) {
		return;
	}
	return Number(userInput.value);
}

//update the DOM time-remaining display to show the seconds remaining
function updateDisplay(secondsRemaining) {
	const pad = (n) => n.toString().padStart(2, "0"); //if you don't want padstart (browser compatibility), you can use a mix of repeat and slice to do same effect

	const mm = pad(Math.floor(secondsRemaining / 60));
	const ss = pad(secondsRemaining % 60);

	const msg = `Time Remaining: ${mm}:${ss}`;
	displayScreen.textContent = msg;
}

//extra
//flash color
let background = document.body.style; //backgroundColor
function flashColor() {
	let getRandomRGB = function () {
		return Math.floor(Math.random() * 255);
	};
	let random1 = getRandomRGB();
	let random2 = getRandomRGB();
	let random3 = getRandomRGB();
	if (!audio.paused) {
		background.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
	}
}
//pause button
let pauseButton = document.getElementById("pause");
function pauseAlarm() {
	clearIntervalIfSet();
	paused = true;
}
//if you want to use pause button with start, some change will be done to set

pauseButton.addEventListener("click", () => pauseAlarm());

//#region  DO NOT EDIT BELOW HERE
var audio = new Audio("alarmsound.mp3");

function setup() {
	document.getElementById("set").addEventListener("click", () => {
		setAlarm();
	});

	document.getElementById("stop").addEventListener("click", () => {
		stopAlarm();
		background.backgroundColor = "";
		paused = false;
	});
}

function playAlarm() {
	audio.play();
}

function stopAlarm() {
	clearIntervalIfSet();
	updateDisplay(0);
	clearInterval(flashIntervalId);
	audio.pause();
}

window.onload = setup;
//#endregion
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
