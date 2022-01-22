// Write your code here
const NoOfImages = 4;
let currentImage;
let imgSrc = "/Homework/mandatory/3-slideshow/imgs/slide-1.jpg";
let nextImage;

function imageNo() {
  let image = document.getElementById("image");
  let imgSrc = image.src;
  return imgSrc.substr(64, 1);
}
// getElementById("btn").

document.addEventListener("click", (e) => {
  if (e.target.innerText === "Backward") {
    let currentImage = imageNo();
    console.log("current " + currentImage, "next ", nextImage);

    if (currentImage <= 1) {
      currentImage = 5;
      nextImage = currentImage;
      console.log("2", "current " + currentImage, "next ", nextImage);
    }
    nextImage = --currentImage;
    image.src =
      "/Homework/mandatory/3-slideshow/imgs/slide-" + nextImage + ".jpg";
  }

  if (e.target.innerText === "Forward") {
    let currentImage = imageNo();

    if (currentImage >= 4) {
      currentImage = 0;
      nextImage = currentImage;
    }
    nextImage = ++currentImage;
    image.src =
      "/Homework/mandatory/3-slideshow/imgs/slide-" + nextImage + ".jpg";
  }
});

// function pickFromArray(choices) {
//   return choices[Math.floor(Math.random() * choices.length)];
// }

// let image = document.getElementById("image");
// let imageSrc = image.src;
// console.log("test ", imageSrc);
// image.src = pickFromArray(images);

// console.log(imageSr);
