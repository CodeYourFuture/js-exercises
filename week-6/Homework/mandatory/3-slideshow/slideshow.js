const mainContainer = document.createElement("div");
document.body.appendChild(mainContainer);

const imgContainer = document.createElement("img");

const slideImages = ["img-01.jpg", "img-02.jpg", "img-03.jpg", "img-04.jpg"];

let n = 0;

function moveForward() {
  imgContainer.setAttribute("src", `${slideImages[n]}`);
  n++;
}

function moveBack() {
  imgContainer.setAttribute("src", `${slideImages[n]}`);
  n--;
}

// const slideImages = ["img1", "img2", "img3", "img4"];

mainContainer.appendChild(imgContainer);

// back button

const backBtn = document.createElement("button");
backBtn.innerText = "Back";
document.body.appendChild(backBtn);
backBtn.addEventListener("click", moveBack);

// forward button

const nextBtn = document.createElement("button");
nextBtn.innerText = "Forward";
document.body.appendChild(nextBtn);
nextBtn.addEventListener("click", moveForward);
