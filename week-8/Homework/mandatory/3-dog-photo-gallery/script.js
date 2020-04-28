let list = document.createElement("li");
let image = document.createElement("img");

let ulList = document.querySelector("#dog");
ulList.appendChild(list);
list.appendChild(image);
let button = document.querySelector("#btn");

button.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      image.src = data.message;
    })
    .catch((error) => {
      console.error(error);
    });
});
