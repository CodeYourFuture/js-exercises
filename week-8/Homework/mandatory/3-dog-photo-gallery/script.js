const btn1El = document.createElement("button");
const listEl = document.createElement("ul");

document.body.appendChild(btn1El);
btn1El.textContent = "Generate a random dog photo";
document.body.appendChild(listEl);

btn1El.addEventListener("click", () => {
  doSomething();
});

function doSomething() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((url) => {
      console.log(url);
      addRandomImg(url);
    })
    .catch((error) => console.log(error));
}

function addRandomImg(url) {
  let liEl = document.createElement("li");
  listEl.appendChild(liEl);
  let imgEl = document.createElement("img");
  listEl.appendChild(imgEl);
  imgEl.src = url.message;
}
