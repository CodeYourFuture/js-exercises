// Write your code here
let images = [
  { id: "001", src: "images/image-one.jpeg" },
  {
    id: "002",
    src: "images/image-two.jpeg",
  },
  {
    id: "003",
    src: "images/image-three.jpeg",
  },
  {
    id: "004",
    src: "images/image-four.jpeg",
  },
];
let i = 0;

const holderEle = document.querySelector(".container");
const imgEle = document.querySelector(".slide");
const btnForward = document.querySelector(".btn-one");
const btnBackward = document.querySelector(".btn-two");
const autoB = document.querySelector(".btn-four");
const autoF = document.querySelector(".btn-three");
const btnStop = document.querySelector(".btn-five");
document.querySelector(".image-number").innerHTML = `${images[0].id}`;

imgEle.setAttribute("src", `${images[0].src}`);

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

autoB.addEventListener("click", () => {
  clearInterval(window.slideB )
  clearInterval(window.slideF)
  slideB = setInterval(backward, 1000);
});
autoF.addEventListener("click", () => {
  clearInterval(window.slideB )
  clearInterval(window.slideF)
  slideF = setInterval(forward, 1000);
});
console.log(btnStop);
btnStop.addEventListener("click", () => {
  if (window.slideB){
    clearInterval(window.slideB );
  }
  if(window.slideF){
    clearInterval(window.slideF)
  }
  

  console.log("hello");
});
