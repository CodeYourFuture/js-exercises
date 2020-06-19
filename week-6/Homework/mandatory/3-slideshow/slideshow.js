// Write your code here
let imgsrc = "/Homework/mandatory/3-slideshow/imgs/slide-1.jpg";
console.log("test ", imgsrc.substr(1, 42), imgsrc.substr(43, 1));
console.log(Math.ceil(Math.random() * 4));

document.getElementById("btn").addEventListener("click", (e) => {
  console.log(e);
});

// function pickFromArray(choices) {
//   return choices[Math.floor(Math.random() * choices.length)];
// }

// let image = document.getElementById("image");
// let imageSrc = image.src;
// console.log("test ", imageSrc);
// image.src = pickFromArray(images);

// console.log(imageSr);
