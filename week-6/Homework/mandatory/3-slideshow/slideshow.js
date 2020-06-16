// Write your code here
let images = [
    "images/img1.jpg",
    "images/img3.jpeg",
    "images/img4.jpeg",
    "images/img5.jpeg",
];

let btnForward = document.getElementById("btnForward");
let btnBackward = document.getElementById("btnBackward");
let btnAutoForward = document.getElementById("btnAutoForward");
let btnAutoBackward = document.getElementById("btnAutoBackward");
let btnStop = document.getElementById("btnStop");
let img = document.getElementById("img");
img.style.width = "60%";
let i = 3;
img.src = images[i]; 

btnForward.addEventListener("click", displayNextImage);
btnBackward.addEventListener("click", displayPreviousImage);
btnAutoForward.addEventListener("click", continuouslyDisplayNextImage);
btnStop.addEventListener("click", stopContinuouslyDisplayNextImage);
btnAutoBackward.addEventListener("click", continuouslyDisplayPreviousImage)

function continuouslyDisplayNextImage() {
    intervalIDForward = setInterval(displayNextImage, 1000);
}

function stopContinuouslyDisplayNextImage () {
    clearInterval(intervalIDForward);
}

function continuouslyDisplayPreviousImage() {
    intervalIDBackward = setInterval(displayPreviousImage, 1000);
}

function stopContinuouslyDisplayNextImage () {
    clearInterval(intervalIDBackward);
}

function displayPreviousImage() {
    img.src = images[i];
    i--;
    if(i<0){
        i = images.length-1;
    }
};

function displayNextImage() {
    img.src = images[i]; 
      i++;
      if(i>=images.length) {
          i = 0;
      }
    };
