// Write your code here
// Array of images
const images = ["https://i.ytimg.com/vi/3EIbWjkimAs/maxresdefault.jpg",
    "http://i.ytimg.com/vi/5VBriRtl_aM/maxresdefault.jpg",
    "https://i.ytimg.com/vi/vqc8oezvs8I/maxresdefault.jpg",
    "https://previews.123rf.com/images/asae/asae1408/asae140800118/31122898-the-cat-weigh-oneself.jpg",
    "https://i.ytimg.com/vi/jcIgnP8D2KE/maxresdefault.jpg"
];
let imageNo = document.querySelector("#imageNo");
//This loads the page - line 10 - 13
let catPhoto = document.querySelector("#cat-image1");
//This current image index starting at zero
let currentIndex = 0;
imageNo.innerHTML = currentIndex + 1;
//This assigns the first image address to the first src image
catPhoto.src = images[currentIndex];

//Below is the beginning of the functions for all the buttons. All these functions change the images per index

//This is the forward button
function goForward() {
    if (currentIndex >= images.length - 1) {
        currentIndex = -1;
    }
    currentIndex++;
    catPhoto.src = images[currentIndex];
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
    catPhoto.src = images[currentIndex];
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

