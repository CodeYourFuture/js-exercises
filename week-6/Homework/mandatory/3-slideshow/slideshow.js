let images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
  "images/image10.jpg",
  "images/image11.jpg",
  "images/image12.jpg",
  "images/image13.jpg",
  "images/image14.jpg",
  "images/image15.jpg",
  "images/image16.jpg",
  "images/image17.jpg",
  "images/image18.jpg",
  "images/image19.jpg",
  "images/image20.jpg",
  "images/image21.jpg",
  "images/image22.jpg",
];
let image = document.querySelector("div>img");
let showpicnum = document.querySelector("#showpicnum");
let forwardButton = document.querySelector("#forward");
let autobackButton = document.querySelector("#autoback");
let autoforwardButton = document.querySelector("#autoforward");
let stopButton = document.querySelector("#stop");
let backButton = document.querySelector("#back");
let container = document.querySelector(".slideshow")
let i = 0;
let myAutoforward = null;
let myAutobackward = null;
let myColor = null;

function color() {
  let colorArr = ["MEDIUMAQUAMARINE","LIGHTSEAGREEN","DARKGREEN","AQUAMARINE","CADETBLUE","OLIVE","YELLOWGREEN","DARKGREEN","SPRINGGREEN"];
  let randomNumber = Math.floor(Math.random() * colorArr.length);
  container.style.backgroundColor = colorArr[randomNumber];
  let colorArr2 = ["STEELBLUE","LIGHTSTEELBLUE","LIGHTBLUE","blue","CYAN","DEEPSKYBLUE"];
  let randomNumber2 = Math.floor(Math.random() * colorArr2.length);
  document.body.style.backgroundColor = colorArr2[randomNumber2];
}

forwardButton.addEventListener("click", goforward);
function goforward() {
  i = i + 1;
  image.src = images[i];
  showpicnum.innerHTML = i;
  if (i === images.length) {
    i = 0;
    image.src = images[i];
    showpicnum.innerHTML = 0;
  }
  myColor = setInterval(color,2000);
}

backButton.addEventListener("click", goback);
function goback() {
  i = i - 1;
  image.src = images[i];
  showpicnum.innerHTML = i;
  if (i < 0) {
    i = images.length - 1;
    image.src = images[i];
    showpicnum.innerHTML = i;
  }
  myColor = setInterval(color,2000);
}

autoforwardButton.addEventListener("click", autoforward);
function autoforward() {
  clearInterval(myAutobackward);
  myAutoforward = setInterval(goforward,1000);
}

autobackButton.addEventListener("click", autoback);
function autoback() {
  clearInterval(myAutoforward);
  myAutobackward = setInterval(goback, 3000);
}

stopButton.addEventListener("click", stop);
function stop() {
  clearInterval(myAutoforward);
  clearInterval(myAutobackward);
  clearInterval(myColor);
}
