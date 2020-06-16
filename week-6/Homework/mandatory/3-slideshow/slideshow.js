const mainContainer = document.createElement("div");
document.body.appendChild(mainContainer);

const imgContainer = document.createElement("img");

const slideImages = ["img-01.jpg", "img-02.jpg", "img-03.jpg", "img-04.jpg"];

imgContainer.src = slideImages[0];

let i = 0;
let j;
function moveForward() {
  imgContainer.setAttribute("src", `${slideImages[i]}`);
  i++;
  j = i - 2;
  if (i === slideImages.length) {
    i = 0;
  } else {
    i = i;
  }
}

function moveBack() {
  imgContainer.setAttribute("src", `${slideImages[j]}`);
  j--;
  i = j + 2;
  j = j < 0 ? slideImages.length - 1 : j;
}

mainContainer.appendChild(imgContainer);

// auto back button
const autoBackBtn = document.createElement("button");
autoBackBtn.innerText = "Auto-Back";
document.body.appendChild(autoBackBtn);

// back button

const backBtn = document.createElement("button");
backBtn.innerText = "Back";
document.body.appendChild(backBtn);
backBtn.addEventListener("click", moveBack);

autoBackBtn.addEventListener("click", function () {
  var back = setInterval(moveBack, 2000);
  stopBtn.addEventListener("click", function () {
    clearInterval(back);
  });
});

// stop button

const stopBtn = document.createElement("button");
stopBtn.innerText = "Stop";
document.body.appendChild(stopBtn);

// forward button

const nextBtn = document.createElement("button");
nextBtn.innerText = "Forward";
document.body.appendChild(nextBtn);
nextBtn.addEventListener("click", moveForward);

// auto forward button

const autoForwardBtn = document.createElement("button");
autoForwardBtn.innerText = "Auto-Forward";
document.body.appendChild(autoForwardBtn);

autoForwardBtn.addEventListener("click", function () {
  var forward = setInterval(moveForward, 2000);
  stopBtn.addEventListener("click", function () {
    clearInterval(forward);
  });
});
