// Write your code here
const autoPreviusButton = document.getElementById("auto-backward");
const previusButton = document.getElementById("backward");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("forward");
const autoNextsButton = document.getElementById("auto-forward");
let imageSource = document.getElementById("pic");
let images = [
  "pictures/charles-postiaux-Q6UehpkBSnQ-unsplash.jpg",
  "pictures/chris-karidis-nnzkZNYWHaU-unsplash.jpg",
  "pictures/ferdinand-stohr-PeFk7fzxTdk-unsplash.jpg",
  "pictures/joshua-ang-Gf_KqXHU-PY-unsplash.jpg",
  "pictures/wael-hneini-QJKEa9n3yN8-unsplash.jpg",
];
let i = 0;
let autoForward;
let autoGetBack;
//imageSource = images[i];

function imageChange() {
  autoNextsButton.addEventListener("click", () => {
    clearInterval(autoGetBack);
    clearInterval(autoForward);
    autoForward = setInterval(() => {
      imageSource.src = images[i++];
      if (i == images.length) {
        i = 0;
      }
    }, 3000);
  });
  autoPreviusButton.addEventListener("click", () => {
    clearInterval(autoForward);
    clearInterval(autoGetBack);
    autoGetBack = setInterval(() => {
      imageSource.src = images[i--];
      if (i < 0) {
        i = images.length - 1;
      }
    }, 3000);
  });
  nextButton.addEventListener("click", () => {
    clearInterval(autoForward);
    clearInterval(autoGetBack);
    imageSource.src = images[i++];
    if (i == images.length) {
      i = 0;
    }
  });
  previusButton.addEventListener("click", () => {
    clearInterval(autoForward);
    clearInterval(autoGetBack);
    imageSource.src = images[i--];
    if (i < 0) {
      i = images.length - 1;
    }
  });
  pauseButton.addEventListener("click", function () {
    clearInterval(autoForward);
    clearInterval(autoGetBack);
  });
}
window.onload = imageChange;
