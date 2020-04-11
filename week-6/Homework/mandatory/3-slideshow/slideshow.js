// Write your code here


let photoArray = [
"https://images.unsplash.com/photo-1564665759044-959473395029?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1518084823714-2f59a7315a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1513073945753-eb763d2a99de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1510253687831-0f982d7862fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
];

let slideBox = document.getElementById("slideBox");
let imageEl = document.createElement("img");
slideBox.appendChild(imageEl);
const backBtn = document.querySelector("#backButton");
const fwdBtn = document.querySelector("#forwardButton");
const autoFwdBtn = document.querySelector("#autoForward");
const autoBackBtn = document.querySelector("#autoBack");
const stopBtn = document.querySelector("#stop");
imageEl.src = photoArray[0];

let i = 0;
let j;

function forwardImg() {
  imageEl.src = photoArray[i];
  i++;
  j = i - 2;
  console.log(i)
  i == photoArray.length ? (i = 0) : i;
}

function backwardImg() {
  imageEl.src = photoArray[j];
  j--;
  i = j + 2;
  j < 0 ? (j = photoArray.length - 1) : j;
  console.log(j);
}

fwdBtn.addEventListener("click", forwardImg);
backBtn.addEventListener("click", backwardImg);

autoFwdBtn.addEventListener("click", function() {
   var myVar = setInterval(forwardImg, 1000);
   stopBtn.addEventListener("click", function() {
    clearInterval(myVar);
    });
});

autoBackBtn.addEventListener("click", function() {
    var myVar = setInterval(backwardImg, 1000);
    stopBtn.addEventListener("click", function() {
      clearInterval(myVar);
    });
});
