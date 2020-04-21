// Write your code here
// Array of images
const images = ["https://static.twentytwowords.com/cdn-cgi/image/width=800,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/FlameLily_Shutterstock.jpg",
    "http://static.twentytwowords.com/wp-content/uploads/bleedingheart.jpg",
    "https://p0.pikrepo.com/preview/436/1003/blue-roses-thumbnail.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cc/Nerium_oleander_flowers_leaves.jpg",
    "http://static.twentytwowords.com/wp-content/uploads/rsz_bird-of-paradise-flower-1.jpg"
];
let imageNo = document.querySelector("#imageNo");
//This loads the page - line 10 - 13
let flowerPhoto = document.querySelector("#flower-image1");
//This current image index starting at zero
let currentIndex = 0;
imageNo.innerHTML = currentIndex + 1;
//This assigns the first image address to the first src image
flowerPhoto.src = images[currentIndex];

//Below is the beginning of the functions for all the buttons. All these functions change the images per index

//This is the forward button
function goForward() {
    if (currentIndex >= images.length - 1) {
        currentIndex = -1;
    }
    currentIndex++;
    flowerPhoto.src = images[currentIndex];
    imageNo.innerHTML = currentIndex + 1;
}

let forwardBtn = document.getElementById("forward");
forwardBtn.addEventListener("click", goForward);

//This is the back button
function goBack() {
    if (currentIndex <= 0) {
        currentIndex = images.length;
    }
    currentIndex--;
    flowerPhoto.src = images[currentIndex];
    imageNo.innerHTML = currentIndex + 1;
}

let btn = document.getElementById("back");
btn.addEventListener("click", goBack);

//This is a callback function calls the goForward function multiple times using setInterval - from line 20 - 25
//https://www.w3schools.com/jsref/met_win_setinterval.asp

let interval;

function autoForward() {
    stop()
    interval = setInterval(goForward, 1000);
}
let autoForwardBtn = document.getElementById("autoForward");
autoForwardBtn.addEventListener("click", autoForward);

function autoBackward() {
    stop();
    interval = setInterval(goBack, 1000);
}
let autoBackwardBtn = document.getElementById("autoBackward");
autoBackwardBtn.addEventListener("click", autoBackward);

function stop() {
    clearInterval(interval);
}

let stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", stop);

