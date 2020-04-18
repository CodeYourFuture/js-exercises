// Write your code here
let images = [
    { id: "01", 
      src: "images/01.jpg" },
    {
      id: "02",
      src: "images/02.jpg",
    },
    {
      id: "03",
      src: "images/03.jpg",
    },
    {
      id: "04",
      src: "images/04.jpg",
    },
  ];
  let i = 0;

let ImHolder = document.querySelector("#slideBox");
let imgEle = document.querySelector("#slide");
let btnForward = document.querySelector("#forwardBtn");
let btnBackward = document.querySelector("#backBtn");
let autoBck = document.querySelector("#autoBack");
let autoFrwd = document.querySelector("#autoForward");
let btnStop = document.querySelector("#stop");


function forward() {
  i++;
  if (i > images.length - 1) {
    i = 0;
  }
  imgEle.setAttribute("src", `${images[i].src}`);
  document.querySelector(".image-number").innerHTML = `${images[i].id}`;
}

btnForward.addEventListener("click", forward);

function backward() {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  imgEle.setAttribute("src", `${images[i].src}`);
  document.querySelector(".image-number").innerHTML = `${images[i].id}`;
}
btnBackward.addEventListener("click", backward);

autoBck.addEventListener("click", () => {
  slideB = setInterval(backward, 1500);
});
autoFrwd.addEventListener("click", () => {
  slideF = setInterval(forward, 1500);
});

btnStop.addEventListener("click", () => {
  if (window.slideB){
    clearInterval(window.slideB );
  }
  if(window.slideF){
    clearInterval(window.slideF)
  }
})