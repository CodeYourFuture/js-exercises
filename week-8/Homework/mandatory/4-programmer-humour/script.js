// Write an function that makes an API call to `https://xkcd.now.sh/?comic=latest`

// 1. Create a `HTML`, `CSS` and `JavaScript` file to write your code in
//    - You can use an example HTML like this here

// - Inside the same file write a program that gets the `json` using Fetch.
// - Each function should make an API call to the given endpoint: `https://xkcd.now.sh/?comic=latest`
// - Log the received data to the console
// - Render the `img` property into an `<img>` tag in the DOM
// - Incorporate error handling
function getApiElement() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      console.log(obj);
      putImage(obj);
    })
    .catch((err) => console.error(err));
}

function putImage(images) {
  let image = document.createElement("img");
  document.querySelector("#imgbox").appendChild(image);
  image.src = images.img;
}

window.onload = getApiElement;
