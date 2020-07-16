let divEl = document.getElementById("container");

let buttonEl = document.createElement("button");
buttonEl.textContent = "Click Me";
let ulEl = document.createElement("ul");
let liEl = document.createElement("li");
let imgEl = document.createElement("img");

divEl.appendChild(buttonEl);
divEl.appendChild(ulEl);

ulEl.appendChild(liEl);
liEl.appendChild(imgEl);

function display() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      getImage(data);
    });

  function getImage(data) {
    imgEl.src = data.message;
  }
}

buttonEl.addEventListener("click", display);

window.onLoad = display();
