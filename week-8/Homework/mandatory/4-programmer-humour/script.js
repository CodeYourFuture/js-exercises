function getImageData() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      newImage(data);
    })
    .catch((error) => console.error(error));
}
function newImage(images) {
  let image = document.createElement("img");
  let imageHolder = document.querySelector("#imageHolder");
  imageHolder.appendChild(image);
  image.src = images.img;
}
window.onload = getImageData;
