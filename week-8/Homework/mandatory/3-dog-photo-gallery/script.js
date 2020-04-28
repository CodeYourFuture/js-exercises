// Write a function that makes an API call to `https://dog.ceo/api/breeds/image/random`. It should trigger after clicking a button in your webpage. Every time the button is clicked it should append a new dog image to the DOM.

// - Create an `index.html` file that will display your random image
// - Add 2 `<button>` and 1 `<ul>` element, either in the HTML or through JavaScript
// - When the button is clicked it should make an API call to `https://dog.ceo/api/breeds/image/random`
// - After receiving the data, append to the `<ul>` a `<li>` that contains an `<img>` element with the dog image
// - Incorporate error handling
function getImageData() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      newImage(data);
    });
}

function newImage(images) {
  let callBtn = document.querySelector("#imgBtn");
  let imgShow = document.querySelector("#image");
  callBtn.addEventListener("click", () => {
    imgShow.src = images;
  });
}

window.onload = getImageData;
