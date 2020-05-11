const display = document.querySelector(".holder");
console.log(display);
function getPhoto() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      display.innerHTML = `<img src=${data.message}>`;
    }).catch((error) => console.log("error"))

}


getPhoto()

let target = document.querySelector("button")

target.addEventListener("click", () => {
    getPhoto();
  });