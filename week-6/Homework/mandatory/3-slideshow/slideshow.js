// Write your code here
const imageArray = [
  `https://images.unsplash.com/photo-1526649661456-89c7ed4d00b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1171&q=80`,

  `https://images.unsplash.com/photo-1506452819137-0422416856b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80`,

  `https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`,

  `https://images.unsplash.com/flagged/photo-1556655678-9d4812e3fbe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80`,

  `https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1646&q=80`,
];
const getImages = document.querySelector("img");
const autoBack = document.getElementById("autoBack");
const back = document.getElementById("Back");
const stop = document.getElementById("stop");
const forward = document.getElementById("Forward");
const autoForward = document.getElementById("autoForward");

var i = 0;
var autoBackBtn;
var autoForwardBtn;
getImages.src = imageArray[i];
autoBack.addEventListener("click", () => {
  clearInterval(autoForwardBtn);
  autoBackBtn = setInterval(() => {
    getImages.src = imageArray[i--];
    if (i < 0) {
      i = imageArray.length - 1;
    }
  }, 2000);
});

autoForward.addEventListener("click", () => {
  clearInterval(autoBackBtn);
  autoForwardBtn = setInterval(() => {
    getImages.src = imageArray[i++];
    if (i == imageArray.length) {
      i = 0;
    }
  }, 2000);
});
back.addEventListener("click", () => {
  getImages.src = imageArray[i--];
  if (i < 0) {
    i = imageArray.length - 1;
  }
});

forward.addEventListener("click", () => {
  getImages.src = imageArray[i++];
  if (i == imageArray.length) {
    i = 0;
  }
});
stop.addEventListener("click", () => {
  clearInterval(autoBackBtn);
  clearInterval(autoForwardBtn);
});
