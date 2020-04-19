// Write your code here

let pic1 =
  "https://images.wallpaperscraft.com/image/autumn_drawing_walking_82963_960x544.jpg";
let pic2 =
  "https://images.wallpaperscraft.com/image/graffiti_wall_girl_art_110107_960x544.jpg";
let pic3 =
  "https://images.wallpaperscraft.com/image/painting_france_town_street_sea_sailing_boats_houses_porches_flag_flashlight_restaurant_umbrellas_bridge_flowers_58378_960x544.jpg";
let pic4 =
  "https://images.wallpaperscraft.com/image/graffiti_art_muzzle_wall_117800_960x544.jpg";
let pic5 =
  "https://images.wallpaperscraft.com/image/girl_face_art_147960_960x544.jpg";
let pic6 =
  "https://images.wallpaperscraft.com/image/vincent_van_gogh_the_starry_night_oil_canvas_117815_960x544.jpg";
let pic7 =
  "https://images.wallpaperscraft.com/image/vincent_van_gogh_selfportrait_with_a_straw_hat_portrait_135340_960x544.jpg";
let pic8 =
  "https://images.wallpaperscraft.com/image/vincent_van_gogh_wheat_field_with_cypresses_wheat_fields_120692_960x544.jpg";

let pictures = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
console.log(pictures.length);
let slide = document.querySelector("#slideBox");
let image = document.createElement("img");
slide.appendChild(image);
const fwdBtn = document.querySelector("#forward");
const backBtn = document.querySelector("#backward");
const autoFwdBtn = document.querySelector("#auto-forward");
const autoBackBtn = document.querySelector("#auto-backward");
const stopBtn = document.querySelector("#stop");

let i = 0;
image.src = pictures[i];

function forwardImg() {
  i++;
  i = i > pictures.length - 1 ? 0 : i;
  image.src = pictures[i];

  console.log(i, pictures.length - 1);
}
function backwardImg() {
  i--;

  i = i < 0 ? pictures.length - 1 : i;
  image.src = pictures[i];

  console.log(i);
}

fwdBtn.addEventListener("click", forwardImg);
backBtn.addEventListener("click", backwardImg);

let intervalFwd;
let intervalBckwd;
autoFwdBtn.addEventListener("click", function () {
  intervalFwd = setInterval(forwardImg, 1000);
  backBtn.addEventListener("click", function () {
    clearInterval(intervalFwd);
  });
  fwdBtn.addEventListener("click", function () {
    clearInterval(intervalFwd);
  });
  autoBackBtn.addEventListener("click", function () {
    clearInterval(intervalFwd);
  });
});

autoBackBtn.addEventListener("click", function () {
  intervalBckwd = setInterval(backwardImg, 1000);
  backBtn.addEventListener("click", function () {
    clearInterval(intervalBckwd);
  });
  fwdBtn.addEventListener("click", function () {
    clearInterval(intervalBckwd);
  });
  autoFwdBtn.addEventListener("click", function () {
    clearInterval(intervalBckwd);
  });
});

stopBtn.addEventListener("click", function () {
  clearInterval(intervalFwd);
  clearInterval(intervalBckwd);
});
