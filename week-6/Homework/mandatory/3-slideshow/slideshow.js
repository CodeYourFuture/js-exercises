// Write your code here
let indexImage = 0;
let setHandler;
function forward() {
  if (indexImage === images.length - 1) {
    indexImage = 0;
  } else {
    indexImage++;
  }

  changeHTML();
}
function back() {
  if (indexImage === 0) {
    indexImage = images.length - 1;
  } else {
    indexImage--;
  }

  changeHTML();
}
function autoBack() {
  stop();
  setHandler = setInterval(back, 4000);
}
function autoForward() {
  stop();
  setHandler = setInterval(forward, 4000);
}
function stop() {
  clearInterval(setHandler);
}
let container = document.getElementById("imageContainer");
let createImg = document.createElement("img");
createImg.style.width = "50%";
let getTheIndex = document.getElementById("myIndex");

function changeHTML() {
  createImg.src = images[indexImage];
  getTheIndex.innerHTML = indexImage;
  container.appendChild(createImg);
}

let images = [
  "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG",
  "https://i.dailymail.co.uk/1s/2020/01/07/00/23077356-7858657-image-a-88_1578357487105.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
  "https://www.elyssamcgregor.com/wp-content/uploads/2018/11/what-is-a-gif.jpg",
];
changeHTML(images);
// window.onload = forward;
console.log(images.length);
