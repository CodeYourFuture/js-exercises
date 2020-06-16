// Write your code here
// console.log("Hello World");
let slidesImages = [
  "https://wallpaperplay.com/walls/full/5/4/a/105432.jpg",
  "https://i.pinimg.com/originals/92/3a/57/923a57786abf4570c02432ad1c308eef.jpg",
  "https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408-825x465@2x.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41gkq6m34QL._AC_.jpg",
  "https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg?w=590&h=800&ACB6A419-81EB-4B9C-B846FD8EBFB16FBE",
  "https://www.nhm.ac.uk/content/dam/nhmwww/discover/rainbow-orange/orange-autumnal-leaves-two-column.jpg.thumb.768.768.jpg",
  "https://devdiscourse.blob.core.windows.net/devnews/29_02_2020_10_21_37_6887228.JPG",
];

// let newSlides = slidesImages.map((size) => (size.style.width = "400px"));

let image = document.getElementById("image");
let i = 0;
let next;
image.src = slidesImages[i];

let forwardButton = document.querySelector(".forward");
function handleForwardClick() {
  if (i < slidesImages.length - 1) {
    i++;
    image.src = slidesImages[i];
  }
  // image.src = slidesImages[Number(slidesImages[0]) + 1];
}
forwardButton.addEventListener("click", handleForwardClick);

function handleBackClick() {
  if (i > 0) {
    i--;
    image.src = slidesImages[i];
  }
}

let backButton = document.querySelector(".back");
backButton.addEventListener("click", handleBackClick);
let autoForwardButton = document.querySelector(".autoforward");

// console.log(autoForwardButton);

autoForwardButton.addEventListener("click", nextImage);

function nextImage() {
  clearInterval(next);
  next = setInterval(handleForwardClick, 1000);
}

autoForwardButton.addEventListener("click", nextImage);

let autoBackButton = document.querySelector(".autoback");

function moveBack() {
  clearInterval(next);
  next = setInterval(handleBackClick, 1000);
}
autoBackButton.addEventListener("click", moveBack);

let stopButton = document.querySelector(".stop");
console.log(stopButton);

function stopImages() {
  clearInterval(next);
}
stopButton.addEventListener("click", stopImages);
