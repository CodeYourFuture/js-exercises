// Write your code here
//Solution to Level 2.
//This also includes the "extra" task of including UI to control slideshow delay.

//Deployed at https://cyf-slideshow-lvl-2-sample-soln.glitch.me/

let timerInterval;
let currentImageIndex = 0;

window.onload = setup;

const images = [
	"images/1-tatiana-rodriguez.jpg",
	"images/2-sonny-ravesteijn.jpg",
	"images/3-mike-szczepanski.jpg",
	"images/4-erica-nilsson.jpg",
	"images/5-franck-v.jpg",
];

function setup() {
	const forwardButton = document.getElementById("forwardButton");
	const backButton = document.getElementById("backButton");
	const autoForwardButton = document.getElementById("autoForwardButton");
	const autoBackButton = document.getElementById("autoBackButton");
	const stopButton = document.getElementById("stopButton");

	backButton.addEventListener("click", handleBackButton);
	forwardButton.addEventListener("click", handleForwardButton);
	stopButton.addEventListener("click", stop);
	autoBackButton.addEventListener("click", () => {
		autoBack();
		autoBackButton.classList.add("down");
	});
	autoForwardButton.addEventListener("click", () => {
		autoForward();
		autoForwardButton.classList.add("down");
	});

	currentImageIndex = 0;
	showCurrentImage();
}

//Some button(s)may be styled to indicate they are "down" or active
//e.g. while auto-forward is active that button will be styled "down".
//This function releases them or "pops them up"
function popAllButtonsUp() {
	const buttons = document.querySelectorAll("button");
	buttons.forEach((elem) => elem.classList.remove("down"));
}

function handleForwardButton() {
	stopAnyTimer();
	nextImage();
}

function handleBackButton() {
	stopAnyTimer();
	prevImage();
}

function nextImage() {
	currentImageIndex++;
	if (currentImageIndex >= images.length) {
		currentImageIndex = 0;
	}
	showCurrentImage();
}

function prevImage() {
	currentImageIndex--;
	if (currentImageIndex < 0) {
		currentImageIndex = images.length - 1;
	}
	showCurrentImage();
}

function autoForward() {
	stopAnyTimer();
	timerInterval = setInterval(nextImage, getDelaySeconds() * 1000);
}

function autoBack() {
	stopAnyTimer();
	timerInterval = setInterval(prevImage, getDelaySeconds() * 1000);
}

//return a slideshow delay in seconds from the input field or
//a default if the value is missing or unsuitable.
function getDelaySeconds() {
	const inputElem = document.getElementById("delayInput");
	const str = inputElem.value;
	let result = 5;
	if (str) {
		const num = Number(str);
		if (num >= 1) {
			result = num;
		}
	}
	inputElem.value = result;
	return result;
}

function stop() {
	stopAnyTimer();
}

function stopAnyTimer() {
	if (timerInterval) {
		clearInterval(timerInterval);
		timerInterval = undefined;
	}
	popAllButtonsUp();
}

function showCurrentImage() {
	const url = images[currentImageIndex];
	const imgElem = document.getElementById("mainImage");
	imgElem.setAttribute("src", url);
}
