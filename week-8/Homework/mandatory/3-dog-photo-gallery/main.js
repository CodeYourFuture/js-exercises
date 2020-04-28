let root = document.getElementById("root");
root.style.width = "100%";
let button = document.createElement("button");
root.appendChild(button).innerText = "New dog";
button.addEventListener("click", randomDog);
let ul = document.createElement("ul");
root.appendChild(ul);
ul.setAttribute("style", "display: flex; flex-wrap: wrap");

function randomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      let li = document.createElement("li");
      li.style.listStyleType = "none";
      ul.appendChild(li);
      let img = document.createElement("img");
      li.appendChild(img);
      img.src = data.message;
      img.style.margin = "10px";
    })
    .catch((error) => console.error(error));
}
