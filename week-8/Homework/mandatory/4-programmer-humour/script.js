let divEl = document.getElementById("container");
let imgEl = document.createElement("img");
divEl.appendChild(imgEl);

fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    image(data);
  });

function image(imageData) {
  imgEl.src = imageData.img;
}
